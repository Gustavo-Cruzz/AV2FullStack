const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware); 

router.post('/books', bookController.createBook);
router.get('/books', bookController.listBooks);
router.get('/books/:id', bookController.getBook);
router.put('/books/:id', bookController.updateBook);
router.patch('/books/:id', bookController.updateBook); 
router.delete('/books/:id', bookController.deleteBook);

module.exports = router;
