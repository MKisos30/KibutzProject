const { Schema, model } = require('mongoose')

const schemaUpdate = new Schema ({
    time: {
        type: String,
        default: new Date().getTime()
    },
    text: {
        type: String,
        require: [true, "התוכן חייב להיות מלא"]
    }
})

const UpdateObjects = model('UpdateObjects', schemaUpdate)
model.export = UpdateObjects;