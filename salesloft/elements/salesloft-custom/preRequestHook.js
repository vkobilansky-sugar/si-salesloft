//The below code converts the where expresstion to a format accepted by the vendor. 
//If the query is on domain, per_page, page, it is passed on as it is.
//If the query is on any other attribute like updated_at, id, orderBy , it has to be converted to a appropriate format. eg:- updated_at > "date" --> updated_at[gt] = 'date'
function getKey (attribute, op) {
  return attribute+"["+op+"]";
}

if (request_method === 'GET') {
  let convertedVendorParams = request_vendor_parameters;
  let mappings = {
    "id" : "ids",
    "email_address": "email_addresses"
  };
  
  if (request_expression !== null) {
     for (var i = 0; i < request_expression.length; i++) {
      if (request_expression[i].attribute === 'updated_at' || request_expression[i].attribute === 'due_on'){
        switch(request_expression[i].operator){
          case '<' : 
             convertedVendorParams[getKey(request_expression[i].attribute, "lt")] = request_expression[i].value;
             break;
          case '>' : 
            convertedVendorParams[getKey(request_expression[i].attribute, "gt")] = request_expression[i].value;
             break;
          case '<=' : 
             convertedVendorParams[getKey(request_expression[i].attribute, "lte")] = request_expression[i].value;
             break;
          case '>=' : 
             convertedVendorParams[getKey(request_expression[i].attribute, "gte")] = request_expression[i].value;
             break;
        }
      } else if (mappings[request_expression[i].attribute]){
            convertedVendorParams[mappings[request_expression[i].attribute]] = request_expression[i].value;
      } else {
            convertedVendorParams[request_expression[i].attribute] = request_expression[i].value;
      }
    }
  }
   if (request_parameters.orderBy !== null && request_parameters.orderBy !== undefined) {
      let values = request_parameters.orderBy.split(' ');
      convertedVendorParams.sort_by=values[0];
      if (values[1] === 'asc') {
        convertedVendorParams.sort_direction='ASC';
      } else if (values[1] === 'desc') {
        convertedVendorParams.sort_direction='DESC';
      }
   }
  done({
     request_vendor_parameters: convertedVendorParams
   });
} else {
  done();
}