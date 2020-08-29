const slStages = steps.getAllStages.response.body;
const slUsers = steps.getAllSalesLoftUsers.response.body;

const statusToStages = {
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


let sugarLead = steps.getSugarLead.response.body;

let assignedUserEmail = null;

if (steps.getAssignedUserToLead.response.hasOwnProperty('body')) {
  assignedUserEmail = steps.getAssignedUserToLead.response.body.email;
}

sugarStatus = 'New';

if (sugarLead.hasOwnProperty('stage')) {
  sugarStatus = statusToStages[sugarLead.stage];
}

sugarLead['sugar_url'] = `https://sugarinternal.sugarondemand.com/#Leads/${sugarLead.sugar_id}`;
sugarLead['sugar_object'] = 'Leads';
sugarLead['sugar_id'] = sugarLead.sugar_id;

let slStage = slStages.find(slStage => slStage.name === sugarStatus);
let stageId = null;

if(slStage !== undefined && slStage.hasOwnProperty('id')) {
  stageId = slStage.id; 
}

sugarLead['stage'] = stageId;

let slOwner = slUsers.find(u => u.fromEmailAddress === assignedUserEmail);
let ownerId = null;

if(slOwner !== undefined && slOwner.hasOwnProperty('id')) {
  ownerId = slOwner.id; 
}

sugarLead['owner_id'] = ownerId;

done ({ payload : sugarLead });