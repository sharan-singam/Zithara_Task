import axios from 'axios';

const isProduction = process.env.NODE_ENV === 'production';
const backendURL = isProduction ? 'https://zithara-task.vercel.app/api/customers' : 'http://localhost:5001/api/customers';

const API = {
  getCustomers: async (page, limit, searchTerm, sort) => {
    return await axios.get(backendURL, {
      params: {
        page,
        limit,
        searchTerm, 
        sort   
      }
    });
  }
};

export default API;
