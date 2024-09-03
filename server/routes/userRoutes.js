import express from "express";
import { create, view, update, getOne, deleteUser } from "../controller/userController.js";

const route = express.Router();

route.post("/create", create);
route.get("/view", view);
route.get("/getone/:id", getOne);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteUser);
// route.put("/update/:id", update);
// router.put('/users/:id', update); 
// router.get('/users/email/:email', viewByEmail);  // Route to view a specific user by email

export default route;
