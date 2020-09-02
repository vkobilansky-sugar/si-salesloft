const sugarRecord = steps.getSugarAccountDetails.response.body;

let epicorRecord = sugarRecord;
epicorRecord.name = sugarRecord.name;
epicorRecord.company = 'SII';
epicorRecord.body = 'body';

done({payload: epicorRecord});