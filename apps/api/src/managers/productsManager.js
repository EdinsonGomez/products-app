import { prisma } from "database";

export const createNewProduct = async (product) => {
  if (!product) throw ('Empty fields');

  const newProduct = await prisma.products.create({ data: product });

  return newProduct;
}

export const updateProductById = async (productId, productData = {}) => {
  await await prisma.products.updateMany({
    where: { id: productId },
    data: productData
  });

  const updatedProduct = await prisma.products.findFirst({
    where: { id: productId }
  });

  return updatedProduct;
}

export const getProductById = async (productId) => {
  const product = await prisma.products.findFirst({
    where: { id: productId }
  });

  return product;
}