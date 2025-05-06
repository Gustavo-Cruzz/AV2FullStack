const bookService = require('../services/bookService');
const logger = console;

const createBook = async (req, res) => {
  try {
    const { title, author, value, rating, analysis } = req.body;

    if (!title || !author || !analysis || value === undefined || rating === undefined) {
      logger.warn(`[CREATE BOOK] Campos ausentes - Usuário: ${req.userId}`);
      return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    if (typeof value !== 'number' || value < 0) {
      logger.warn(`[CREATE BOOK] Valor inválido - Usuário: ${req.userId}, Valor: ${value}`);
      return res.status(400).json({ error: 'Valor do livro deve ser um número positivo.' });
    }

    if (typeof rating !== 'number' || rating < 1 || rating > 10) {
      logger.warn(`[CREATE BOOK] Nota inválida - Usuário: ${req.userId}, Nota: ${rating}`);
      return res.status(400).json({ error: 'Nota deve ser entre 1 e 10.' });
    }

    const userId = req.userId;
    const book = await bookService.addBook(userId, { title, author, value, rating, analysis });

    logger.log(`[CREATE BOOK] Sucesso - Usuário: ${userId}, Livro: ${book._id}`);
    res.status(201).json(book);
  } catch (error) {
    logger.error(`[CREATE BOOK] Erro - Usuário: ${req.userId}, Erro: ${error.message}`);
    res.status(400).json({ error: error.message });
  }
};

const listBooks = async (req, res) => {
  try {
    const books = await bookService.getUserBooks(req.userId);
    logger.log(`[LIST BOOKS] Sucesso - Usuário: ${req.userId}, Total: ${books.length}`);
    res.json(books);
  } catch (error) {
    logger.error(`[LIST BOOKS] Erro - Usuário: ${req.userId}, Erro: ${error.message}`);
    res.status(500).json({ error: 'Erro ao buscar livros' });
  }
};

const getBook = async (req, res) => {
  try {
    const book = await bookService.getBookById(req.userId, req.params.id);
    if (!book) {
      logger.warn(`[GET BOOK] Livro não encontrado - ID: ${req.params.id}, Usuário: ${req.userId}`);
      return res.status(404).json({ error: 'Livro não encontrado' });
    }
    logger.log(`[GET BOOK] Sucesso - ID: ${req.params.id}, Usuário: ${req.userId}`);
    res.json(book);
  } catch (error) {
    logger.error(`[GET BOOK] Erro - ID: ${req.params.id}, Usuário: ${req.userId}, Erro: ${error.message}`);
    res.status(400).json({ error: 'ID inválido' });
  }
};

const updateBook = async (req, res) => {
  try {
    const updated = await bookService.updateBook(req.userId, req.params.id, req.body);
    if (!updated) {
      logger.warn(`[UPDATE BOOK] Livro não encontrado - ID: ${req.params.id}, Usuário: ${req.userId}`);
      return res.status(404).json({ error: 'Livro não encontrado' });
    }
    logger.log(`[UPDATE BOOK] Sucesso - ID: ${req.params.id}, Usuário: ${req.userId}`);
    res.json(updated);
  } catch (error) {
    logger.error(`[UPDATE BOOK] Erro - ID: ${req.params.id}, Usuário: ${req.userId}, Erro: ${error.message}`);
    res.status(400).json({ error: 'Erro ao atualizar livro' });
  }
};

const deleteBook = async (req, res) => {
  try {
    const deleted = await bookService.deleteBook(req.userId, req.params.id);
    if (!deleted) {
      logger.warn(`[DELETE BOOK] Livro não encontrado - ID: ${req.params.id}, Usuário: ${req.userId}`);
      return res.status(404).json({ error: 'Livro não encontrado' });
    }
    logger.log(`[DELETE BOOK] Sucesso - ID: ${req.params.id}, Usuário: ${req.userId}`);
    res.json({ message: 'Livro removido com sucesso' });
  } catch (error) {
    logger.error(`[DELETE BOOK] Erro - ID: ${req.params.id}, Usuário: ${req.userId}, Erro: ${error.message}`);
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
