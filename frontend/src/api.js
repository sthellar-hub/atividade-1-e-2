import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5067'
})

// Interceptor para adicionar token dinamicamente
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("TOKEN");
    if (token) {
        config.headers["x-access-token"] = token;
    }
    return config;
});

export default api;
