const User = require('../models/user');
const Entreprise = require('../models/entreprise');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.handleLogin = (req, res, next) => {
    User.findOne({ email: req.body.email }) 
        .then(user => {
            if(!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if(!valid) {
                        return res.status(401).json({ error: 'mot de passe incorrect you snfb' });
                    }
                    const roles = Object.values(user.roles).filter(Boolean);
                    const secretKey = 'RANDOM_TOKEN_SECRET';
                    const accesToken = jwt.sign(
                        {
                            "UserInfo": {
                                "username": user.name,
                                "roles": roles
                            }
                        },
                            secretKey,
                            { expiresIn: '60s' }  
                    );
                    console.log(accesToken);
                    console.log(roles);
                    res.status(200).json({
                        accesToken,
                        roles
                    });
                })
                .catch(error => res.status(500).json({ 'messaeg': error }));
        })
        .catch(error => res.status(500).json({ 'messaeg': error }));
};


exports.handleLoginEntreprise = (req, res, next) => {
    Entreprise.findOne({ email: req.body.email }) 
        .then(user => {
            if(!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if(!valid) {
                        return res.status(401).json({ error: 'mot de passe incorrect you snfb' });
                    }
                    const roles = Object.values(user.roles).filter(Boolean);
                    const secretKey = 'RANDOM_TOKEN_SECRET';
                    const accesToken = jwt.sign(
                        {
                            "UserInfo": {
                                "username": user.name,
                                "roles": roles
                            }
                        },
                            secretKey,
                            { expiresIn: '120s' }  
                    );
                    console.log(accesToken);
                    console.log(roles);
                    res.status(200).json({
                        accesToken,
                        roles
                    });
                })
                .catch(error => res.status(500).json({ 'messaeg': error }));
        })
        .catch(error => res.status(500).json({ 'messaeg': error }));
};