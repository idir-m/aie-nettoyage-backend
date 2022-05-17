const mongoose = require('mongoose');


const serviceShema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    category: { type:String, required: true },
    userId: { type: String, required: true },
    price: { type: Number, required: true },
    wilaya: { type: String, required: true },
});

module.exports = mongoose.model('Service', serviceShema);