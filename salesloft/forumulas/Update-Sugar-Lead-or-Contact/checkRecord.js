const personRecord = steps.getPersonDetails.response.body;

console.log(personRecord);

if(personRecord.hasOwnProperty('sugar_id') && personRecord.hasOwnProperty('sugar_object')) {
  done(true)
}
done(false)