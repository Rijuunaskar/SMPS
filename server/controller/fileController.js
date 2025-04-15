const jsonData = require('../document-final.json');
const { modifyChargesData } = require('../dataModification/docType1/charges');
const { sequelize, WagonDetails, Charges, FormData, File } = require('../models');
const { customTrim } = require('../commonFunction');
const { modifyWagonDetailsData } = require('../dataModification/docType1/wagonDetails');
const { where } = require('sequelize');
const { getFieldName } = require('../dataModification/docType1/formData');

const extractText = (textAnchor, textContent) => {
    if (!textAnchor || !textAnchor.textSegments) return '';

    return customTrim(textAnchor.textSegments
        .map(segment => {
            const startIndex = parseInt(segment.startIndex) || 0;
            const endIndex = parseInt(segment.endIndex);
            return textContent.substring(startIndex, endIndex);
        })
        .join('')
        .trim());
}

const parseDocumentAiTable = (table, textContent) => {
    const headers = table.headerRows[0].cells.map(cell =>
        extractText(cell.layout.textAnchor, textContent)
    );

    const rows = table.bodyRows.map(row => {
        const rowData = {};
        row.cells.forEach((cell, idx) => {
            const key = headers[idx] || `Column${idx}`;
            const value = extractText(cell.layout.textAnchor, textContent);
            rowData[key] = value;
        });
        return rowData;
    });
    return rows;
}

/** *********************************************** Main Services **************************************** */
const loadDocument = async (req, res) => {
    let transaction = await sequelize.transaction();
    try {
        const payload = req.body;

        // create file first
        let resp = await File.create({
            fileName: 'TEST DOC',
            filePath: '/test-doc.pdf',
            docType: 1,
            createdBy: 1
        }, { transaction });
        const fileId = resp.id;

        // Ocr Document -  for now using jsonData
        let formattedFieldData = [];
        let tables = [];
        jsonData.pages.forEach(p => {
            p?.formFields?.forEach(e => {
                let fieldName = getFieldName(customTrim(e.fieldName.textAnchor.content));
                if(fieldName){
                    formattedFieldData.push({
                        fieldName,
                        fieldValue: customTrim(e.fieldValue.textAnchor.content),
                        fileId: fileId
                    });
                }
            })
            p?.tables?.forEach(t => {
                let parsedData = parseDocumentAiTable(t, jsonData.text);
                tables.push(parsedData);
            })
        })

        // form
        await FormData.bulkCreate(formattedFieldData, { transaction });
        // table
        let chargesBody = modifyChargesData(tables[1], fileId);
        await Charges.create(chargesBody, { transaction });
        let wagonDetailsBOdy = modifyWagonDetailsData(tables[3], fileId);
        await WagonDetails.bulkCreate(wagonDetailsBOdy, { transaction });
        await transaction.commit();
        return res.status(201).json({
            message: 'Document loaded successfully',
            data: fileId,
        });
    } catch (error) {
        console.log(error);
        await transaction.rollback();
        console.error('Error in loadDocument:', error);
        return res.status(500).json({ message: 'Something went wrong', error });
    }
};

const getDataByFileId = async (req, res) =>{
    try {
        const fileId = req.params.id;
        let result = await File.findOne({
            include:[
                {
                    model: WagonDetails,
                    as : 'wagonDetails'
                },
                {
                    model: Charges,
                    as : 'charges'
                },
                {
                    model: FormData,
                    as : 'formData'
                }
            ],
            where:{
                id: fileId
            }
        });
        const data = {
          result,
          message: 'Data fetched successfully!',
          // Add any fetched data here
        };
        res.status(200).json(data);
      } catch (error) {
        console.error('Error loading document:', error);
        res.status(500).json({ error: 'Something went wrong' });
      }
}

module.exports = { loadDocument,getDataByFileId };
