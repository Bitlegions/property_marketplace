import express  from "express";
import { createResidency, getAllRes, getResidency } from "../controllers/resiController.js";

const router = express.Router()

router.post('/create', createResidency)
router.get('/getAllRes', getAllRes)
router.get('/:id', getResidency)

export {router as residencyRoute}