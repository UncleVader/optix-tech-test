import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

axiosInstance.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    return Promise.reject(error);
  }
);