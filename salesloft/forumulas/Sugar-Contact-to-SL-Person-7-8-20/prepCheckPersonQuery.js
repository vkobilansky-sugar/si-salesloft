done( 
  { query: 
    { where:  "email_address='" + 
              steps.getSugarLead.response.body.sugar_primary_email + "'"
      
    }
  }
);