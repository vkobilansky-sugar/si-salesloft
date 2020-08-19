const moment = require('moment');

let sugarRecord = steps.getLeadNoteContent.response.body;

const note = steps.getNoteDetails.response.body;
const timestamp = moment(note.timestamp);

noteTime = timestamp.format('MMMM D, YYYY hh:mm:ss A');

let oldNote = '';
if (sugarRecord.next_steps !== ''  && sugarRecord.next_steps !== undefined) {
  oldNote = sugarRecord.next_steps + '\n\n';
}

sugarRecord.next_steps = `${oldNote}\n${noteTime}\n${note.note_content}`;

done({payload: sugarRecord});