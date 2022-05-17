const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const entrepriseShema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    adress: { type: String, required: true },
    password: { type: String, required: true },
    roles: {
        Entreprise: {
            type: Number,
            default: 1984
        }
        
    }

});

entrepriseShema.plugin(uniqueValidator);

module.exports = mongoose.model('Entreprise', entrepriseShema);