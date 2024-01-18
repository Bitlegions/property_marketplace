import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "http://localhost:5555",
    issuerBaseURL: "https://dev-1a054bt7u1homz70.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck