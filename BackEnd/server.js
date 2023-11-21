const express = require('express')
const app = express()
const PORT = process.env.PORT || 8787
require('dotenv').config()
const mongoose = require('./ConectDB')
const cookieParser = require('cookie-parser')

mongoose()

app.use(express.json())
app.use(cookieParser())

app.use('/auth', require('./routers/user.rote'))

app.listen(PORT, () => {
    console.log(`listen on http://localhost:${PORT}`)
})
