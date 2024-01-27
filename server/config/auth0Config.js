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
