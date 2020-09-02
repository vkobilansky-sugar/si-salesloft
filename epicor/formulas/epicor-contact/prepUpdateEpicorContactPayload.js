const sugarRecord = steps.getSugarContactDetails.response.body;
const epicorContact = steps.getEpicorContactByEmail.response.body;

let epicorRecord = sugarRecord;
epicorRecord.name = 'sii';
epicorRecord.company = 'sii';
epicorRecord.custom_id =  CE.randomString();
epicorRecord.account_type = 'CUS';
epicorRecord.customer_number = epicorContact.customer_number;

// delete epicorRecord.annual_revenue;
// delete epicorRecord.phone_fax;

done({payload: epicorRecord});
