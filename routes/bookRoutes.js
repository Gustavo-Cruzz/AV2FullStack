const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rota protegida para adicionar um livro
router.post('/books', authMiddleware, bookController.createBook);

// Rota protegida para listar livros do usuário
router.get('/books', authMiddleware, bookController.listBooks);

module.exports = router;
