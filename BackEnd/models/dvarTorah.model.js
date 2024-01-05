const { Schema, model } = require('mongoose')

const dvarTorahSchema = new Schema ({
    title: {type: String, require},
    dvarTorahText: {type: String, require}
})

const DvarTorahDetalis = model('DvarTorahDetalis', dvarTorahSchema)
model.export = DvarTorahDetalis;