let stage;

if (steps.getPersonDetails.response.body.stage === undefined || steps.getPersonDetails.response.body.stage === '') {
  stage = 18797;
}
  
done({stage: stage})