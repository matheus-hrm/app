const express = require('express');
const routes = require('./routes.js');
const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(routes);

app.listen(3000, () => { 
  console.log('Servidor rodando na porta 3000');
  console.log('http://localhost:3000');
});
