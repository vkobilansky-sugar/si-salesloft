const personRecord = steps.getPersonDetails.response.body;

console.log(personRecord);

if(personRecord.hasOwnProperty('sugar_id') && 
   personRecord.hasOwnProperty('sugar_object') && 
   personRecord.hasOwnProperty('sugar_primary_email')) {
  done(true)
}
done(false)