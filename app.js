require('dotenv').config()
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

//mostrar contenido estático
app.use(express.static('public'));

//HANDLERBARS
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


//controlador 
app.get('/',  (req, res)=> {
  res.render('home', {
    nombre: 'Pau',
    titulo: 'Usando Handlebar'
  })
});

app.get('/elements',  (req, res)=> {
  res.render('elements', {
    nombre: 'Pau',
    titulo: 'Usando Handlebar'
  })
});

app.get('/generic',  (req, res)=> {
  res.render('generic', {
    nombre: 'Pau',
    titulo: 'Usando Handlebar '
  })
});

app.listen(port, () =>{
  console.log(`Escuchando en el puerto ${port}`)
})