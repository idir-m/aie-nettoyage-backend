const jwt = require('jsonwebtoken');


const verifyJWT = (req, res, next) =>{
    const autheHeader = req.headers.authorization || req.headers.Authorization
    if(!autheHeader?.startsWith('Bearer ')) return res.sendStatus(401);
    const token = autheHeader.split(' ')[1];
    console.log(token)
    jwt.verify(
        token,
        'RANDOM_TOKEN_SECRET',
        (err, decoded) => {
            if(err) return res.sendStatus(403);
            req.user = decoded.UserInfo.username;
            req.roles = decoded.UserInfo.roles;
            next();
        }
    );
}

module.exports = verifyJWT ;