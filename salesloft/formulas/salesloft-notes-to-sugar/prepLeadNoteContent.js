const moment = require('moment');

let sugarRecord = steps.getLeadNoteContent.response.body;

const note = steps.getNoteDetails.response.body;
const timestamp = moment(note.timestamp);

noteTime = timestamp.format('YYYY-MM-DD');
let userName = `${steps.getUserForNote.response.body.first_name} ${steps.getUserForNote.response.body.last_name}`;

let oldNote = '';
if (sugarRecord.next_steps !== ''  && sugarRecord.next_steps !== undefined) {
  oldNote = sugarRecord.next_steps + '\n\n';
}

sugarRecord.next_steps = `${oldNote}\n${noteTime}, ${userName}\n${note.note_content}`;

done({payload: sugarRecord});