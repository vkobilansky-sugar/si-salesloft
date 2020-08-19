if (!fromVendor) {
  //set status = Archived
  transformedObject.type = 'Archived';

  // generate links array

  const linksArray = [];
  if (originalObject.ownerAssigned) {
    const linksArrayObj = {};
    linksArrayObj.key = 'assigned_user_id';
    linksArrayObj.path = 'assigned_user_link';
    linksArray.push(linksArrayObj);
  }

  if (originalObject.parentType !== 'Account') {
    if (originalObject.accountId) {
      const linksArrayObj = {};
      linksArrayObj.key = 'account_id';
      linksArrayObj.path = 'accounts';
      linksArray.push(linksArrayObj);
    }
  }

  if (originalObject.parentType === 'Opportunity') {
    if (originalObject.parentId) {
      const linksArrayObj = {};
      linksArrayObj.key = 'parent_id';
      linksArrayObj.path = 'opportunities';
      linksArray.push(linksArrayObj);
    }
  } else if (originalObject.parentType === 'Account'){
    if (originalObject.parentId) {
      const linksArrayObj = {};
      linksArrayObj.key = 'parent_id';
      linksArrayObj.path = 'accounts';
      linksArray.push(linksArrayObj);
    }
  } else if (originalObject.parentType === 'Quote'){
    if (originalObject.parentId) {
      const linksArrayObj = {};
      linksArrayObj.key = 'parent_id';
      linksArrayObj.path = 'quotes';
      linksArray.push(linksArrayObj);
    }
  } else if (originalObject.parentType === 'Case'){
    if (originalObject.parentId) {
      const linksArrayObj = {};
      linksArrayObj.key = 'parent_id';
      linksArrayObj.path = 'cases';
      linksArray.push(linksArrayObj);
    }
  }

  if (originalObject.associationType === 'Lead') {
    if (originalObject.associationId) {
      const linksArrayObj = {};
      linksArrayObj.key = 'association_id';
      linksArrayObj.path = 'leads';
      linksArray.push(linksArrayObj);
    }
  } else if (originalObject.associationType === 'Contact') {
    if (originalObject.associationId) {
      const linksArrayObj = {};
      linksArrayObj.key = 'association_id';
      linksArrayObj.path = 'contacts';
      linksArray.push(linksArrayObj);
    }
  }

  if(linksArray.length>0){
    transformedObject.links = linksArray;
  }
}
done(transformedObject)
