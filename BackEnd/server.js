const express = require('express')
const app = express()
const PORT = process.env.PORT || 8787
const cors = require("cors")
require('dotenv').config()
const mongoose = require('./ConectDB')
const cookieParser = require('cookie-parser')

const whitelist = ['http://127.0.0.1:5173']
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    optionsSuccessStatus: 200
}

mongoose()
app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())

app.use('/auth', require('./routers/user.rote'))
app.use('/deshboard', require('./routers/deshboard.rote'))

app.listen(PORT, () => {
    console.log(`listen on http://localhost:${PORT}`)
})
