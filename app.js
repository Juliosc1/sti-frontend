const express = require("express")
var favicon = require('serve-favicon')
var path = require('path')

const PORT = preocess.env.PORT || 3000

const app = express()
app.use('/healthcheck', require('./routes/healthcheck.routes'));

app.use.apply(ecpress.static('public'))

app.get('/', function(req, res){
    res.sendFile(__dirname + "/public/index.html")
})

app.listen(PORT, function(){
    console.log('Server stated on port ${PORT}')
})