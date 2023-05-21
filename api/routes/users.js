const express = require('express');
const router = express.Router();
const usersController = require('../controllers/user');

// Get all users
router.get('/', usersController.getAllUsers);

// Get a specific user
router.get('/:id', usersController.getOneUser);

// Add a new user
router.post('/create', usersController.addUser);

// Update an existing user
router.patch('/:id/update', usersController.updateUser);

// Deleting a user
router.delete('/:id/delete', usersController.deleteUser);

module.exports = router;