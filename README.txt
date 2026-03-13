# QA Automation Challenge – Pruebas E2E

Este repositorio contiene la implementación de pruebas funcionales automatizadas End-to-End (E2E) para diferentes flujos de compra en aplicaciones web de ejemplo.

Las pruebas fueron desarrolladas utilizando **Cypress** como framework de automatización y **JavaScript** como lenguaje de scripting.

---

# Herramientas utilizadas

- Cypress
- JavaScript
- Node.js
- Mochawesome (reportes de ejecución)
- GitHub

---

# Escenarios automatizados

Se implementaron pruebas automatizadas para los siguientes sitios:

## 1. Demoblaze
Flujo completo de compra que incluye:

- Agregar dos productos al carrito
- Visualizar el carrito
- Completar el formulario de compra
- Finalizar la compra

---

## 2. SauceDemo
Flujo completo de compra que incluye:

- Autenticación con usuario válido
- Agregar productos al carrito
- Validación del carrito
- Completar el proceso de checkout
- Confirmación de compra

---

## 3. OpenCart
Flujo de compra utilizando **Guest Checkout** que incluye:

- Agregar dos productos al carrito
- Visualizar el carrito
- Iniciar proceso de checkout como invitado
- Completar el formulario de envío
- Confirmar la orden hasta el mensaje  
  **"Your order has been placed"**

---

# Características de la automatización

La implementación incluye buenas prácticas de automatización:

- Uso de **selectores estables**
- Validaciones del estado de la aplicación
- Captura automática de **screenshots en fallos**
- Generación de **reportes HTML**
- Manejo de errores del sistema bajo prueba

Estas características permiten mejorar la estabilidad de las pruebas y facilitan el análisis de fallos durante la ejecución.

---

# Estructura del proyecto

El opencar-e2e proyecto contiene:
cypress
├── e2e
├── fixtures
├── support
├── screenshots
└── reports


---

# Evidencias de ejecución

Durante la ejecución se generan automáticamente:

- **Reportes HTML**
- **Capturas de pantalla en fallos**


Estas evidencias permiten analizar fácilmente el comportamiento de las pruebas.

---

# Conclusión

La automatización implementada permite validar los flujos principales de compra en diferentes aplicaciones web, asegurando que los procesos críticos funcionen correctamente.

Además, la solución está preparada para integrarse en **pipelines de CI/CD**, facilitando la ejecución continua de pruebas regresivas.
