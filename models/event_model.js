const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
    Creator: {type: String, require: true},
    Title: String,
    Date: String,
    Category: String,
    Description: {type: String, require: true}
})

module.exports = mongoose.model('Event', eventSchema)