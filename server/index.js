import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv'

import { userRoute } from "./routes/userRoute.js";
import { residencyRoute } from "./routes/residencyRoute.js";

dotenv.config()

const app = express();

const PORT = process.env.PORT || 5555

app.use(express.json())
app.use(cookieParser())
app.use(cors());

app.use('/api/user', userRoute)
app.use('/api/residency', residencyRoute)

app.use('/', console.log("thi is root directory "))

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
