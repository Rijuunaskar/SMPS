const modifyTable1Data = (data) => {
    const modifiedData = data.map((e, idx) => {
        return {
            fieldName: `other_charges_${e?.Code}`,
            fieldValue: e?.Amount,
            rowNumber: idx + 1,
            docType: 1,
            createdBy: 1,
            table: 1
        }
    })
    return modifiedData
}

export default modifyTable1Data;