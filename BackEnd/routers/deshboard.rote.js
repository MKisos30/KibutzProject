const { Router } = require('express')
const route = Router()

const {
    postDvarTorah,
    getDvarTorah,
    shabbat,
    update, 
    getShabbatTime
} = require('../controllers/deshboard.cont')

route
   .post('/dvarTorah', postDvarTorah)
   .get('/getDvarTorah', getDvarTorah)
   .post('/shabbatTime', shabbat)
   .get('/getShabbatTime', getShabbatTime)
   .post('/update', update)

module.exports = route;