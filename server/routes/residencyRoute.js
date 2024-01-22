import express  from "express";
import jwtCheck from "../config/auth0Config.js";
import { createResidency, getAllRes, getResidency } from "../controllers/resiController.js";

const router = express.Router()

// router.post('/create',jwtCheck, createResidency)
router.post('/create', createResidency)
router.get('/getAllRes', getAllRes)
router.get('/:id', getResidency)

export {router as residencyRoute}