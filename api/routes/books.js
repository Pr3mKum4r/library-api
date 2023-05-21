const express = require('express');
const router = express.Router();
const Books = require('../../models/books');

// Get all books
router.get('/', async (req, res)=>{
    try{
        const allBooks = await Books.find();
        res.status(200).json(allBooks);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
})

// Get a specific book
router.get('/:id', async (req, res)=>{
    try{
        const book = await Books.find({bookId: req.params.id})
        .catch((err)=>{res.status(404).send('Cannot find the book')})
        res.status(200).json(book);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
})

// Add a new book
router.post('/', async (req, res)=>{
    const book = new Books({
        bookId: req.body.bookId,
        bookAuthor: req.body.bookAuthor,
        bookTitle: req.body.bookTitle
    })
    try{
        const newBook = await book.save();
        res.status(201).json(newBook); 
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
})

// Update an existing book
router.patch('/:id', async(req, res)=>{
    try{
        const book = await Books.findOneAndUpdate({bookId: req.params.id}, {$set: {bookTitle: req.body.title, bookAuthor: req.body.author}});
        const updatedBook = await book.save();
        res.status(201).send(`Book with id ${req.params.id} is updated successfully`);
    }
    catch(err){
        res.status(400).json({"message": err.message});
    }
})

// Delete a book
router.delete('/:id', async (req, res)=>{
    try{
        await Books.findOneAndDelete({bookId: req.params.id});
        res.status(202).send(`Book with id ${req.params.id} has been deleted successfully`);
    }
    catch(err){
        res.status(400).json({"message": err.message});
    }
})

module.exports = router;