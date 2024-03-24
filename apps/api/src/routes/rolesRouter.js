import express from 'express';
import { verifyToken } from '../middleware/authMiddleware.js';
import * as rolesController from '../controllers/rolesController.js';

const router = express.Router();

router.post('/create', verifyToken(["admin"]), rolesController.createRol);
router.get('', verifyToken(["admin"]), rolesController.getRoles);

export default router;