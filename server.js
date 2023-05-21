const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

const PORT = 5000;

mongoose.connect("mongodb://0.0.0.0:27017/library", { useNewUrlParser: true })
.then(()=>{
    console.log("Connected to database successfully");
}).catch((err)=>{
    console.log("Error connecting to the database", err);
})


const usersRouter = require('./api/routes/users.js');
app.use('/users', usersRouter);

const booksRouter = require('./api/routes/books.js');
app.use('/books', booksRouter);

app.listen(PORT, ()=>{console.log("Server started at port 5000")});