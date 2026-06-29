import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import ConnectDB from "./utils/DB.js"
dotenv.config({
    path: "./.env"
});

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

   

// Listen
app.listen(PORT, () => {
 ConnectDB()
    console.log(`Server running at port ${PORT}`);
});