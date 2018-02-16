const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
let port = process.env.PORT || 8080;

let app = express();
app.use(cors());
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false })); //????
app.use(bodyParser.json());


//ROUTES GO HERE

app.get('/app', function(req, res) {

});
app.post('/app', function(req, res) {

});

app.listen(port, console.log(`listening on port ${port}`));