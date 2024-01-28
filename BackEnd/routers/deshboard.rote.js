const { Router } = require('express')
const route = Router()

const {
    postDvarTorah,
    getDvarTorah,
    shabbat,
    update, 
    getShabbatTime,
    davningTime
} = require('../controllers/deshboard.cont')

route
   .post('/dvarTorah', postDvarTorah)
   .get('/getDvarTorah', getDvarTorah)
   .post('/shabbatTime', shabbat)
   .get('/getShabbatTime', getShabbatTime)
   .post('/update', update)
   .post('/davningTime', davningTime)
   // post לעידכוים

module.exports = route;