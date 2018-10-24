const {Users,Houses,Bookings,Addresses,Facilities,Comments} = require('../models');



module.exports =  () => {
    
    Users.truncate({
       cascade:true
    })

    Houses.truncate({
        cascade:true
    })

    Facilities.truncate()

    Addresses.truncate()

    Bookings.truncate({
        cascade:true
    })

    Comments.truncate({
        cascade:true
    })
   
    
   
    



}