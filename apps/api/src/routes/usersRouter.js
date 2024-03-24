import express from "express";
import * as usersController from '../controllers/usersController.js';
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get('', verifyToken(["admin"]), usersController.getUsers);
router.post('/create', verifyToken(["admin"]), usersController.createUser);
router.post('/:userId', verifyToken(["admin"]), usersController.updateUser);

export default router;