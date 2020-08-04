done( 
  { query: 
    { where: `sugar_primary_email='${steps.getPersonDetails.response.body.sugar_primary_email}'`
    }
  }
);