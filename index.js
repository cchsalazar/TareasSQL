const express = require('express');
const sequelize = require('./sequelize');
const config = require('./config');

const app = express();
const port = 4000;

app.use(express.json());

const tareasRouter = require('./routes/tareas');
app.use('/tareas', tareasRouter);

sequelize.sync({force: config.sequelizeForceSync}).then(() => {
  app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}/tareas`);
  });
});

module.exports = app;