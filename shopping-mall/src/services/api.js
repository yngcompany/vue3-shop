import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/',
});

export const getProducts = () => api.get('/products');

// 기본적인 API 호출 패턴
// export const getProductById = (id) => api.get(`/products/${id}`);