import express from 'express'
import { createUser, bookVisit } from '../controllers/userController.js'

const router = express.Router()

router.post('/register' , createUser)
router.post('/bookVisit/:id', bookVisit)

export {router as userRoute}