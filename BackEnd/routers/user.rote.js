const { Router } = require('express')
const route = Router()

const {
    register,
    logIn,
    checkCookie
} = require('../controllers/user.cont')

route
    .post('/register', register)
    .post('/login',  logIn)
    .get('/check-cookies', checkCookie)


module.exports = route;