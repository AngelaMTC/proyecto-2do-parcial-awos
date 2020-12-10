// Importación de config.js:
require ('./config/config.js');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
 
// Habilitar CORS:
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// Saludo:
app.get('/', function (req, res) {
  res.send('<h1>Quiuboles al servidor REST.</h1>');
});

// Importación de rutas:
app.use(require('./routes/usuario'));
app.use(require('./routes/categoria'));
app.use(require('./routes/producto'));
app.use(require('./routes/login'));
 

// Conexión a la base de datos Mongoose:
 mongoose.connect('mongodb+srv://admin:4491253567@cluster0.gtqyg.mongodb.net/cafeteria', {
   useNewUrlParser: true,
   useCreateIndex: true,
   useUnifiedTopology: true,
   useFindAndModify: false
 }, (err, res) => {

  if (err) throw err;
  console.log('Base de datos ONLINE c:');
});

// listen: escucha la app.
// Se volvió función.
app.listen(process.env.PORT, () => {
console.log('El servidor está en línea en el puerto: ', process.env.PORT);
});