let sugarLead = steps.getSugarLead.response.body;

sugarLead['sugar_url'] = `https://si.stage.sugariapps.com/#Leads/${sugarLead.sugar_id}`;

done ({ payload : sugarLead });