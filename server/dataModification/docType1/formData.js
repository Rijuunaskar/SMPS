export const getFieldName = (str) => {
    switch(str){
        case "Earned":
            return "total_green_points_earned";
        case "Commodity Description":
            return "commodity_description";
        case "Zone":
            return "zone";
        case "Sender Weight":
            return "sender_weight";
        case "Class":
            return "weighted_at_class";
        case "Charged VIA":
            return "charged_via";
        case "Rate":
            return "weighted_at_rate"; // two rate coming
        case "Risk Rate":
            return "risk_rate";
        case "Delivery Book Folio No":
            return "delivery_book_folio_no";
        case "Actual Weight":
            return "actual_weight";
        case "Over Weight Chargeable at Punitive Rate":
            return "over_weight_chargeable_at_punitive_rate";
        case "No of Articles":
            return "no_of_articles";
        case "Traffic Type":
            return "traffic_type";
        case "HSN Code":
            return "hsn_code";
        case "Train Wagon Load":
            return "train_wagon_load";
        case "Rate Type":
            return "rate_type";
        case "Commodity Code":
            return "commodity_code";
        case "Consignee s Name":
            return "consignees_name";
        case "Wagons":
            return "wagons";
        case "Chargeable Weight at Normal Rate":
            return "chargeable_weight_at_normal_rate";
        case "TAX Invoice Number":
            return "tax_invoice_number";
        case "To Station Siding":
            return "to_station_siding";
        case "From Station Siding":
            return "from_station_siding";
        case "RR No.":
            return "rr_no";
        case "F Note Number.":
            return "f_note_number";
        case "Handled By":
            return "handled_by";
        case "Address":
            return "consignors_address";  // two coming
        case "Consignor s Name":
            return "consignors_name";
        case "FNR":
            return "fnr";
        case "Distance In KM":
            return "distance_in_km";
        case "F Note Date":
            return "f_note_date";
        case "Packaging Code":
            return "packaging_code";
        case "Freight":
            return "freight";
        case "Total Weight":
            return "total_weight";
        case "RR Date":
            return "rr_date";
        case "Invoice Date":
            return "invoice_date";
        case "Total Freight":
            return "total_freight";
        case "GSTIN":     //two coming
            return "consignors_name";
        case "Invoice Number":
            return "invoice_number";
        default:
            return false;  //snake case
    }
}