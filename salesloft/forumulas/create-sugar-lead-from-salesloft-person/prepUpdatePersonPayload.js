console.log(steps.updateOrCreate.continue);

if (steps.updateOrCreate.continue === false) {
  var person = steps.updateSugarLead.response.body;
} else {
  var person = steps.createSugarLead.response.body;
}

person['sugar_object'] = 'Leads';
person['sugar_id'] = person.sugar_id;
person['sugar_url'] = `https://si.stage.sugariapps.com/#Leads/${person.sugar_id}`;

done({ payload: person });