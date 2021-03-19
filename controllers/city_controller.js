const express = require('express')
const cities = express.Router()

// models
const City = require('../models/cities.js');
const Event = require('../models/event_model.js');

// seed

cities.get('/seed', (req, res) => {
	City.create([{
			City: 'New York',
			State: 'New York',
			Activity: 'Explore world class artworks at the Metropolitan Museum of Art'
		},
		{
			City: 'Brooklyn',
			State: 'New York',
			Activity: 'Dine at Smorgasburg - the largest weekly open-air food market in America.'
		},
		{
			City: 'New York',
			State: 'New York',
			Activity: 'Pack a lunch and picnic on the lush grounds of Central Park.'
		},
		{
			City: 'Philadelphia',
			State: 'Pennsylvania',
			Activity: 'At night, enjoy the view from the scenic rooftop bar at Bok and support local artisans and small businesses during the day.'
		},
		{
			City: 'Philadelphia',
			State: 'Pennsylvania',
			Activity: 'Discover the indoor galleries and outdoor labrinth that makeup Philadelphia\'s Magic Gardens'
		},
		{
			City: 'Philadelphia',
			State: 'Pennsylvania',
			Activity: 'In the spring, take in the eye-catching cherry blossoms at Shofuso - a traditional 17th century-style Japanese house and garden.'
		},
		{
			City: 'Philadelphia',
			State: 'Pennsylvania',
			Activity: 'Discover the indoor galleries and outdoor labrinth that makeup Philadelphia\'s Magic Gardens'
		},
		{
			City: 'Austin',
			State: 'Texas',
			Activity: 'Take in a movie at the Blue Starlite Mini Urban Drive-in.'
		},
		{
			City: 'Austin',
			State: 'Texas',
			Activity: 'Get a breath of fresh air and take a self-guided tour of the Tejano Walking Trail.'
		},
		{
			City: 'Austin',
			State: 'Texas',
			Activity: 'Don\'t miss out on the incredible breakfast tacos at Valentina\'s Tex-Mex Bbq.'
		},
		{
			City: 'San Francisco',
			State: 'California',
			Activity: 'Grab a few friends and head to Stagecoach Greens for a fun game of mini golf and to experience the history of San Francisco.'
		},
		{
			City: 'San Francisco',
			State: 'California',
			Activity: 'Grab a few friends and head to Stagecoach Greens for a fun game of mini golf and to experience the history of San Francisco.'
		},
		{
			City: 'San Francisco',
			State: 'California',
			Activity: 'Enjoy a scenic hike on the Lands End Trail on your way to the historic Sutro Baths.'
		},
	], (err, data) => {
		res.redirect('/cities')
	});
});

// index
cities.get('/', (req, res) => {
	City.find({}, (err, foundCities) => {
		if(err) {
			res.status(400).json({ error: err.message });
		}
		res.status(200).json(foundCities);
	});
})

module.exports = cities