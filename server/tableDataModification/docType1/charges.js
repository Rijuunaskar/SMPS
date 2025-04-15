export const modifyChargesData = (data , fileId) => {
    const modifiedData = {};
    data.forEach(e => {
        const key = `otherCharges${e.Code.charAt(0).toUpperCase()}${e.Code.slice(1).toLowerCase()}`;
        modifiedData[key] = parseFloat(e.Amount) || 0;
    });
    modifiedData.fileId = fileId;
    console.log(modifiedData);
    return modifiedData
}