require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database.'));

// app.get("/api", (req, res) => {
//   res.json({"users": ["userOne", "userTwo", "userThree"]}) //this is our backend api
// })

// app.get('/', (req, res) => {
    //res.sendFile('./views/index.html', { root: __dirname});
//   res.sendFile(path.join(__dirname, 'views', 'index.html')); //questi due sono uguali
// })


/* 
la regex dice che deve iniziare e finire con / oppure /home_page
a sua volta /home_page(.html)? può avere facoltativamente l'estensione file
*/
app.get('^/$|/home_page(.html)?', (req, res) => { 
  res.sendFile(path.join(__dirname, 'views', 'home_page.html')); //qui devo mettere il path del file home in frontend presumo
})

app.get('/box_office(.html)?', (req, res) => { 
  res.sendFile(path.join(__dirname, 'views', 'box_office.html')); //qui devo mettere il path del file home in frontend presumo
})

app.get('/purchase_page', (req, res) => { 
  res.sendFile(path.join(__dirname, 'views', 'purchase_page.html')); //qui devo mettere il path del file home in frontend presumo
})

app.listen(3000, () => {console.log("Server started on port 3000")});