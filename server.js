require('dotenv').config()
const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
const publicPath = path.join(__dirname, 'public')
const staticMiddleware = express.static(publicPath)

app.use(staticMiddleware)
app.listen(process.env.PORT, () => {
  console.log('Listening on port', process.env.PORT, '!')
})
