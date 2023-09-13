import axios from 'axios';

axios.defaults.baseURL = 'https://6501e33d736d26322f5c706e.mockapi.io';
export const fetchCars = async () => {
  const { data } = await axios.get('/cars');
  return data;
};
