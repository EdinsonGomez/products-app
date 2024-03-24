import { prisma } from "database";
import bcrypt from 'bcrypt';

export const createNewUser = async (userData) => {
  const data = { ...userData };

  if (userData.password) {
    data.password = await bcrypt.hash(userData.password, 10);
  }

  const newUser = await prisma.user.create({ data });

  return newUser;
}

export const updateUserById = async (userId, userData) => {
  if (userData?.password) {
    delete userData.password
  }

  await prisma.user.updateMany({
    where: { id: userId },
    data: userData
  });

  const userUpdated = await prisma.user.findFirst({
    where: { id: userId }
  });

  return userUpdated;
}