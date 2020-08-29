const personRecord = steps.getPersonDetails.response.body;

if(personRecord.hasOwnProperty('sugar_primary_email') &&
   personRecord.hasOwnProperty('sugar_first_name') &&
   personRecord.hasOwnProperty('sugar_last_name') &&
   personRecord.hasOwnProperty('lead_source') &&
   personRecord.hasOwnProperty('sugar_country')) {
     
  done(true);
  
}

done(false);