const { Router } = require('express');
const route = Router();

const {
  postDvarTorah,
  getDvarTorah,
  updateDvarTora,
  shabbat,
  updateDvarTorah,
  getShabbatTime,
  postDavningTime,
  getDavningTime,
  postKibotzUpdate,
  getKibotzUpdate,
} = require('../controllers/deshboard.cont');
const { tokenCheck } = require('../middleware/userTokenCheck');

route
  .post('/dvarTorah', tokenCheck, postDvarTorah)
  .get('/getDvarTorah', getDvarTorah)
  .patch('/updateDvarTora', tokenCheck ,updateDvarTora)
  .post('/shabbatTime', tokenCheck, shabbat)
  .get('/getShabbatTime', getShabbatTime)
  .post('/update', tokenCheck, updateDvarTorah) // update dvar torah -> save the new dvar torah in db
  .post('/davningTime', tokenCheck, postDavningTime) //post of daving time -> save the data in the db
  .get('/getDavningTime', getDavningTime) //get davmimg time -> bring the data from db
  .post('/postKibotzUpdate', tokenCheck, postKibotzUpdate) //post news update -> save the data in the db
  .get('/getKibotzUpdate', getKibotzUpdate); // get all the news -> bring the data from db

module.exports = route;
