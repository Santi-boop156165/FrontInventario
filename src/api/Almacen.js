import axios from "axios";

export const GetAlmacenes = async () => {
    try {
        let url = "http://localhost:8000/api/v1/almacenes";
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const GetAlmacen = async (id) => {
    try {
        let url = `http://localhost:8000/api/v1/almacenes/${id}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const SendAlmacen = async (data) => {
    try {
        let url = "http://localhost:8000/api/v1/almacenes";
        const response = await axios.post(url, data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}