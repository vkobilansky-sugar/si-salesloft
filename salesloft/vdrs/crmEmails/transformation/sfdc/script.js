if (fromVendor) {
  delete transformedObject.ownerAssigned
  delete transformedObject.parentType
  delete transformedObject.parentId
  delete transformedObject.accountId
  delete transformedObject.associationId
  delete transformedObject.associationType
  delete transformedObject.ownerAssigned

  const rp = require('request-promise')
  const buildErrorObject = (rpError) => {
    const errorObj = {}
    if (rpError.response) {
      errorObj.response_error_message = JSON.stringify(rpError.response.body)
      errorObj.response_status_code = rpError.response.statusCode
    } else {
      errorObj.response_error_message = rpError.message
      errorObj.statusCode = 501
    }
    throw errorObj
  }

  const elementRequest = (queryObj) => {
    const port = configuration.port ? `:${configuration.port}` : ''
    const options = {
      uri: `${configuration.protocol}://${configuration.host}${port}${configuration.pathPrefix}/query`,
      method: 'GET',
      json: true,
      headers: {
        accept: 'application/json',
        Authorization: `User ${configuration.userSecret}, Organization ${configuration.organizationSecret}, Element ${configuration.elementInstanceToken}`
      },
      qs: queryObj
    }
    return rp(options)
  }
  async function Response () {
    let taskResponse
    if (originalObject.ActivityId) {
      taskResponse = await elementRequest({ q: `select Id,What.Type,What.Id,Who.Type,Who.Id,OwnerId,AccountId from Task where Id='${originalObject.ActivityId}'` })
      if (taskResponse && taskResponse.length > 0) {
        if (taskResponse[0].What) {
          if (taskResponse[0].What.Type && taskResponse[0].What.Id) {
            transformedObject.parentType = taskResponse[0].What.Type
            transformedObject.parentId = taskResponse[0].What.Id
          }
        }
          if (taskResponse[0].Who) {
            if (taskResponse[0].Who.Id && taskResponse[0].Who.Type) {
              transformedObject.associationId = taskResponse[0].Who.Id
              transformedObject.associationType = taskResponse[0].Who.Type
            }
          }
        if (taskResponse[0].AccountId) {
          transformedObject.accountId = taskResponse[0].AccountId
        }
        if (taskResponse[0].OwnerId) {
          transformedObject.ownerAssigned = taskResponse[0].OwnerId
        }
      }
    }
    done(transformedObject)
  }
  Response()
    .catch((err) => done(buildErrorObject(err)))
    .catch((err) => done(err))
} else {
  done(transformedObject)
}
