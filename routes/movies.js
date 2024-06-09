// Creamos una instancia del router de Express
const router = express.Router();

// Definimos una ruta para obtener todas las peliculas
// Cuando se haga una solicituda GET a La ruta ('/movies/'), se ejecutará esta función
router.get('/', (req, res) => {
    // Envia una respuesta en formato JSON con un mensaje
    res.json({ mensaje: 'Hola desde la ruta de películas!'});

});

// Exporta el router para que pueda ser utilizado en otros archivos
module.exports = router;