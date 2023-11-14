const User = require('../models/user.model')
const {regValidation, loginValidation} = require('../validation/user.valid')
const bCrypt = require('bcrypt')

exports.register = async(req, res) => {
    try {
        const { name, mail, password, role } = req.body
        const { error } = regValidation.validate({ name, mail, password, role })

        const hashpass = await bCrypt.hash(password, 10)

        const newUser = new User({name, mail, password: hashpass, role})
        await newUser.save()

        return res.send({continue: true, message: "User Saved"})
    } catch (error) {
        console.log(`Server Error: ${error}`)
    }
}

exports.logIn = async(req, res) => {
    try {
        const { mail, password } = req.body

        const { error } = loginValidation.validate({ mail, password })

        if(error) {
            return res.send({continue: false, message: error.message})
        }
    
        const userExist = await User.findOne({ mail })

        if(!userExist) {
            return res.send({continue: false, message: "User Not Exist"})
        } 
        
        if(password !== User.password) {
            return res.send({continue: false, message: "Something Get Wrong"})
        }

        return res.send({continue: true, message: "User Correct"})
        
    } catch (error) {
        console.log(`Server Error: ${error}`)
    }
}