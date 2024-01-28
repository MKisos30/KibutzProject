const { Schema, model } = require('mongoose')

const schemaSabbat = new Schema ({
    nameOfParasha: {type: String, require},
    enterTelAviv: {type: String, require},
    enterHaifa: {type: String, require},
    enterEilat: {type: String, require},
    exitTelAviv: {type: String, require},
    exitrHaifa: {type: String, require},
    exitrEilat: {type: String, require},
})

const ShabbatTime = model('ShabbatTime', schemaSabbat)
module.exports = ShabbatTime;


// enterTelAviv, enterHaifa, enterEilat, exitTelAviv, exitrHaifa, exitrEilat