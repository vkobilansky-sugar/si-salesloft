if (steps.getEpicorContactByEmail.response.body.hasOwnProperty('account_name')) {
  done(true);
}
done(false);