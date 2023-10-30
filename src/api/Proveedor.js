import axios from "axios";

export const GetProveedores = async () => {
    try {
        let url = "http://localhost:8000/api/v1/provedores";
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const SendProveedor = async (data) => {
    try {
        let url = "http://localhost:8000/api/v1/provedores";
        const response = await axios.post(url, data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const GetProveedor = async (id) =>  {
    try {
        let url = `http://localhost:8000/api/v1/provedores/${id}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const UpdateProveedor = async (id, data) => {
    try {
        let url = `http://localhost:8000/api/v1/provedores/${id}`;
        const response = await axios.put(url, data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


export async function DeleteProveedor(id){
    try {
      const response = await axios.delete(`http://localhost:8000/api/v1/provedores/${id}`);
      return response.data;
    }catch (error){
      console.log(error);
    }
  
  }
