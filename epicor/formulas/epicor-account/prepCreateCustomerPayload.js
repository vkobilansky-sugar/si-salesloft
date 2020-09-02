const sugarRecord = steps.getSugarAccountDetails.response.body;

let epicorRecord = sugarRecord;
epicorRecord.company ='sii';
epicorRecord.account_type = 'CUS';
epicorRecord.customer_id = CE.randomString();
epicorRecord.customer_number = 0;
epicorRecord.name = 'sii';

done({payload: epicorRecord});

