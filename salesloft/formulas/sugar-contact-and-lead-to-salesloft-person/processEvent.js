
const sugarObject = trigger.event.objectType
  
if (sugarObject === 'Contact' || sugarObject === 'Contacts' || sugarObject === 'contacts') {
  done(true)
} 

done (false)