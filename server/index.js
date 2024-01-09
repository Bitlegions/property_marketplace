import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv'

import { userRoute } from "./routes/userRoute.js";

dotenv.config()

const app = express();

const PORT = process.env.PORT || 5555

app.use(express.json())
app.use(cookieParser())
app.use(cors());

app.use('/api/user', userRoute)

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
