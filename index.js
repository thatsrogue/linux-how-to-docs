const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const port = process.env.PORT || 20202
app.use(express.static('public'))

server.listen(port)