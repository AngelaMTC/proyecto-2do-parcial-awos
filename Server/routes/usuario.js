const express = require('express');
const usuario = require('../models/usuario');
const Usuario = require('../models/usuario');
const app = express();

// GET:Obtener.
// res: response/respuesta.-recibo.
// req: request/pedir.-mando.

  
  app.get('/usuario', function (req, res) {
      res.json({
        // 200: Todo salió bien.
        ok: 200,
        mensaje: '<h1>Quiuboles al Usuarios.</h1>'});
    });
  
    // app.get('/usuario', function (req, res) {
    //   res.json({
    //     // 200: Todo salió bien.
    //     ok: 200,
    //     mensaje: 'Jelou'});
    // });
  
  // app.get('/saludo', function (req, res) {
  //     res.json({
  //         ok: '200', 
  //         mensaje: 'Bienvenido'
  //     });
  //   });
   
    // POST: recibir?
    // app.post('/saludo', function(req, res){
    //   res.json({
    //     ok: 200,
    //     mensaje: 'Usuario insertado con éxito.'
    //   })
    // });
  
    app.post('/usuario', function(req,res){
      // let nombre = req.body.nombre;
      let body = req.body;
      let usr = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: body.password
      });

      usr.save((err, usrDB) => {
        // Si hubo algún error:
        if (err){
          return res.status(400).json({
            ok: false,
            msg: 'Ocurrió un error.',
            err
          });
        }

        res.json({
          ok: true,
          msg: 'Usuario insertado con éxito.',
          usrDB
        });
      });
  
      // ----------------------------NO SIRVE-----------------------------
      // if(nombre === undefined){
      //   res.status(400).json({
      //     ok: 400,
      //     mensaje: 'Favor de mandar el valor del nombre'
      //   });
      // }else{
  
      
      // res.json({
      //   ok: 200,
      //   mensaje: 'Usuario insertado con éxito.',
      //   // nombre: nombre
      //   body: body
        
      // });
      // }
// ---------------------------NO SIRVE------------------------------

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
    
    // app.put('/usuario', function(req,res){
    //   let nombre = id.body.nombre;
    //   let body = req.body;
  
    //   if(nombre == undefined){
  
    //   }
    //   res.json({
    //     ok: 200,
    //     mensaje: 'Usuario insertado con éxito.',
    //     nombre: nombre
    //   })
    // });
    
    // DELETE:
    app.delete('/usuario/:id', function(req, res){
      let id = req.params.id;
  
      res.json({
        ok: 200,
        mensaje: 'Usuario eliminado con éxito.',
        id: id
      });
    });

    module.exports = app;
  