import express from 'express'
import jwtCheck from '../config/auth0Config.js'
import { createUser, bookVisit, getBookings, cancelBooking, toFav, getAllfavs} from '../controllers/userController.js'

const router = express.Router()

// router.post('/register' , jwtCheck, createUser)
// router.post('/bookVisit/:id', jwtCheck, bookVisit)
// router.get('/getAllBookings', getBookings)
// router.post('/cancelBooking/:id', jwtCheck, cancelBooking)
// router.post('/toFav/:rid',jwtCheck,  toFav)
// router.post('/getAllFavs',jwtCheck, getAllfavs)

router.post('/register' , createUser)
router.post('/bookVisit/:id', bookVisit)
router.get('/getAllBookings', getBookings)
router.post('/cancelBooking/:id', cancelBooking)
router.post('/toFav/:rid',  toFav)
router.post('/getAllFavs', getAllfavs)

export {router as userRoute}