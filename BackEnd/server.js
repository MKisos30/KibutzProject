const express = require('express')
const app = express()
const PORT = process.env.PORT || 8787
require('dotenv').config()

app.listen(PORT, () => {
    console.log(`listen on http://localhost:${PORT}`)
})
