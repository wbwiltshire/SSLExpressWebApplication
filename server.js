const express = require('express')
const app = express()
const https = require('https')
const fs = require('fs')
const port = 5100

app.get('/', (req, res) => {
  res.send('The Node/Express SSL site is WORKING!')
})

const httpsOptions = {
  key: fs.readFileSync('./private.key'),		// Load public/private key (Password: scwswbw10)
  cert: fs.readFileSync('./certificate.crt')		// Load certificate
}
const server = https.createServer(httpsOptions, app).listen(port, () => {
  console.log('server running at ' + port)
})