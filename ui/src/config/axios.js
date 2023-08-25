import axios from 'axios';

// TODO: get from env vars
const HOST = 'http://localhost';
const PORT = 3000;

const instance = axios.create({
  baseURL: `${HOST}:${PORT}/api/`,
  timeout: 12000,
});

export default instance;