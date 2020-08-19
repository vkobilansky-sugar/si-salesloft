const person = steps.getEmailRecepient.response.body;
const sender = steps.getSenderDetails.response.body;
var emailRecord = steps.getEmailDetails.response.body;

emailRecord.parentId = person.sugar_id;
emailRecord.parentType = person.sugar_object;
emailRecord.fromEmailAddress = sender.fromEmailAddress;
emailRecord.associationId = person.sugar_id;
emailRecord.associationType = person.sugar_object;
emailRecord.name = 'Email from SalesLoft (auto generated)';

done({ 
  payload: emailRecord
});