import axios from 'axios';

const baseURL = 'https://localhost:5001/api/';

const api = axios.create({
    baseURL: baseURL,
    headers: { 'Content-Type': 'application/json' },
});

export default api;