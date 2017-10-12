const express = require('express');
const proxy = require('http-proxy-middleware');
const app = express();
const path = require('path');
const port = process.env.PORT || '5000';

app.set('port', port);
app.use(express.static(__dirname + '/dist'));

var apiProxy = proxy('/assets/json', {'target':'http://www.arp2.herokuapp.com', "secure": false,});

app.get('/[^\.]+$', function (req, res) {
    res.set('Content-Type', 'text/html').sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(app.get('port'), function(){
    console.log("Node app is running at localhost:"+ app.get('port'));
});
