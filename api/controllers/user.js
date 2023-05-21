const Users = require('../../models/users');

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await Users.find();
        res.status(200).json(allUsers);
    }
    catch (err) {
        res.status(500).json({ "message": err.message });
    }
}

const getOneUser = async (req, res) => {
    try {
        const user = await Users.find({ userId: req.params.id })
            .catch((err) => {
                res.status(404).send('Cannot find the user');
            })
        res.status(200).json(user);
    }
    catch (err) {
        res.status(400).json({ "message": err.message });
    }
}

const addUser = async (req, res) => {
    const user = new Users({
        userId: req.body.id,
        userName: req.body.name,
        userEmail: req.body.email
    })
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    }
    catch (err) {
        res.status(500).json({ "message": err.message });
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await Users.findOneAndUpdate(
            { userId: req.params.id },
            { $set: { userName: req.body.name, userEmail: req.body.email } },
            { new: true }
        );
        if (!user) {
            return res.status(404).send(`User with id ${req.params.id} does not exist`);
        }
        res.status(201).send(`User with id ${req.params.id} is updated successfully`);
    } catch (err) {
        res.status(400).json({ "message": err.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        await Users.findOneAndDelete({ userId: req.params.id })
            .then((deletedUser) => {
                if (deletedUser) {
                    res.status(202).send(`User with id ${req.params.id} has been deleted successfully`);
                } else {
                    res.status(404).send(`User with id ${req.params.id} does not exist`);
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

module.exports = { getAllUsers, getOneUser, addUser, updateUser, deleteUser };