const Book = require('../models/Book');


const addBook = async (userId, bookData) => {
    return await Book.create({ ...bookData, userId });
};
  
const getUserBooks = async (userId) => {
    return await Book.find({ userId });
};

const getBookById = async (userId, bookId) => {
    return await Book.findOne({ _id: bookId, userId });
};

const updateBook = async (userId, bookId, newData) => {
    return await Book.findOneAndUpdate({ _id: bookId, userId }, newData, { new: true });
};

const deleteBook = async (userId, bookId) => {
    return await Book.findOneAndDelete({ _id: bookId, userId });
};

module.exports = {
    addBook,
    getUserBooks,
    getBookById,
    updateBook,
    deleteBook,
};