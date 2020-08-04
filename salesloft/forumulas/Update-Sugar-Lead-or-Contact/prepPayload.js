const payload = { "first_name" : "from procedure",
                  "salesloft_record_c" : "https://app.salesloft.com/app/people/" + trigger.event.objectId}


done({payload: payload})