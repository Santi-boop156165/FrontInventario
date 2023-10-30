import axios from "axios";

export const GetProductos = async () => {
    try {
        let url = "http://localhost:8000/api/v1/productos";
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const GetProducto = async (id) => {
    try {
        let url = `http://localhost:8000/api/v1/productos/${id}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }

}

export const SendProducto = async (data) => {
    try {
        let url = "http://localhost:8000/api/v1/productos";
        const response = await axios.post(url, data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const DeleteProducto = async (id) => {
    try {
        let url = `http://localhost:8000/api/v1/productos/${id}`;
        const response = await axios.delete(url);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}