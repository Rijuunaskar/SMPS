const jsonData = require('./document-final.json');
const { modifyChargesData } = require('./tableDataModification/docType1/charges');
const {WagonDetails,Charges,FormData} = require('./models');
const { customTrim } = require('./commonFunction');
const { modifyWagonDetailsData } = require('./tableDataModification/docType1/wagonDetails');
// console.log(jsonData);
let formattedFieldData = [];
let tables = [];

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

jsonData.pages.forEach(p => {
    p?.formFields?.forEach(e => {
        formattedFieldData.push({
            fieldName : customTrim(e.fieldName.textAnchor.content),
            fieldValue : customTrim(e.fieldValue.textAnchor.content),
            fileId: 1
        });
    })
    // p?.tables?.forEach(t => {
    //     let parsedData = parseDocumentAiTable(t, jsonData.text);
    //     tables.push(parsedData);
    // })
})

// FormData.bulkCreate(formattedFieldData);
//ignoring 0th, as it is not required
// let chargesBody = modifyChargesData(tables[1]);
// Charges.create(ChargesBody);
// let wagonDetails = modifyWagonDetailsData(tables[3]);
// WagonDetails.bulkCreate(wagonDetails);



