const { Router } = require('express')
const route = Router()

const {
    dvarTorah
} = require('../controllers/deshboard.cont')

route
   .post('/dvarTorah', dvarTorah)

module.exports = route;