import express from "express";
import { verifyToken } from '../middleware/authMiddleware.js';
import * as productsController from '../controllers/productsController.js';

const router = express.Router();

router.get('/', productsController.getProducts);
router.get('/:productId', productsController.getProduct);
router.post('/create', verifyToken(["admin"]), productsController.creteProduct);
router.post('/:productId', verifyToken(["admin"]), productsController.updateProduct);

export default router;