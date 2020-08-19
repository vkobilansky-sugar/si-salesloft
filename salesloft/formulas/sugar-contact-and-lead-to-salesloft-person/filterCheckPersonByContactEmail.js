const checkPersonResponse = steps.checkIfPersonExistsByContactEmail.response;

if (checkPersonResponse.code === 200 &&
    ('body' in checkPersonResponse) &&
    checkPersonResponse.body.length !== 0) {
      done(true);
      
}

done(false);

