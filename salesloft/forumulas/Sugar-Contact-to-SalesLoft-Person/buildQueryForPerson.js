const sugarPerson = steps.getSugarRecord.response.body;

if(sugarPerson !== null && cust !== undefined) {
  if(sugarPerson.sugar_email !== null) {
  done ({
    "query" : {
    "where": "email_address = '" + sugarPerson.sugar_email + "'"
    }
  });
  } else {
    done(false);
  }
}
done(false);