const express = require('express');
const mongoose = require('mongoose');

const servicesRoutes = require('./routes/services');
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');

const app = express();

mongoose.connect('mongodb+srv://idir:UeaCgjtHjHY5Iq97@cluster0.zos7s.mongodb.net/aie-database?retryWrites=true&w=majority',
{useNewUrlParser: true,
 useUnifiedTopology: true })
 .then(() => console.log('Connecxion à MongoDB réussie!'))
 .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    
    next();
});

app.use('/api/auth/login', loginRoute);
app.use('/api/auth/register', registerRoute);
app.use('/api/services', servicesRoutes);



module.exports = app ;