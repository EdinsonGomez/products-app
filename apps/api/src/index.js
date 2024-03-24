import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

// Routes
import authRouter from './routes/authRouter.js';
import productsRouter from './routes/productsRouter.js';
import rolesRouter from './routes/rolesRouter.js';
import usersRouter from './routes/usersRouter.js';

const app = express();
const port = process.env.PORT_API | 8000;

app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

app.use('/auth', authRouter);
app.use('/products', productsRouter);
app.use('/roles', rolesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server listening on port: `, port);
});