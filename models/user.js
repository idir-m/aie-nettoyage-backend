const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userShema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    roles: {
        User: {
            type: Number,
            default: 2001
        },
        
    },

});

userShema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userShema);