let personRecord = steps.getPersonDetails.response.body;
personRecord['sugar_sl_record'] = 
`https://app.salesloft.com/app/people/${trigger.event.objectId}`;
personRecord['sync_to_salesloft'] = 0;


if (steps.getStageNameById) {
  slStage = steps.getStageNameById.response.body.name;
}

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

personRecord['stage'] = 'New';


done({payload: personRecord})