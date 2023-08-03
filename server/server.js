//require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
//const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database.'));

// var bodyParser = require('body-parser');
// app.use(bodyParser(),{limit:5000});

app.get("/api", (req, res) => {
  res.json({ "message": "Hello from server!" })
})



app.listen(3001, () => {console.log("Server started on port 3001")})