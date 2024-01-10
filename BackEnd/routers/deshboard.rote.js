const { Router } = require('express')
const route = Router()

const {
    dvarTorah,
    shabbat,
    update
} = require('../controllers/deshboard.cont')

route
   .post('/dvarTorah', dvarTorah)
   .post('/shabbatTime', shabbat)
   .post('/update', update)

module.exports = route;