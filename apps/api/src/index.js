import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { loginUser } from './controllers/login.js';
import productsRouter from './routes/products.js';

const app = express();
const port = process.env.PORT_API | 8000;

app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use('/products', productsRouter);

app.post('/login', (req, res) => loginUser(req, res));

app.listen(port, () => {
  console.log(`Server listening on port: `, port);
});