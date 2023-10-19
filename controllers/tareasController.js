// controllers/tareasController.js
const Tarea = require('../models/tarea');

// Crear una nueva tarea
exports.crearTarea = async (req, res) => {
  try {
    const { titulo, descripcion } = req.body;

    if (!titulo) {
      return res.status(400).json({ error: 'Titulo es requerido' });
    }

    const tarea = await Tarea.create({ titulo, descripcion });
    res.status(201).json(tarea);
  } catch (error) {
    res.status(400).json({ error: 'No se pudo crear la tarea' });
  }
};


// Obtener todas las tareas
exports.getTareas = async (req, res) => {
  try {
    const tareas = await Tarea.findAll();
    res.json(tareas);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'No se pudo obtener las tareas' });
  }
};

// Obtener una tarea por ID
exports.getTareaPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const tarea = await Tarea.findByPk(id);
    if (tarea) {
      res.json(tarea);
    } else {
      res.status(404).json({ error: 'Tarea no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'No se pudo recuperar la tarea' });
  }
};

// Actualizar una tarea por ID
exports.modificarTarea = async (req, res) => {
  const { id } = req.params;
  try {
    const tarea = await Tarea.findByPk(id);
    if (tarea) {
      const { titulo, descripcion, completado } = req.body;
      tarea.titulo = titulo || tarea.titulo;
      tarea.descripcion = descripcion || tarea.descripcion;
      tarea.completado = completado !== undefined ? completado : tarea.completado;
      await tarea.save();
      res.json(tarea);
    } else {
      res.status(404).json({ error: 'Tarea no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'No se pudo actualizar la tarea' });
  }
};

// Eliminar una tarea por ID
exports.eliminarTarea = async (req, res) => {
  const { id } = req.params;
  try {
    const tarea = await Tarea.findByPk(id);
    if (tarea) {
      await tarea.destroy();
      res.json({ message: 'Tarea eliminada exitosamente' });
    } else {
      res.status(404).json({ error: 'Tarea no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'No se pudo eliminar la tarea' });
  }
};
