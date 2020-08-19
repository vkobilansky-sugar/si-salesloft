let sugarContact = steps.getSugarContact.response.body;

if (steps.filterCheckPersonByContactEmail.continue === true) {
sugarContact['sugar_sl_record'] = 
`https://app.salesloft.com/app/people/${steps.checkIfPersonExistsByContactEmail.response.body[0].sl_id}`;
} else {
  sugarContact['sugar_sl_record'] = 
`https://app.salesloft.com/app/people/${steps.createPersonFromContact.response.body.sl_id}`;
}
sugarContact['sync_to_salesloft'] = 0;
                  
done({payload: sugarContact});
