let sugarLead = steps.getSugarLead.response.body;

if (steps.filterCheckPersonByLeadEmail.continue === true) {
 sugarLead['sugar_sl_record'] = 
 `https://app.salesloft.com/app/people/${steps.checkIfPersonExistsByLeadEmail.response.body[0].sl_id}`;
} else {
  sugarLead['sugar_sl_record'] = 
 `https://app.salesloft.com/app/people/${steps.createPersonFromLead.response.body.sl_id}`;
}

sugarLead['sync_to_salesloft'] = 0;

delete sugarLead['stage'];

done({payload: sugarLead});