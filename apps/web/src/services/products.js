import axios from '@/api/api';

export const getProducts = () => {
  return axios
    .get('/products')
    .then((res) => res.data);
}

export const createProduct = async (body) => {
  return axios
    .post('/products/create', body)
    .then((res) => res.data)
};