import express from "express";
import { create, view, getOne, update } from "../controller/userController.js";

const route = express.Router();

route.post("/create", create);
route.get("/view", view);
route.get("/getone/:id", getOne);
// router.put('/users/:id', update); 
// router.get('/users/email/:email', viewByEmail);  // Route to view a specific user by email

export default route;
