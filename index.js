const express = require('express');
const app = express();
const router = require('./routes/router');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const db = config.DB;
const winston = require('winston');
const port = config.DEV_PORT;

mongoose.Promise = global.Promise;

mongoose.connect(db, { useMongoClient: true, promiseLibrary: global.Promise }, function() {
    console.log('mongodb connected at ' + db);
});

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use(express.static('./client/dist'));
app.use(express.static('./public'));
app.use('/', router);
app.listen(port, function() {
    winston.log('info',  `App is listening at port ${port}`);
});


