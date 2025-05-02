const Book = require('../models/Book');

const addBook = async (userId, bookData) => {
  const newBook = new Book({ ...bookData, userId });
  await newBook.save();
  return newBook;
};

const getUserBooks = async (userId) => {
  return Book.find({ userId });
};

module.exports = {
  addBook,
  getUserBooks
};
