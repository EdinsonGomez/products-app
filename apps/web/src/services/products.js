import axios from '@/api/api';

export const getProducts = () => {
  return axios
    .get('/products')
    .then((res) => res.data);
}