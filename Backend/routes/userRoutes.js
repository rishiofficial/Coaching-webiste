import express from "express";
import { registerUser, authUser } from "../controllers/userControllers.js";

const router = express.Router();

router.route('/').post(registerUser);
router.post("/login", authUser);

// Export the router instead of userRoutes
export default router;
