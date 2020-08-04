const sugarLead = steps.checkSugarLead.response.body[0];

if (sugarLead === undefined) {
  done (true);
}

if (sugarLead.sugar_object === "Lead" || !("sugar_object" in sugarLead)) {
  done(true);
}

done(false);