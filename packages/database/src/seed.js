import { prisma } from '../index.js';

async function main() {
  await prisma.roles.create({
    data: {
      name: "admin"
    }
  });

  await prisma.user.create({
    data: {
      email: 'admin@product-app.com',
      name: "Administrador",
      last_name: "User",
      // productappadmin
      password: '$2a$10$CiPMAw6V2EOydKISNRCWe.xtq8tFr/vInrAamfljnaMsCcKQL2qoS',
      rol_id: 1
    }
  })
}

main()
  .then(async () => {
    console.log('data saved');
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error('Error seed db: ', error);
    await prisma.$disconnect();

    process.exit(1);
  });