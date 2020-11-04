const express= require('express');
const path =require('path');
const bodyParser=require('body-parser');
const morgan =require('morgan');
const mysql = require('mysql');
const myConnection= require('express-myconnection');
const app=express();
//importando rutas
const datosRutas=require('./routes/datos');
//setings
app.set('port', process.env.PORT||3000);
app.set('views', path.join(__dirname,'./views'));
app.set('view engine', 'ejs');


//middlewere
app.use(morgan('dev'));
app.use(myConnection(mysql,{
      host: 'localhost',
      user: 'root',
      password: '',
      port:3306,
      database: 'proyecto_final'
},'single'));
app.use(express.urlencoded({extended: false}));//permitir entender los datos del formulario


app.use('/',datosRutas);

app.use(express.static(path.join(__dirname,'./public')))

app.listen(app.get('port'),()=>{
  console.log('Server on port ',app.get('port'));
});

