let sugarLead = steps.getSugarLead.response.body;

sugarLead['sugar_url'] = `https://si.stage.sugariapps.com/#Leads/${sugarLead.sugar_id}`;
sugarLead['sugar_object'] = 'Leads';
sugarLead['sugar_id'] = sugarLead.sugar_id;

if (!sugarLead.stage.length) {
  sugarLead['stage'] = 'New';
}

done ({ payload : sugarLead });