# Library API Documentation

This API provides routes for managing books and users.

## Books

### Get all books

- Route: `GET /books/`
- Description: Retrieve all books.
- Controller: `booksController.getAllBooks`

### Get a specific book

- Route: `GET /books/:id`
- Description: Retrieve information about a specific book.
- Parameters:
  - `id`: The ID of the book.
- Controller: `booksController.getOneBook`

### Add a new book

- Route: `POST /books/create`
- Description: Create a new book.
- Controller: `booksController.addNewBook`

### Update an existing book

- Route: `PATCH /books/:id/update`
- Description: Update an existing book.
- Parameters:
  - `id`: The ID of the book.
- Controller: `booksController.updateBook`

### Delete a book

- Route: `DELETE /books/:id/delete`
- Description: Delete a book.
- Parameters:
  - `id`: The ID of the book.
- Controller: `booksController.deleteBook`

## Users

### Get all users

- Route: `GET /users/`
- Description: Retrieve all users.
- Controller: `usersController.getAllUsers`

### Get a specific user

- Route: `GET /users/:id`
- Description: Retrieve information about a specific user.
- Parameters:
  - `id`: The ID of the user.
- Controller: `usersController.getOneUser`

### Add a new user

- Route: `POST /users/create`
- Description: Create a new user.
- Controller: `usersController.addUser`

### Update an existing user

- Route: `PATCH /users/:id/update`
- Description: Update an existing user.
- Parameters:
  - `id`: The ID of the user.
- Controller: `usersController.updateUser`

### Delete a user

- Route: `DELETE /users/:id/delete`
- Description: Delete a user.
- Parameters:
  - `id`: The ID of the user.
- Controller: `usersController.deleteUser`

Please refer to the respective controllers for the implementation details of each route.
