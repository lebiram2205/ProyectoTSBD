const express = require('express');
const app=express.Router();

const datosController =require('../controllers/datosController');

//app.post('/',datosController.guardar);
app.post('/', datosController.guardarTest);
app.post('/contacto', datosController.guardar);

app.get('/contacto', datosController.list);
app.get('/eliminar/:id_DUsuario',datosController.eliminar);
app.get('/actualizar/HOLA',datosController.actualizar);

//Entidad Federativa
app.get('/casosPositivosEF',datosController.casosPositivosEF);
app.get('/casosPositivosMEF',datosController.casosPositivosMEF);
app.get('/casosPositivosHEF',datosController.casosPositivosHEF);
app.get('/defuncionesEF',datosController.defuncionesEF);
app.get('/defuncionesMEF',datosController.defuncionesMEF);
app.get('/defuncionesHEF',datosController.defuncionesHEF);

//Alcaldia
app.get('/casosPositivosA',datosController.casosPositivosA);
app.get('/casosPositivosMA',datosController.casosPositivosMA);
// app.get('/casosPositivosHA',datosController.casosPositivosHA);
// app.get('/defuncionesA',datosController.defuncionesHA);
// app.get('/defuncionesMA',datosController.defuncionesMA);
// app.get('/defuncionesHA',datosController.defuncionesHA);



module.exports = app;



