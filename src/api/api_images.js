import axios from 'axios';

const imgData = async () => {
    try {
      const response = await axios.get('https://strapi-178394-0.cloudclusters.net/api/upload/files');
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  
  };
  
  export default imgData;