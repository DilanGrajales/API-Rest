require('./config/config');
require('./models/db');

const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const colors = require('colors');

const rtsIndex = require('./routes/index.router');

var app = express();

//Middleware
app.use(bodyparser.json());
app.use(cors());
app.use('/api', rtsIndex);

//error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});

//start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`.green));