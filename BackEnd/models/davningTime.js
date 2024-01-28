const { Schema, model } = require('mongoose')

const davningTimeSchema = new Schema({
    title: {type: String, require},
    minchaErevShabbat: {type: String, require},
    shacharit: {type: String, require},
    mincha: {type: String, require},
    arvit: {type: String, require}
})

const DavningTimeDetails = model('DavningTimeDetails', davningTimeSchema)
module.exports = DavningTimeDetails;
