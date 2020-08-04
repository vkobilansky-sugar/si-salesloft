let sugarLead = steps.getSugarLead.response.body;

sugarLead['sugar_url'] = `https://sg-vlad-test.demo.sugarcrm.com/#Leads/${sugarLead.sugar_id}`;

done ({ payload : sugarLead });