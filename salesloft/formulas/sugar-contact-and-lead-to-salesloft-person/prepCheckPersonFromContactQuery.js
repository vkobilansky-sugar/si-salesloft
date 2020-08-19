done( 
  { query: 
    { where: `email_address='${steps.getSugarContact.response.body.sugar_primary_email}'`
      
    }
  }
);

