const person = steps.getPersonForMailing.response.body;

var emailRecord = steps.getEmailDetails.response.body[0];

emailRecord.sugar_id = person.sugar_id;
emailRecord.sugar_object = person.sugar_object;

done({ 
  payload: emailRecord
});