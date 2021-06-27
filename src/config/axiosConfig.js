import axios from 'axios';

const axiosConfig = axios;

axiosConfig.defaults.headers = {
  'Content-Type': 'application/json'
};

axiosConfig.defaults.baseURL = `https://api.covid19api.com`;
axiosConfig.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 401) {
      return "Something went Wrong";
    }
    return Promise.reject(error);
  }
);
export default axiosConfig;
