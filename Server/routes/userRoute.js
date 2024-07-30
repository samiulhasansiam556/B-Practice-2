import express from "express"
import { create,deletee,getAll,getOne,update } from "../controller/userController.js";

const userRoute = express.Router();

userRoute.post("/create",create)
userRoute.get("/getall",getAll)
userRoute.get("/getone/:id",getOne)
userRoute.put("/update/:id",update)
userRoute.delete("/delete/:id",deletee)



export default userRoute;