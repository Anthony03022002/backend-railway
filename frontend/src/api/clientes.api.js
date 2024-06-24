import axios from "axios";

const clientesApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

export const cargarClientes = () => clientesApi.get('/');
