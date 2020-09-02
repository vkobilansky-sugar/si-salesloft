const sugarRecord = steps.getSugarContactDetails.response.body;

let epicorRecord = sugarRecord;
epicorRecord.name = 'sii';
epicorRecord.company = 'sii';
epicorRecord.custom_id =  CE.randomString();
epicorRecord.account_type = 'CUS';
epicorRecord.customer_number = 5333; // need to get from API

done({payload: epicorRecord});

