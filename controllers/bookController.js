const bookService = require('../services/bookService');

const createBook = async (req, res) => {
  try {
    const userId = req.userId; // setado pelo authMiddleware
    const book = await bookService.addBook(userId, req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const listBooks = async (req, res) => {
  try {
    const userId = req.userId;
    const books = await bookService.getUserBooks(userId);
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createBook, listBooks };
