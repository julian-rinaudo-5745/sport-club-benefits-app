# 🚀 Cómo Ejecutar el Proyecto

### 🌟 Requisitos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes:

- **Node.js** v18 o superior: [Descargar Node.js](https://nodejs.org/)
- **Docker Desktop**: [Instalar Docker Desktop](https://docs.docker.com/get-started/get-docker/)

### 🛠️ Pasos para Ejecutar el Proyecto

Sigue estos pasos para tener el proyecto corriendo en tu máquina local.

---

1. **Clona el repositorio**

   Primero, clona el repositorio en tu máquina local:
   ```bash
   https://github.com/julian-rinaudo-5745/sport-club-benefits-app

2. **Descargar imagen de redis y correrla**
   ```bash
    docker run -p 6379:6379 -it redis/redis-stack-server:latest

3. **Instalar todas las dependencias**
   ```bash
   npm i

4. **Iniciar ambos proyectos en simultaneo**
   ```bash
   npm run dev

Debería poder ver los logs del backend y el front levantado en http://localhost:3000/
