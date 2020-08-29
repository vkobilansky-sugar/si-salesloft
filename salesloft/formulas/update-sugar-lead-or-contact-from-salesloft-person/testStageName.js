let stage = steps.getPersonDetails.response.body.sl_stage;

if (stage === undefined || stage === '') {
  done(false);
}
  
done(true);