// dependencies
const express = require('express');
const events = express.Router();

// models
const Event = require('../models/event_model.js');

/*~~~~~ routes ~~~~~*/

// index
events.get('/', (req, res) => {
	Event.find({}, (err, foundEvents) => {
		if(err) {
			res.status(400).json({ error: err.message });
		}
		res.status(200).json(foundEvents);
	});
});

// create
events.post('/', async (req, res) => {
	Event.create(req.body, (error, createdEvent) => {
		if(error) {
			res.status(400).json({ error: err.message });
		}
		res.status(200).send(createdEvent);
	});
});

// update
events.put('/:id', (req, res) => {
	Event.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedEvent) => {
		if(err) {
			res.status(400).json({ error: err.message });
		}
		res.status(200).json(updatedEvent);
	});
});

// delete
events.delete('/:id', (req, res) => {
	Event.findByIdAndRemove(req.params.id, (err, deletedEvent) => {
		if(err) {
			res.status(400).json({ error: err.message });
		}
		res.status(200).json(deletedEvent);
	});
});

module.exports = events;