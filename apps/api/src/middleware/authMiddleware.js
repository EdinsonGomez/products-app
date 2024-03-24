import { prisma } from 'database';
import jwt from 'jsonwebtoken';

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

export const verifyToken = (authRoles = []) => async (req, res, next) => {
  try {
    const authHeader = req.header('Authorization') || "";
    const token = authHeader.split(" ")[1];

    if (!token || !authRoles.length) return res.status(401).send({ error: 'Access denied' });
    console.log(token);

    const decodeToken = jwt.verify(token, JWT_SECRET_KEY);

    const user = await prisma.user.findFirst({
      where: { email: decodeToken.email },
      include: {
        rol: true
      }
    });

    if (!authRoles.includes(user.rol.name)) return res.status(401).send({ error: 'Unauthorized' });

    next();
  } catch(error) {
    console.log("[Auth Error]: ", error);
    return res.status(401).send({ error: 'Unauthorized' });
  }
}