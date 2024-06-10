import axios from 'axios';

export const API_URL = 'https://a27668-e049.t.d-f.pw:80/api';
const $api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default $api;
