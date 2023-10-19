// routes/tareas.js

const express = require('express');
const router = express.Router();
const tareasController = require('../controllers/tareasController');

// Ruta para crear una nueva tarea
router.post('/', tareasController.crearTarea);

// Ruta para obtener todas las tareas
router.get('/', tareasController.getTareas);

// Ruta para obtener una tarea por Id
router.get('/:id', tareasController.getTareaPorId);

// Ruta para modificar una tarea por Id
router.put('/:id', tareasController.modificarTarea);

// Ruta para eliminar una tarea por Id
router.delete('/:id', tareasController.eliminarTarea);

module.exports = router;
