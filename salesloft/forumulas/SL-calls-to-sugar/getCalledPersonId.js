
console.log(steps.getCallDetails.response.body);
const personId = steps.getCallDetails.response.body.called_person_id;


done({id: personId});