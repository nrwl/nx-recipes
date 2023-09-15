import { products } from 'products';
import { orders } from 'orders';
import express from 'express';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.get('/products', (req, res) => {
  res.send(products());
});

app.get('/orders', (req, res) => {
  res.send(orders());
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
