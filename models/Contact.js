const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ContactSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: false
    },
    email:{
        type: String,
        required: true
    }

})

module.exports = mongoose.model('contacts', ContactSchema)
