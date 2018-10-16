const {Users} = require('../models');


const signUp = async(req,res) => {
    console.log(req.body)
    let user = await Users.create(req.body)

    /*var user = null
    Users.create(req.body).then((new_user) => {
        user=new_user
    })*/

    if(!user) return res.status(400).json({message:"Couldn't create user"})

    return res.status(201).json({message:"User created",id:user.id})
}



module.exports = {
    signUp


}