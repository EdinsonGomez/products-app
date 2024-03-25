import axiosInstance from 'axios';
import { getToken } from '../utils/authUtils';

const axios = axiosInstance.create({
  baseURL: 'http://localhost:8000',
});

axios.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;