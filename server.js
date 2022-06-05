import express from "express";
import db from "./config/database.js";
import dotenv from "dotenv";
import router from "./routes/routes.js";
import cors from "cors";

dotenv.config();


const app = express();

try {
    db.authenticate();
    console.log("Database Connected....")
} catch (error) {
    console.error(error);

}

app.use(cors({credential: true, origin:'*'}));
app.use(express.json());
app.use(router);


app.listen(80, ()=> console.log("Server Running at port 80"))
