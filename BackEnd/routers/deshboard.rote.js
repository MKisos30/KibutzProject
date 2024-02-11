const { Router } = require('express')
const route = Router()

const {
    postDvarTorah,
    getDvarTorah,
    shabbat,
    updateDvarTorah, 
    getShabbatTime,
    postDavningTime,
    getDavningTime,
    postKibotzUpdate,
    getKibotzUpdate
} = require('../controllers/deshboard.cont')

route
   .post('/dvarTorah', postDvarTorah)
   .get('/getDvarTorah', getDvarTorah)
   .post('/shabbatTime', shabbat)
   .get('/getShabbatTime', getShabbatTime)
   .post('/update', updateDvarTorah) // update dvar torah -> save the new dvar torah in db
   .post('/davningTime', postDavningTime) //post of daving time -> save the data in the db
   .get('/getDavningTime', getDavningTime) //get davmimg time -> bring the data from db
   .post('/postKibotzUpdate', postKibotzUpdate) //post news update -> save the data in the db
   .get('/getKibotzUpdate', getKibotzUpdate) // get all the news -> bring the data from db

module.exports = route;