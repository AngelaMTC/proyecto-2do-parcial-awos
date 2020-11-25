// Importación de config.js:
require ('./config/config.js');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
// GET:Obtener.
// res: response/respuesta.-recibo.
// req: request/pedir.-mando.
app.get('/', function (req, res) {
  res.send('<h1>Quiuboles al servidor REST.</h1>');
});

app.get('/usuario', function (req, res) {
    res.json({
      // 200: Todo salió bien.
      ok: 200,
      mensaje: '<h1>Quiuboles al Usuarios.</h1>'});
  });

  app.get('/usuario', function (req, res) {
    res.json({
      // 200: Todo salió bien.
      ok: 200,
      mensaje: 'Jelou'});
  });

// app.get('/saludo', function (req, res) {
//     res.json({
//         ok: '200', 
//         mensaje: 'Bienvenido'
//     });
//   });
 
  // POST: recibir?
  app.post('/saludo', function(req, res){
    res.json({
      ok: 200,
      mensaje: 'Usuario insertado con éxito.'
    })
  });

  app.post('/usuario', function(req,res){
    let nombre = id.body.nombre;
    let body = req.body;

    if(nombre === undefined){
      res.status(400).json({
        ok: 400,
        mensaje: 'Favor de mandar el valor del nombre'
      })
    }else{

    
    res.json({
      ok: 200,
      mensaje: 'Usuario insertado con éxito.',
      nombre: nombre
      
    });
    }
  });

  
  // PUT:Actualizar.
  // params: parámetros.
  app.put('/usuario/:id/:nombre', function(req,res){
    let id = req.params.id;
    let nombre = req.params.nombre;
    
    res.json({
      ok: 200,
      mensaje: 'Usuario actualizado con éxito.',
      id: id,
      nombre: nombre
    });
  });
  
  app.put('/usuario', function(req,res){
    let nombre = id.body.nombre;
    let body = req.body;

    if(nombre == undefined){

    }
    res.json({
      ok: 200,
      mensaje: 'Usuario insertado con éxito.',
      nombre: nombre
    })
  });
  
  // DELETE:
  app.delete('/usuario', function(req, res){
    let id = req.params.id;

    res.json({
      ok: 200,
      mensaje: 'Usuario eliminado con éxito.',
      id: id
    });
  });

// Conexión a la base de datos Mongoose:
 mongoose.connect('mongodb://localhost:27017/cafeteria', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useFindAndModify: false,
   useCreateIndex: true
 }, (err, res) => {

  if (err) throw new err;
  console.log('Base de datos online :)');
});

// listen: escucha la app.
// Se volvió función.
app.listen(process.env.PORT, () => {
console.log('El servidor está en línea en el puerto: ', process.env.PORT);
});