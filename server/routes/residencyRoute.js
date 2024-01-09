import express  from "express";
import { createResidency, getAllRes } from "../controllers/resiController.js";

const router = express.Router()

router.post('/create', createResidency)
router.get('/getAllRes', getAllRes)

export {router as residencyRoute}