const person = steps.getPersonForPhoneCall.response.body;

var callRecord = steps.getCallDetails.response.body;

callRecord.sugar_id = person.sugar_id;
callRecord.sugar_object = person.sugar_object;

if (callRecord.hasOwnProperty('duration')) {
  callRecord.duration = callRecord.duration / 60;
} else {
  var startDate = new Date(callRecord.start);
  var endDate = new Date(callRecord.end);
  
  var diffMili = (endDate - startDate);
  
  var diffMins = Math.round(((diffMili % 86400000) % 3600000) / 60000) + 1;
  callRecord.duration = diffMins;

}

if(steps.getCallNote) {
  callRecord.description = steps.getCallNote.response.body.note_content;
}

callRecord.name = `${callRecord.disposition} ${callRecord.sentiment ? ' - ' + callRecord.sentiment : ''}`;

callRecord.status = 'Held';

done({ 
  payload: callRecord
});