const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3003;

const dbname = 'events';

// error / disconnection
mongoose.connection.on('error', err => console.log(err.message + ' is Mongo not running?'));
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));


// connect db
mongoose.connect(`mongodb://localhost:27017/${dbname}`);
mongoose.connection.once('open', () => {
    console.log('connected to mongoose! ~~~')
});

// controller
const eventsController = require('./controllers/event_controller.js');
app.use('/events', eventsController);

// listener
app.listen(port, () => {
    console.log('listening on port ' + port)
})