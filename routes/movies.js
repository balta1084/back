// Creamos una instancia del router de Express
const express = require('express');
const router = express.Router();


// Datos ficticios de peliculas
let movies = [
    { id: 1, tiitle: "El secreto de sus ojos", director: "Juan José Campanella", year: 2009},
    { id: 2, tiitle: "Relatos Salvajes", director: "Damián Szifron", year: 2014},
    { id: 3, tiitle: "La historia oficial", director: "Luis Puenzo", year: 1985},
    { id: 4, tiitle: "Nueve Reinas", director: "Fabián Bielinsky", year: 2000}
];

// Definimos una ruta para obtener todas las peliculas
// Cuando se haga una solicituda GET a La ruta ('/movies/'), se ejecutará esta función
router.get('/', (req, res) => {
    // Envia una respuesta en formato JSON con un mensaje
    res.json({ mensaje: 'Hola desde la ruta de películas!'});

});

// Obtener una pelicula por ID
router.get('/:id', (req, res) => {
    const movie = movie.find(m => m.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('Movie not found');
    res.json(movie);
});

// Exporta el router para que pueda ser utilizado en otros archivos
module.exports = router;