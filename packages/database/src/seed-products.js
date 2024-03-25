import { prisma } from "../index.js";
import { fakerES_MX as faker } from '@faker-js/faker';

async function main() {
  const products = [];

  for (let i = 0; i < 15; i++) {
    const product = {
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.number.float({ min: 1000.00, max: 1000000.00 })
    }

    products.push(product);
  }

  await Promise.all(
    products.map((p) => prisma.products.create({ data: p }))
  );
}

main()
  .then(async () => {
    console.log('Products saved');
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error('Error seed db: ', error);
    await prisma.$disconnect();

    process.exit(1);
  });