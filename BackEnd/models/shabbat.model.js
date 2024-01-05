const { Schema, model } = require('mongoose')

const schemaSabbat = new Schema ({
    nameOfParasha: {type: String, require},
    enter: {type: String, require},
    exit: {type: String, require},
})

const ShabbatTime = model('ShabbatTime', schemaSabbat)
model.export = ShabbatTime;