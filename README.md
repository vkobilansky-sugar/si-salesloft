# Sugar Integrate Objects for SalesLoft Integration 



See cloud elements "the doctor" [documentation](https://github.com/CloudElementsOpenLabs/the-doctor) for more details. You will need to install and setup this tool to import files in this repo.

The module installer zip should be installed in the sugar instance that requires SalesLoft integration.

# Procedures

create-or-update-sugar-lead-from-salesloft-person
 - initial creation of Lead (or update if match found by email)

salesloft-notes-to-sugar
- when note is created in SalesLoft, append note content to the "next steps" field of the Sugar Lead
  
  
sugar-contact-and-lead-to-salesloft-person
- syncs Lead or Contact from Sugar to SL (create or update if found by email)

update-sugar-lead-or-contact-from-salesloft-person
- for the most part used to update status from SalesLoft stage. Will update other fields as well.

salesloft-calls-to-sugar
- sync phone call data and create call object related to Sugar Lead or Contact

salesloft-emails-to-sugar
- sync email data from SalesLoft related to Sugar Lead or Contact

# Common Resources
