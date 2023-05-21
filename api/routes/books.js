const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');

// Get all books
router.get('/', booksController.getAllBooks);

// Get a specific book
router.get('/:id', booksController.getOneBook);

// Add a new book
router.post('/create', booksController.addNewBook);

// Update an existing book
router.patch('/:id/update', booksController.updateBook);

// Delete a book
router.delete('/:id/delete', booksController.deleteBook);

module.exports = router;