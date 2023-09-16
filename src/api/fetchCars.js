import axios from 'axios';

axios.defaults.baseURL = 'https://6501e33d736d26322f5c706e.mockapi.io';

export const fetchCars = async (page = 1) => {
  try {
    const params = {
      page,
      limit: 8,
    };
    const res = await axios.get('/cars', { params });
    return res.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
