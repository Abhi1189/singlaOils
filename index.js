var express = require('express');
var app = express();
var PORT = 3000;

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render('main.ejs');
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});