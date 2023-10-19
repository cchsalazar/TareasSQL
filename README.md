# TareasSQL
API para la gestión de tareas

## Scripts
Iniciar el servidor + **sequelize sync force**
```javascript
npm run cleanstart
```
Iniciar el servidor
```javascript
npm run start
```
Ejecutar tests Mocha automatizados

```javascript
npm test
```

## Uso de la API

La API ofrece las siguientes rutas y acciones:

- **GET /tareas**: Obtiene todas las tareas.
- **GET /tareas/{id}**: Obtiene una tarea por su ID.
- **POST /tareas**: Crea una nueva tarea.
- **PUT /tareas/{id}**: Actualiza una tarea por su ID.
- **DELETE /tareas/{id}**: Elimina una tarea por su ID.

### Ejemplo de solicitud POST para crear una tarea:

```json
{
  "titulo": "Tarea de ejemplo",
  "descripcion": "Esta es una tarea de ejemplo.",
  "completado": false
}
```

## Validaciones

- El campo `titulo` es requerido en las solicitudes POST.


## Contribuciones

Si deseas contribuir a este proyecto, ¡siéntete libre de hacerlo! Puedes abrir un problema o enviar una solicitud de extracción.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más detalles.
