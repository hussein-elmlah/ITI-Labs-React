import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/products';

export const getProducts = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data.products;
  } catch (error) {
    throw new Error('Error fetching products: ' + error.message);
  }
};

export const getProduct = async (productId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching product: ' + error.message);
  }
};
