const jsonData = require('./document-final.json');
const {default: modifyTable1Data } = require('./tableDataModification/docType1/table1');
const db = require('./models');
const { customTrim } = require('./commonFunction');
const { default: modifyTable3Data } = require('./tableDataModification/docType1/table3');
// console.log(jsonData);
let formattedFieldData = {};
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
        formattedFieldData[customTrim(e.fieldName.textAnchor.content)] = customTrim(e.fieldValue.textAnchor.content);
    })
    p?.tables?.forEach(t => {
        let parsedData = parseDocumentAiTable(t, jsonData.text);
        tables.push(parsedData);
    })
})

//ignoring 0th, as it is not required
// let table1 = modifyTable1Data(tables[1])3
// db.Table.bulkCreate(table1);
// let table2 = modifyTable1Data(tables[2]);
let table3 = modifyTable3Data(tables[3]);


