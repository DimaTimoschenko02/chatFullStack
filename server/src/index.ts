import express, { json } from "express";
import connectDB from "../config/database";
import cors from 'cors'
import config from 'config'
import { errorMiddleware } from "./middleware";
import AppRouter from "./routes";
const app = express();
const router = new AppRouter(app)

connectDB();


app.set("port", config.get('PORT') as number || 5000);

app.use(cors())
app.use(express.json())
router.init()
app.use(errorMiddleware)

const port = app.get("port");
const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);

export default server;
