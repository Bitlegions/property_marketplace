// import {auth} from 'express-oauth2-jwt-bearer'

// const jwtCheck = auth({
//     audience: "http://localhost:5555",
//     issuerBaseURL: "https://dev-1a054bt7u1homz70.us.auth0.com",
//     tokenSigningAlg: "RS256"
// })

// export default jwtCheck








// authMiddleware.js

// const passport = require('passport');
// const JwtStrategy = require('passport-jwt').Strategy;
// const ExtractJwt = require('passport-jwt').ExtractJwt;

// const jwtCheck = () => {
//   const jwtSecret = 'your-secret-key'; // Replace with your actual secret key

//   const jwtOptions = {
//     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//     secretOrKey: jwtSecret,
//     audience: 'http://localhost:5555',
//     issuer: 'https://dev-1a054bt7u1homz70.us.auth0.com',
//     algorithms: ['RS256'],
//   };

//   passport.use(
//     new JwtStrategy(jwtOptions, (jwtPayload, done) => {
//       // Customize this function to check if the user exists in your database
//       // and then call done(null, user) if the user is found
//       // or done(null, false) if the user is not found
//       done(null, jwtPayload.sub);
//     })
//   );

//   return passport.authenticate('jwt', { session: false });
// };

// export default jwtCheck;







// import jwt from 'express-jwt'
// import jwksRsa from 'jwks-rsa'

// // Configure JWT authentication middleware
// const jwtCheck = jwt({
//   secret: jwksRsa.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: 'https://dev-1a054bt7u1homz70.us.auth0.com/.well-known/jwks.json'
//   }),
//   audience: 'http://localhost:5555',
//   issuer: 'https://dev-1a054bt7u1homz70.us.auth0.com/',
//   algorithms: ['RS256']
// });

// export default jwtCheck;









// auth0Config.js

// import jwt from 'express-jwt';
// import jwksRsa from 'jwks-rsa';

// // Configure JWT authentication middleware
// const jwtCheck = jwt({
//   secret: jwksRsa.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: 'https://dev-1a054bt7u1homz70.us.auth0.com/.well-known/jwks.json',
//   }),
//   audience: 'http://localhost:5555',
//   issuer: 'https://dev-1a054bt7u1homz70.us.auth0.com/',
//   algorithms: ['RS256'],
// });

// export default jwtCheck;






// auth0Config.js

import jwt from 'jsonwebtoken'
import jwksRsa from 'jwks-rsa';

const jwksClient = jwksRsa({
  jwksUri: 'https://dev-1a054bt7u1homz70.us.auth0.com/.well-known/jwks.json',
});

const verifyToken = (token, callback) => {
  const options = {
    algorithms: ['RS256'],
  };

  jwt.verify(token, getKey, options, callback);
};

const getKey = (header, callback) => {
  jwksClient.getSigningKey(header.kid, (err, key) => {
    const signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
};

const jwtCheck = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  verifyToken(token, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    req.user = decoded;
    console.log('user is authenticated.');
    next();
  });
};

export default jwtCheck;
