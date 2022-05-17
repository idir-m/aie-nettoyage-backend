const User = require('../models/user');
const Entreprise = require('../models/entreprise');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



exports.signupUser = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                name: req.body.name,
                password: hash,
            });
            user.save()
              .then(() => res.status(201).json({ user }))
              .catch(error => res.status(400).json({ 'message': error.message }));
        })
        .catch(error => res.status(400).json({ 'message': error }));
};

exports.signupEntreprise = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const entreprise = new Entreprise({
                email: req.body.email,
                name: req.body.name,
                adress: req.body.adress,
                password: hash,
            });
            entreprise.save()
              .then(() => res.status(201).json({ entreprise }))
              .catch(error => res.status(400).json({ 'message': error.message }));
        })
        .catch(error => res.status(400).json({ 'message': error }));
};