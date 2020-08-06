const personId = steps.getEmailDetails.response.body[0].recipient.id;


done({id: personId});