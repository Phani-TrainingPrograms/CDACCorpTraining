const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Create express app
const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to local MongoDB
mongoose.connect('mongodb://localhost:27017/usersdb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define User schema and model
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true }
});

const User = mongoose.model('User', userSchema);

// Routes

// Create a new user
app.post('/api/users', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Get all users
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Get a user by ID
app.get('/api/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).send({ message: 'User not found' });
        res.status(200).send(user);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Update a user by ID
app.put('/api/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!user) return res.status(404).send({ message: 'User not found' });
        res.status(200).send(user);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Delete a user by ID
app.delete('/api/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).send({ message: 'User not found' });
        res.status(200).send({ message: 'User deleted' });
    } catch (err) {
        res.status(500).send(err);
    }
});

// Start server
const PORT = 1234;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
