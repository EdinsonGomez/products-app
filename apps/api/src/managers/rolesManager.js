import { prisma } from "database";

export const createNewRol = async (rolData) => {
  const newRol = await prisma.roles.create({
    data: rolData
  });

  return newRol;
}