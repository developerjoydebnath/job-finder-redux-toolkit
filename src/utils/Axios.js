import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://portfolio-server-pied-one.vercel.app/api/v2/',
});

export default axiosInstance;
