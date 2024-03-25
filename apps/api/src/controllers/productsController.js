import { prisma, Prisma } from 'database';
import * as productsManager from '../managers/productsManager.js';

export const getProducts = async (req, res) => {
  try {
    const products = await prisma.products.findMany({
      orderBy: {
        id: 'desc'
      }
    });

    return res.status(200).send(products);
  } catch(error) {
    return res.status(400).send({ error: error });
  }
};


export const creteProduct = async (req, res) => {
  try {
    const productData = req.body;

    const newProduct = await productsManager.createNewProduct(productData);

    return res.status(200).send(newProduct);
  } catch(error) {
    let message = error?.message ?? 'Internal Server Error';
    console.log('[Create Product Error]: ', error.meta);

    if (error instanceof Prisma.PrismaClientValidationError) {
      message = 'Empty fields, please check all fields. Remember the required fields are name, description, price'
    }

    return res.status(400).send({ error: message });
  }
}

export const updateProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const productData = req.body ?? {};

    if (!productId) return res.status(400).send({ error: 'Product not found' });

    const product = await productsManager.updateProductById(+productId, productData);

    return res.status(200).send(product);
  } catch(error) {
    console.error('[Update product Error]: ', error);
    return res.status(400).send({ error });
  }
}

export const getProduct = async (req, res) => {
  try {
    const productId = req.params.productId;;

    if (!productId) return res.status(400).send({ error: 'Product not found' });

    const product = await productsManager.getProductById(+productId);

    return res.status(200).send(product);
  } catch(error) {
    console.error('[Get product Error]: ', error);
    return res.status(400).send({ error });
  }
}