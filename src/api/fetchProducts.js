import axios from 'axios';

const fetchProducts = async () => {
  try {
    const response = await axios.get('https://strapi-178394-0.cloudclusters.net/api/products?populate=*');
    return response.data.data; // Restituiamo direttamente i dati rilevanti
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export default fetchProducts;

