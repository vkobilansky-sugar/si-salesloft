let sugarContact = steps.getSugarContact.response.body;

sugarContact['sugar_url'] = `https://sg-vlad-test.demo.sugarcrm.com/#Contacts/${sugarContact.sugar_id}`;
sugarContact['sugar_object'] = 'Contacts';
sugarContact['sugar_id'] = sugarContact.sugar_id;

done ({ payload : sugarContact });