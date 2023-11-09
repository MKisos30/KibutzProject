const { Schema, model } = require('mongoose');

const schemaUser = new Schema ({
    name: String,
    mail: String,
    password: String,
    role: String,//super-admin/admin
})

const User = model('User', schemaUser)
module.exports = User;
