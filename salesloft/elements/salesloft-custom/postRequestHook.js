//the below code is to add elements total count to response header if present in response metadata
let responseHeader = response_headers;
let returnTotalCount = request_parameters['returnTotalCount'];

if(request_method === 'GET' && returnTotalCount === "true" && response_body) {
    let metadata = response_body.metadata;
    if(metadata && metadata.paging && metadata.paging.total_count) {
        responseHeader["Elements-Total-Count"] = metadata.paging.total_count;
    }
}

done({
  response_headers: responseHeader
});