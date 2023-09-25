import axios from 'axios';

const API_URL: string = import.meta.env.API_URL || 'http://localhost:3001/v1/api';

export default axios.create({
  baseURL: API_URL,
  timeout: 1000,
});