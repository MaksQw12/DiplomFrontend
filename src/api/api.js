import axios from 'axios';

export const API_URL = 'https://a27670-fb01.t.d-f.pw/api';
const $api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default $api;
