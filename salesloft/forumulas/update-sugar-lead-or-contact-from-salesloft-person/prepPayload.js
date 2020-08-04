let personRecord = steps.getPersonDetails.response.body;
personRecord['sugar_sl_record'] = 
`https://app.salesloft.com/app/people/${trigger.event.objectId}`;
                  

done({payload: personRecord})