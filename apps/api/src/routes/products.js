import express from "express";
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post(
    '/create',
    verifyToken(["Admin"]),
    (req, res) => {
    console.log('create product route');

    return res.status(200).send({});
  }
);

export default router;