import { prisma } from 'database';
import * as usersManager from '../managers/usersManager.js';

export const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();

    return res.status(200).send(users);
  } catch(error) {
    console.error('[Get users error]: ', error);
    return res.status(400).send({ error: error?.message ?? 'Internal Server Error' })
  }
};

export const createUser = async (req, res) => {
  try {
    const userData = req.body;

    if (!userData) return res.status(400).send({ error: 'Empty fields' });

    const user = await usersManager.createNewUser(userData);

    return res.status(200).send(user);

  } catch(error) {
    console.error('[Create user error]: ', error);
    return res.status(400).send({ error: error?.message ?? 'Internal Server Error' })
  }
}

export const updateUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userData = req.body ?? {};

    if (!userId) return res.status(404).send({ error: 'User not found' });

    const user = await usersManager.updateUserById(+userId, userData);

    return res.status(200).send(user);
  } catch(error) {
    console.error('[Update user error]: ', error);
    return res.status(400).send({ error: error?.message ?? 'Internal Server Error' })
  }
}