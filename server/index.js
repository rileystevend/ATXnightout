const Express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false })); //????
app.use(bodyParser.json());


//ROUTES GO HERE

app.get('/app', function(req, res) {

});
app.post('/app', function(req, res) {

});

app.listen()