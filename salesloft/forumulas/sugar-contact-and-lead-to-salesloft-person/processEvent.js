
const sugarObject = trigger.event.objectType
  
if (sugarObject === 'Contact' || sugarObject === 'contacts') {
  done(true)
} 

done (false)