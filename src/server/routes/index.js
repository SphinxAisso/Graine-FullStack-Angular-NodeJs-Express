/**
 * Déclaration de toutes les familles de routes
 */
import express from 'express';
import bookRoutes from './book-routes';
import authRoutes from './auth-routes';

const router = express.Router();

/**
 * Si exécution du bundle : retourne l'appli angular
 * Si exécution du serveur seul : retourne l'index du serveur
 */
router.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname + './public/index.html'});
});

/**
 * Vérifie que le serveur tourne
 */
router.get('/api', (req, res) => {
    res.send('Server is running');
});

router.use('/api/books', bookRoutes);
router.use('/api/auth', authRoutes);

export default router;
