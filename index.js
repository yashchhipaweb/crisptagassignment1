var express = require('express');
var app = express(),
    path = require('path'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
	cors = require('cors'),
    config = require('./server/config.server')
    
   
          
console.log("url",config.serverUrl);

app.set('view engine', 'html');

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));

app.use(cookieParser());
app.use(express.static(__dirname + '/public'))
app.use(express.static(path.join(process.env.PWD, 'public')));

app.use(express.static(__dirname + '/uploads'));

// Allow CORS
app.use(cors({
    'origin': "*",
    'exposedHeaders': ['X-Requested-With', 'content-type', 'Authorization'],
    'credentials': true
}))

app.get('/g', function (err, res) {
    res.redirect("https://www.google.com")
})

app.listen(5000, () => {
    console.log("server started on 5000");
})
