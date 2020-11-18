const express= require('express');
const path =require('path');
const bodyParser=require('body-parser');
const morgan =require('morgan');
const mysql = require('mysql');
const cors= require("cors");
const myConnection= require('express-myconnection');
const app=express();
var Chart = require('chart.js');


// const datosRutas2=require('./routes/datos2');
//setings
app.set('port', process.env.PORT||3000);

//middlewere
app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));
app.use(morgan('dev'));
app.use(myConnection(mysql,{
      host: 'localhost',
      user: 'root',
      password: '',
      port:3306,
      database: 'proyecto_final'
},'single'));
app.use(express.urlencoded({extended: false}));//permitir entender los datos del formulario

app.use('/',require('./routes/datos.routes'));

app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname,'views')))
app.use(express.static(path.join(__dirname,'public/imagenes')))
app.use(express.static(path.join(__dirname,'public/js')))


app.listen(app.get('port'),()=>{
  console.log('Server on port ',app.get('port'));
});

