import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('https://strapi-178394-0.cloudclusters.net/api/categories?populate=*');
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default fetchData;
