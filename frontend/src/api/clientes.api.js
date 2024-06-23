import axios from "axios";

const clientesApi = axios.create({
    baseURL: 'https://web-production-71b9.up.railway.app/clientes/clientes/'
})

export const cargarClientes = () => clientesApi.get('/');