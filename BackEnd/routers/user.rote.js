const { Router } = require('express')
const route = Router()

const {
    register,
    logIn
} = require('../controllers/user.cont')

route
    .post('/register', register)
    .post('/login',  logIn)

module.exports = route;