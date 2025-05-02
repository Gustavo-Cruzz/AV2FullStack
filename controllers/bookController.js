const bookService = require('../services/bookService');

const createBook = async (req, res) => {
  try {
    const { title, author, value, rating, analysis } = req.body;

    if (!title || !author || !analysis || value === undefined || rating === undefined) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    if (typeof value !== 'number' || value < 0) {
      return res.status(400).json({ error: 'Valor do livro deve ser um número positivo.' });
    }

    if (typeof rating !== 'number' || rating < 1 || rating > 10) {
      return res.status(400).json({ error: 'Nota deve ser entre 1 e 10.' });
    }

    const userId = req.userId;
    const book = await bookService.addBook(userId, { title, author, value, rating, analysis });

    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const listBooks = async (req, res) => {
    try {
      const books = await bookService.getUserBooks(req.userId);
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar livros' });
    }
};
  
const getBook = async (req, res) => {
    try {
      const book = await bookService.getBookById(req.userId, req.params.id);
      if (!book) return res.status(404).json({ error: 'Livro não encontrado' });
      res.json(book);
    } catch (error) {
      res.status(400).json({ error: 'ID inválido' });
    }
};
  
const updateBook = async (req, res) => {
    try {
      const updated = await bookService.updateBook(req.userId, req.params.id, req.body);
      if (!updated) return res.status(404).json({ error: 'Livro não encontrado' });
      res.json(updated);
    } catch (error) {
      res.status(400).json({ error: 'Erro ao atualizar livro' });
    }
};
  
const deleteBook = async (req, res) => {
    try {
      const deleted = await bookService.deleteBook(req.userId, req.params.id);
      if (!deleted) return res.status(404).json({ error: 'Livro não encontrado' });
      res.json({ message: 'Livro removido com sucesso' });
    } catch (error) {
      res.status(400).json({ error: 'Erro ao deletar livro' });
    }
};
  
module.exports = {
    createBook,
    listBooks,
    getBook,
    updateBook,
    deleteBook,
};
