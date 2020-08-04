let sugarContact = steps.getSugarContact.response.body;

sugarContact['sugar_sl_record'] = 
`https://app.salesloft.com/app/people/${checkIfPersonExistsByContactEmail.response.body[0].sl_id}`;
sugarContact['sync_to_salesloft'] = 0;
                  
done({payload: sugarContact});
