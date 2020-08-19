const personId = steps.getCallDetails.response.body[0].called_person_id;


done({id: personId});