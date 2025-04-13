const modifyTable3Data = (data) => {
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
    const modifiedData = data.map((e, idx) => {
        let r = {}
        headers.forEach(h=>{
            
        })
    })
    return modifiedData
}

export default modifyTable3Data;