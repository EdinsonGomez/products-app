import { prisma } from 'database';
import atob from 'atob';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

export const loginUser = async (req, res) => {
  try {
    // const credentials = req.headers.authorization;
    const credentials = req.body;
  
    if (!credentials) return res.status(404).send({ error: 'Empty credentials' });
  
    // const decodedCredentials = atob(credentials.split(' ')[1]);
    // const [email, password] = decodedCredentials.split(':');
    const { username, password } = credentials;
    
    const user = await prisma.user.findFirst({
      where: { email: username },
      include: {
        rol: true
      }
    });
    
    if (!user) return res.status(404).send({ error: 'User not found' });
    
    const matchPassword = await bcrypt.compare(password, user.password);

    if (!matchPassword) return res.status(401).send({ error: 'Incorrect password' });

    const token = jwt.sign(
      {
        email: user.email,
        userId: user.id,
        name: user.name,
        last_name: user.last_name
      },
      JWT_SECRET_KEY,
      {
        expiresIn: '12h'
      }
    );

    delete user.password;
  
    return res.status(200).send({ token, user });
  } catch(error) {
    console.error('[Login Error]: ', error);
    return res.status(400).send({ error: error });
  }
}