const Joi = require('joi');
const genres = require('./routes/genres');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://testuser:testPassword@cluster0.whizl.mongodb.net/vidly?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Cannot connect to MongoDB', err));

app.use(express.json());
app.use('/api/genres', genres);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));