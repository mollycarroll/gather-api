// dependencies
const express = require('express');
const events = express.Router();

// models
const Event = require('../models/event_model.js');

/*~~~~~ routes ~~~~~*/

// index
events.get('/', (req, res) => {
	res.send('hello world')
})

// create
events.post('/')

// update
events.put('/:id')

// delete
events.delete('/:id')

module.exports = events;