const express = require('express');
const dotenv = require('dotenv');
const fs = require('fs');

const app = express();

dotenv.config();
port = process.env.PORT;
hostname = process.env.HOSTNAME;

app.get('/', function(req, res) {
    res.send('Hello world!')
});

app.listen(port, hostname, function() {
    console.log("SERVER RUNNING");
});