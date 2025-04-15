import { customTrim } from "../../commonFunction/index.js"

export const modifyWagonDetailsData = (data,fileId) => {
    const headers = [
        'sr_no',
        'owning_railway_party',
        'type',
        'wago_no',
        'cc',
        'tare',
        'no_of_article',
        'commodity_code',
        'gross_wt',
        'dip_measurements',
        'dip_wt',
        'actual_wt',
        'permissible_cc',
        'over_wt',
        'over_wt_normal_rate',
        'over_wt_punitive_rate',
        'chargeable_wt'
    ]

    const modifiedData = [];
    data.forEach((e, idx) => {
        let r = {};
        e['Wagon Sr No.'] = Number(customTrim(e['Wagon Sr No.']));
        if (!isNaN(e['Wagon Sr No.']) && e['Wagon Sr No.'] > 0) {
            r.fileId = fileId
            r.srNo = e['Wagon Sr No.'];
            r.owningRailwayParty = customTrim(e['Owning Rly Party']);
            r.type = customTrim(e['Details of the Type']) || '';
            r.wagoNo = customTrim(e['RR Wago CC Number T']?.split(' ')[0]) || 0; //need length then we can cut
            r.cc = Number(customTrim(e['RR Wago CC Number T']?.split(' ')[1])) || 0; //need length then we can cut
            r.tare = Number(customTrim(e['Tare T'])) || 0;
            r.noOfArticle = Number(customTrim(e['No. Of Article.'])) || 0;
            r.commodityCode = Number(customTrim(e['Commodity Code'])) || 0;
            r.grossWt = Number(customTrim(e['Gross Wt'])) || 0;
            r.dipMeasurements = customTrim(e['DIP Measurement D.MS Lts']) || '';
            r.dipWt = Number(customTrim(e['DIP Wt T'])) || 0;

            r.permissibleCc = Number(customTrim(e['Permissible CC Tonne'])) || 0;  // Permissible CC
            r.overWt = Number(customTrim(e['Over Weight T Total'])) || 0;  // Over Weight
            r.overWtNormalRate = Number(customTrim(e['Over NormalPunitive Rate'].split(' ')[1])) || 0;  // Over Normal Rate
            r.overWtPunitiveRate = Number(customTrim(e['Weight Rate'])) || 0;  // Over Punitive Rate
            r.chargeableWt = Number(customTrim(e['Chargeable Wt T'])) || 0;  // Chargeable Weight
            modifiedData.push(r);
        }
    })
    return modifiedData
};


// {
//     'Wagon Sr No.': '59',
//     'Owning Rly Party': 'SR',
//     'Details of the Type': 'BOXNHL25T',
//     'RR Wago CC Number T': '22061912436 70',
//     'Tare T': '20.6',
//     'No. Of Article.': '0',
//     'Commodity Code': '2991129',
//     'Gross Wt': '90.6',
//     'DIP Measurement D.MS Lts': '',
//     'DIP Wt T': '0',
//     'Actual Wt T': '70',
//     'Permissible CC Tonne': '70',
//     'Over Weight T Total': '0',
//     'Over NormalPunitive Rate': '0 0',
//     'Weight Rate': '',
//     'Chargeable Wt T': '71'
//   }