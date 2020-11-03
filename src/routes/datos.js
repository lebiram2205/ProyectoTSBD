
const router = require('express').Router();

const datosController =require('../controllers/datosController')
router.get('/', datosController.list);
router.post('/add',datosController.guardar);
router.get('/eliminar/:id_DUsuario',datosController.eliminar);
module.exports = router;



