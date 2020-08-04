console.log("test");
console.log(steps.getPersonDetails.response.body);

if (steps.getPersonDetails.response.body.sugar_object === "Leads") {
  done(true);
}
done(false);