import { Router } from "express";
import {registerUser} from "../controllers/user.controller.js"

const router=Router();
console.log("registerUser",registerUser)
router.route("/register").post(registerUser);

export default router