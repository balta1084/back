//Importamos el módulo express
const express = require('express')
// Creamos una instancia de una aplicación de express
const app = express();
// Importamos el enrutador de películas desde el archivo router/movies
const moviesRouter = require('/routes/app');

// Middleware para analizar cuerpos JSON en las solicitudes entrantes
app.use(express.json());

// Definimos la ruta para películas y llamamos al moviesRouter
// para manejar las rutas que comiencen con /movies
app.use('/app', moviesRouter);

// Definimos el puerto en el que nuestro servidor escuchará las solicitudes
const PORT = 3000;

// Iniciamos el servidor y lo configuramos para que escuche en el puerto definido
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
