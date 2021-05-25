import axios from 'axios';

const baseURL = 'https://localhost:5001/api/';

const api = axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' },
});

export default api;