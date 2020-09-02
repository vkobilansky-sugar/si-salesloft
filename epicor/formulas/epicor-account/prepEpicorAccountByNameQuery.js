done( 
  { query: 
    { where: `name='${steps.getSugarAccountDetails.response.body.name}'`
    }
  }
);