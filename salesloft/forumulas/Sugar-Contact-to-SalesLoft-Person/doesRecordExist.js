var customer = steps.checkIfPersonExists.response.body;

if((customer.length !== 0) || customer[0] !== null) {
  done(true);
} 
done(false);