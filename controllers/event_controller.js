// dependencies
const express = require('express');
const events = express.Router();

// models
const Event = require('../models/event_model.js');

/*~~~~~ routes ~~~~~*/

// seed
events.get('/seed', (req, res) => {
	Event.create([{
			Creator: 'Brian Spoonhat',
			Title: 'Mt Rushmore Trip',
			Date: '07/02/2021 - 07/8/2021',
			Category: 'Nature',
			Description: 'Invite Greg and Erica to a getaway to Mt. Rushmore for July 4th weekend. We can rent a cabin at Cabinhood, book a grill at this local campground and go on a few trails.'
		},
		{
			Creator: 'Simone R.',
			Title: 'Bowling Night',
			Date: '04/13/2021',
			Category: 'Night-out',
			Description: 'The bowling alley is open again! Reach out to the group for a night out on the town to Bowling Aces. Call ahead to make a reservation for the evening of April 13th.'
		},
		{
			Creator: 'Russell Sherald',
			Title: 'Trivia Night',
			Date: '07/21/2021',
			Category: 'Night-out',
			Description: 'Invite the guys over for a trivia night. Pick up popular board game.'
		}
	], (err, data) => {
		res.redirect('/events');
	});
});

// index
events.get('/', (req, res) => {
	Event.find({}, (err, foundEvents) => {
		if(err) {
			res.status(400).json({ error: err.message });
		}
		res.status(200).json(foundEvents);
	});
});

// show route
events.get('/:id', (req, res) => {
	Event.findById(req.params.id, (error, foundEvent) => {
		if (error) {
			res.status(400).json({ error: error.message });
		} else {
			res.status(200).json(foundEvent)
		}
	})
})

// create
events.post('/', async (req, res) => {
	Event.create(req.body, (error, createdEvent) => {
		if(error) {
			res.status(400).json({ error: error.message });
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