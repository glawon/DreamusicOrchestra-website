const express = require('express');
const app = express();
const path = require('path');

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
app.get('^/$|/home_page(.html)?', (req, res) => { //la regex dice che deve iniziare e finire con / oppure /home_page
  res.sendFile(path.join(__dirname, 'views', 'home_page.html')); //qui devo mettere il path del file home in frontend presumo
})

app.get('/box_office(.html)?', (req, res) => { //la regex dice che deve iniziare e finire con / oppure /home_page
  res.sendFile(path.join(__dirname, 'views', 'box_office.html')); //qui devo mettere il path del file home in frontend presumo
})

app.get('/purchase_page', (req, res) => { //la regex dice che deve iniziare e finire con / oppure /home_page
  res.sendFile(path.join(__dirname, 'views', 'purchase_page.html')); //qui devo mettere il path del file home in frontend presumo
})

app.listen(3000, () => {console.log("Server started on port 3000")});