const { Schema, model } = require('mongoose');

const schemaUser = new Schema ({
    name: {type: String, require },
    mail: {type: String, require, unique: true },
    password: {type: String, require },
    role: {type: String, require },//super-admin/admin
})

const User = model('User', schemaUser)
module.exports = User;
