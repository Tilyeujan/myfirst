const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT | '8080';

app.set('port', port);
app.use(express.static(__dirname + '/dist'));

app.get('/[^\.]+$', function (req, res) {
    res.set('Content-Type', 'text/html').sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(app.get('port'), function(){
    console.log("Node app is running at localhost:"+ app.get('port'));
});
