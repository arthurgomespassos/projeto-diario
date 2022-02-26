require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

const routes = require('./routes');


app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(3000, () => {
  console.log('A acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});

app.use(routes);//impornte deixar isso por ultimo