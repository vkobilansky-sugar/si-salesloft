let sugarRecord = steps.getPersonDetails.response.body;
sugarRecord['sugar_sl_record'] = 
`https://app.salesloft.com/app/people/${trigger.event.objectId}`;
              

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}


const stagesToStatus = {
  "New" : "New", 
  "Pursuing" : "Pursuing",
  "connected" : "Connected",
  "reenergized" : "Re-energized",
  "Remarket/Nurture" : "Remarket",
  "Sales Nurture": "On Hold",
  "do_not_contact" : "Do Not Contact",
  "Dead" : "Dead",
  "Bad Contact" : "Bad Contact",
  "Converted" : "Converted",
  "Raw Contact" : "Raw Contact",
  "Warm Contact" :  "Warm Contact",
};

    
sugarRecord['stage'] = getKeyByValue(stagesToStatus, steps.getStageNameById.response.body.name);

done({payload: sugarRecord});