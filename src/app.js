const express = require('express')
const app = express()
const u_routes = require('./api/user.routes')
const p_routes = require('./api/place.routes')
app.get('/', (req, res) => {
    res.send('Hello')
})

app.use('/api', u_routes, p_routes)

module.exports = app