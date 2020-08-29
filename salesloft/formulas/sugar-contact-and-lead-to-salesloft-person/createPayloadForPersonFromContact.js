const slUsers = steps.getAllSalesLoftUsersForContact.response.body;

let sugarContact = steps.getSugarContact.response.body;

let assignedUserEmail = null;

console.log(steps.getAssignedUserToContact.response.hasOwnProperty('body'));

if (steps.getAssignedUserToContact.response.hasOwnProperty('body')) {
  assignedUserEmail = steps.getAssignedUserToContact.response.body.email;
}

console.log(assignedUserEmail);

sugarContact['sugar_url'] = `https://sugarinternal.sugarondemand.com/#Contacts/${sugarContact.sugar_id}`;
sugarContact['sugar_object'] = 'Contacts';
sugarContact['sugar_id'] = sugarContact.sugar_id;

let slOwner = slUsers.find(u => u.fromEmailAddress === assignedUserEmail);
let ownerId = null;

if(slOwner !== undefined && slOwner.hasOwnProperty('id')) {
  ownerId = slOwner.id; 
}

sugarContact['owner_id'] = ownerId;

done ({ payload : sugarContact });