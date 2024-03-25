import axios from '../api/api';

export const loginUser = async (credentials) => {
  return axios
    .post('/auth/signin', credentials)
    .then((res) => res.data);
}