import { Router } from "express";
import { login, register } from "../model/user.controller.js";

const router = Router();

router.route("/login").post(login);
router.route("/register").post(register);

export default router;
