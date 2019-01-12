require('dotenv').config()
const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
const request = require('request')
const publicPath = path.join(__dirname, 'public')
const staticMiddleware = express.static(publicPath)

app.get('/tweets', (req, res) => {
  const options = {
    url: `https://api.twitter.com/1.1/search/tweets.json?q=%23${req.query.term}&since_id=${req.query.since}`,
    headers: { 'Authorization': `Bearer ${process.env.TWITTER_KEY}` }
  }
  request(options, (err, response, body) => {
    if (err) throw err;
    res.send(body)
  })
})

app.use(staticMiddleware)
app.listen(process.env.PORT, () => {
  console.log('Listening on port', process.env.PORT, '!')
})
