import express from "express";
import { login } from "../controllers/authController.js";


console.log("AUTH ROUTE FILE LOADED");
const route = express.Router();

route.post("/login", login);

export default route;
