const { Schema, model } = require('mongoose')

const schemaSabbat = new Schema ({
    nameOfParasha: {type: String, require},
    enterTime: {type: String, require},
    exitTime: {type: String, require},
})

const ShabbatTime = model('ShabbatTime', schemaSabbat)
module.exports = ShabbatTime;