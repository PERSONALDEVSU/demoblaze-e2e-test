PRUEBAS API - PETSTORE

Herramienta utilizada: Cypress

Casos implementados:

1. Crear mascota (POST /pet)
2. Consultar mascota por ID (GET /pet/{id})
3. Actualizar mascota (PUT /pet)
4. Buscar mascota por status (GET /pet/findByStatus)

Ejecución:

1. Instalar dependencias

npm install

2. Ejecutar pruebas

npx cypress run

3. Ejecutar interfaz

npx cypress open

| Caso               | Endpoint            | Método |
| ------------------ | ------------------- | ------ |
| Agregar mascota    | `/pet`              | POST   |
| Consultar por ID   | `/pet/{id}`         | GET    |
| Actualizar mascota | `/pet`              | PUT    |
| Buscar por status  | `/pet/findByStatus` | GET    |
