const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite',
});

(async () => {
  try {
    const Tarea = sequelize.define('Tarea', {
    });

    await Tarea.sync();
    await Tarea.destroy({ where: {}, truncate: true });
    await sequelize.query('DELETE FROM sqlite_sequence WHERE name = "Tareas"');

    console.log('Tabla "Tareas" truncada y auto-increment identity reseteado exitosamente.');
  } catch (error) {
    console.error('Error truncando y reseteando identidad:', error);
  } finally {
    await sequelize.close();
  }
})();
