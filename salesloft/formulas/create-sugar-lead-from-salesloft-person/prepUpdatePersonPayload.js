console.log(steps.updateOrCreate.continue);

if (steps.updateOrCreate.continue === false) {
  var person = steps.updateSugarLead.response.body;
} else {
  var person = steps.createSugarLead.response.body;
}

person['sugar_object'] = 'Leads';
person['sugar_id'] = person.sugar_id;
person['sugar_url'] = `https://sugarinternal.sugarondemand.com/#Leads/${person.sugar_id}`;

delete person['stage'];

done({ payload: person });