let sugarContact = steps.getSugarContact.response.body;

sugarContact['sugar_url'] = `https://si.stage.sugariapps.com/#Contacts/${sugarContact.sugar_id}`;
sugarContact['sugar_object'] = 'Contacts';
sugarContact['sugar_id'] = sugarContact.sugar_id;

done ({ payload : sugarContact });