const express = require('express');
const router = express.Router();
const Users = require('../../models/users');

// Get all users
router.get('/', async (req, res)=>{
    try{
        const allUsers = await Users.find();
        res.status(200).json(allUsers);
    }
    catch(err){
        res.status(500).json({"message": err.message});
    }
})

// Get a specific user
router.get('/:id', async (req, res)=>{
    try{
        const user = await Users.find({userId: req.params.id})
        .catch((err)=>{
            res.status(404).send('Cannot find the user');
        })
        res.status(200).json(user);
    }   
    catch(err){
        res.status(400).json({"message": err.message});
    }
})

// Add a new user
router.post('/', async (req, res)=>{
    const user = new Users({
        userId: req.body.id,
        userName: req.body.name,
        userEmail: req.body.email
    })
    try{
        const newUser = await user.save();
        res.status(201).json(newUser);
    }
    catch(err){
        res.status(500).json({"message": err.message});
    }
})

// Update an existing user
router.patch('/:id', async (req, res)=>{
    try{
        const user = await Users.findOneAndUpdate({userId: req.params.id}, {$set: {userName: req.body.name, userEmail: req.body.email}});
        const updatedUser = await user.save();
        res.status(201).send(`User with id ${req.params.id} is updated successfully`);
    }
    catch(err){
        res.status(400).json({"message": err.message});
    }
})

// Deleting a user
router.delete('/:id', async (req, res)=>{
    try{
        await Users.findOneAndDelete({userId: req.params.id});
        res.status(202).send(`User with id ${req.params.id} has been deleted successfully`);
    }
    catch(err){
        res.status(400).json({"message": err.message});
    }
})

module.exports = router;