import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { SendProveedor, UpdateProveedor, GetProveedor } from "../../api/Proveedor";
const Registro = () => {

  const navigate = useNavigate();
  const { register, handleSubmit,setValue  } = useForm();
  const params = useParams();
  const onSubmit = async (data) => {

    try {
      if (params.id) {
        await UpdateProveedor(data, params.id);
        toast.success("Proveedor actualizado con éxito");
        navigate("/proveedores");
      } else {
        await SendProveedor(data);
        toast.success("Proveedor creado con éxito");
        navigate("/proveedores");
      }
    } catch (error) {
      const dataError = error.response.data;
      const keys = Object.keys(dataError);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = dataError[key];
        toast.error(`${key}: ${value}`);
      }
    }
  };
  
  useEffect(() => {
    const fetchData = async () => {
      if (params.id) {
        const data = await GetProveedor(params.id); 
        setValue("nombre", data.proveedor.nombre);
        setValue("telefono", data.proveedor.telefono);
        setValue("region", data.proveedor.region);
        setValue("ciudad", data.proveedor.ciudad);
        setValue("direccion", data.proveedor.direccion);
      }
    };
  
    fetchData();
  }, [params.id, setValue, register]); 
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-96 p-12 rounded-lg bg-white shadow-lg"
      >
        <NavLink
          to={"/proveedores"}
          className="flex justify-end mb-6 transform transition-all duration-200  hover:-translate-y-1 focus:outline-none "
        >
          <BsFillArrowLeftSquareFill size={20} />
        </NavLink>
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Registro Proveedor
        </h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Nombre
          </label>
          <input
            {...register("nombre")}
            autoComplete="off"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Telefono
          </label>
          <input
            {...register("telefono")}
            autoComplete="off"
            className="mt-1 p-2 w-full border rounded-md"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Region
          </label>
          <input
            {...register("region")}
            autoComplete="off"
            className="mt-1 p-2 w-full border rounded-md"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Ciudad
          </label>
          <input
            {...register("ciudad")}
            autoComplete="off"
            className="mt-1 p-2 w-full border rounded-md"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Direccion
          </label>
          <input
            {...register("direccion")}
            autoComplete="off"
            className="mt-1 p-2 w-full border rounded-md"
            type="text"
          />
        </div>

        {params.id ? (
          <button
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-400 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
            type="submit"
            value="enviar"
          >
            Actualizar
          </button>
        ) : (
          <button
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-400 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
            type="submit"
            value="enviar"
          >
            Registrar
          </button>
        )}
      </form>
    </div>
  );
};

export default Registro;
