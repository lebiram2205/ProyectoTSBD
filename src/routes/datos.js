const express = require('express');
const app=express.Router();

const datosController =require('../controllers/datosController')
app.get('/', datosController.list);
app.post('/add',datosController.guardar);
app.get('/eliminar/:id_DUsuario',datosController.eliminar);
app.get('/actualizar/HOLA',datosController.actualizar);
app.get('/casosPositivosEF',datosController.casosPositivosEF);

app.get('/casosPositivosMEF',datosController.casosPositivosMEF);
app.get('/casosPositivosHEF',datosController.casosPositivosHEF);
app.get('/defuncionesEF',datosController.defuncionesEF);
app.get('/defuncionesMEF',datosController.defuncionesMEF);
app.get('/defuncionesHEF',datosController.defuncionesHEF);


module.exports = app;



