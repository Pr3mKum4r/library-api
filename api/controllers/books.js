const Books = require('../../models/books');

const getAllBooks = async (req, res) => {
    try {
        const allBooks = await Books.find();
        res.status(200).json(allBooks);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getOneBook = async (req, res) => {
    try {
        const book = await Books.find({ bookId: req.params.id })
            .catch((err) => { res.status(404).send('Cannot find the book') })
        res.status(200).json(book);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const addNewBook = async (req, res) => {
    const book = new Books({
        bookId: req.body.bookId,
        bookAuthor: req.body.bookAuthor,
        bookTitle: req.body.bookTitle
    })
    try {
        const newBook = await book.save();
        res.status(201).json(newBook);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const updateBook = async (req, res) => {
    try {
        const book = await Books.findOneAndUpdate(
            { bookId: req.params.id },
            { $set: { bookTitle: req.body.title, bookAuthor: req.body.author } },
            { new: true }
        );

        if (!book) {
            return res.status(404).send(`Book with id ${req.params.id} does not exist`);
        }

        res.status(201).send(`Book with id ${req.params.id} is updated successfully`);
    } catch (err) {
        res.status(400).json({ "message": err.message });
    }
};


const deleteBook = async (req, res) => {
    try {
        await Books.findOneAndDelete({ bookId: req.params.id })
            .then((deletedBook) => {
                if (deletedBook) {
                    res.status(202).send(`Book with id ${req.params.id} has been deleted successfully`);
                } else {
                    res.status(404).send(`Book with id ${req.params.id} does not exist`);
                }
            })
            .catch((err) => {
                res.status(400).json({ "message": err.message });
            });
    }
    catch (err) {
        res.status(400).json({ "message": err.message });
    }
}

module.exports = { getAllBooks, getOneBook, addNewBook, updateBook, deleteBook };