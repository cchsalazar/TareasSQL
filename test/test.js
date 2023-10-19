const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index'); // Assuming the entry point is "index.js"

chai.use(chaiHttp);
const expect = chai.expect;

describe('Suite de API', () => {

  it('getTareas() -> 200 OK (array vacío)', (done) => {
    chai
      .request(app)
      .get('/tareas')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        expect(res.body).to.have.lengthOf(0);
        done();
      });
  });

  it('getTareaPorId(1) -> 404 Not Found', (done) => {
    chai
      .request(app)
      .get('/tareas/1')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.have.property('error');
        expect(res.body.error).to.equal('Tarea no encontrada');
        done();
      });
  });

  it('crear una nueva tarea (sin payload) -> 400 Bad Request', (done) => {
    chai
      .request(app)
      .post('/tareas')
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property('error');
        expect(res.body.error).to.equal('Titulo es requerido');
        done();
      });
  });

  it('crear una nueva tarea - 201 Created', (done) => {
    chai
      .request(app)
      .post('/tareas')
      .send({ titulo: 'Pasear al Perro' })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('completado');
        expect(res.body).to.have.property('id');
        expect(res.body).to.have.property('titulo');
        expect(res.body).to.have.property('updatedAt');
        expect(res.body).to.have.property('createdAt');
        expect(res.body.titulo).to.equal('Pasear al Perro');
        done();
      });
  });

  it('getTareaPorId(1) -> 200 OK', (done) => {
    chai
      .request(app)
      .get('/tareas/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('id');
        expect(res.body).to.have.property('titulo');
        expect(res.body).to.have.property('descripcion');
        expect(res.body).to.have.property('completado');
        expect(res.body).to.have.property('updatedAt');
        expect(res.body).to.have.property('createdAt');
        expect(res.body.titulo).to.equal('Pasear al Perro');
        expect(res.body.descripcion).to.equal(null);
        expect(res.body.completado).to.equal(false);
        done();
      });
  });

  it('modificarTarea(2) -> 404 Not Found', (done) => {
    chai
      .request(app)
      .get('/tareas/2')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.have.property('error');
        expect(res.body.error).to.equal('Tarea no encontrada');
        done();
      });
  });

  it('modificarTarea(1) (sin payload) -> 200 OK', (done) => {
    chai
      .request(app)
      .put('/tareas/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('id');
        expect(res.body).to.have.property('titulo');
        expect(res.body).to.have.property('descripcion');
        expect(res.body).to.have.property('completado');
        expect(res.body).to.have.property('updatedAt');
        expect(res.body).to.have.property('createdAt');
        expect(res.body.titulo).to.equal('Pasear al Perro');
        expect(res.body.descripcion).to.equal(null);
        expect(res.body.completado).to.equal(false);
        done();
      });
  });

  it('modificarTarea(1) (cambiar titulo) -> 200 OK', (done) => {
    chai
      .request(app)
      .put('/tareas/1')
      .send({ titulo: 'Pasear a Firulais' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('id');
        expect(res.body).to.have.property('titulo');
        expect(res.body).to.have.property('descripcion');
        expect(res.body).to.have.property('completado');
        expect(res.body).to.have.property('updatedAt');
        expect(res.body).to.have.property('createdAt');
        expect(res.body.titulo).to.equal('Pasear a Firulais');
        expect(res.body.descripcion).to.equal(null);
        expect(res.body.completado).to.equal(false);
        done();
      });
  });

  it('modificarTarea(1) (completado=true) -> 200 OK', (done) => {
    chai
      .request(app)
      .put('/tareas/1')
      .send({ completado: true })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('id');
        expect(res.body).to.have.property('titulo');
        expect(res.body).to.have.property('descripcion');
        expect(res.body).to.have.property('completado');
        expect(res.body).to.have.property('updatedAt');
        expect(res.body).to.have.property('createdAt');
        expect(res.body.titulo).to.equal('Pasear a Firulais');
        expect(res.body.descripcion).to.equal(null);
        expect(res.body.completado).to.equal(true);
        done();
      });
  });

  it('modificarTarea(1) (completado=false) -> 200 OK', (done) => {
    chai
      .request(app)
      .put('/tareas/1')
      .send({ completado: false })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('id');
        expect(res.body).to.have.property('titulo');
        expect(res.body).to.have.property('descripcion');
        expect(res.body).to.have.property('completado');
        expect(res.body).to.have.property('updatedAt');
        expect(res.body).to.have.property('createdAt');
        expect(res.body.titulo).to.equal('Pasear a Firulais');
        expect(res.body.descripcion).to.equal(null);
        expect(res.body.completado).to.equal(false);
        done();
      });
  });

  it('modificarTarea(1) (cambiar descripcion) -> 200 OK', (done) => {
    chai
      .request(app)
      .put('/tareas/1')
      .send({ descripcion: "El perro necesita salidas diarias para no deprimirse." })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('id');
        expect(res.body).to.have.property('titulo');
        expect(res.body).to.have.property('descripcion');
        expect(res.body).to.have.property('completado');
        expect(res.body).to.have.property('updatedAt');
        expect(res.body).to.have.property('createdAt');
        expect(res.body.titulo).to.equal('Pasear a Firulais');
        expect(res.body.descripcion).to.equal("El perro necesita salidas diarias para no deprimirse.");
        expect(res.body.completado).to.equal(false);
        done();
      });
  });

  it('eliminarTarea(2) -> 404 Not Found', (done) => {
    chai
      .request(app)
      .delete('/tareas/2')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.have.property('error');
        expect(res.body.error).to.equal('Tarea no encontrada');
        done();
      });
  });

  it('crear una nueva tarea (para borrar) - 201 Created', (done) => {
    chai
      .request(app)
      .post('/tareas')
      .send({ titulo: 'Tomar el Colectivo' })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('completado');
        expect(res.body).to.have.property('id');
        expect(res.body).to.have.property('titulo');
        expect(res.body).to.have.property('updatedAt');
        expect(res.body).to.have.property('createdAt');
        expect(res.body.titulo).to.equal('Tomar el Colectivo');
        done();
      });
  });

  it('eliminarTarea(2) -> 200 OK', (done) => {
    chai
      .request(app)
      .delete('/tareas/2')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.equal('Tarea eliminada exitosamente');
        done();
      });
  });

});


