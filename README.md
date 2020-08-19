# Sugar Integrate Objects for SalesLoft Integration 

See cloud elements "the doctor" [documentation](https://github.com/CloudElementsOpenLabs/the-doctor) for more details. You will need to install and setup this tool to import files in this repo.

The module installer zip should be installed in the sugar instance that requires SalesLoft integration.

# Procedures

create-or-update-sugar-lead-from-salesloft-person
 - initial creation of Lead (or update if match found by email) when a new record is created in SalesLoft

salesloft-notes-to-sugar
- when note is created in SalesLoft, append note content to the "next steps" field of the Sugar Lead. Contact does not have a "next steps" field currently, but the logic to update it is there if the custom field needs to be created.

sugar-contact-and-lead-to-salesloft-person
- syncs Lead or Contact from Sugar to SL (creates new record or updates existing if found by email. currently it updates the first matching record)

update-sugar-lead-or-contact-from-salesloft-person
- for the most part used to update status from SalesLoft stage. Will update other fields as well.

salesloft-calls-to-sugar
- sync phone call data from SalesLoft and create call object related to Sugar Lead or Contact

salesloft-emails-to-sugar
- sync email data from SalesLoft related to Sugar Lead or Contact. 
- NOTE: SalesLoft stores very limited information about the email 

# Common Resources

Currently the common resources are split per vendor, this was done historically during the first phase and remained as is until the release. The resources can be combined together, for example `sl-calls` and `sugar-calls` can be combined into a single CR.

crmEmails 
- Required mapping for sugar Email record (post to create)

sl-calls
- Mapping for SalesLoft calls endpoint (get all, get by ID)

sl-emails
- SalesLoft emails (get all, get by ID)

sl-notes
- SalesLoft notes 

sl-person
- matches to sugar Lead or Contact (stores reference to the Object Type and ID)

sl-users
- User associated with the sync jobs and email sending

sugar-accounts
- not used

sugar-calls
- maps to sl-calls

sugar-contacts
- maps to sl-person

sugar-leads
- maps to sl-person

sugar-notes
- maps to sl-notes



