import { prisma } from 'database';
import { createNewRol } from '../managers/rolesManager.js';

export const createRol = async (req, res) => {
  try {
    const rolData = req.body;

    if (!rolData) return res.status(400).send({ error: 'Empty data' });

    const newRol = await createNewRol(rolData);
    
    return res.status(200).send(newRol);
  } catch(error) {
    console.error('[Create rol error]: ', error);
    return res.status(400).send({ error: error?.message ?? 'Internal Server Error' })
  }
};

export const getRoles = async (req, res) => {
  try {
    const roles = await prisma.roles.findMany();

    return res.status(200).send(roles);
  } catch(error) {
    console.error('[Create rol error]: ', error);
    return res.status(400).send({ error: error?.message ?? 'Internal Server Error' })
  }
}