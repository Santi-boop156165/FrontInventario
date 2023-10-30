import React, { useEffect,useState } from "react";
import { useForm } from "react-hook-form";
import { GetProveedores } from "../../api/Proveedor";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { SendProducto } from "../../api/Producto";
export const Registro_producto = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm();
  const [proveedores, setProveedores] = useState([]);
  const fetchData = async () => {
    const response = await GetProveedores();
    setProveedores(response.provedores);
  };
  useEffect(() => {
    fetchData();
  }, []);



  const onSubmit = async (data) => {
    try {
      await SendProducto(data);
      toast.success("Producto creado con éxito");
      navigate("/productos");
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

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-96 p-12 rounded-lg bg-white shadow-lg"
      >
        <NavLink
          to={"/productos"}
          className="flex justify-end mb-6 transform transition-all duration-200  hover:-translate-y-1 focus:outline-none "
        >
          <BsFillArrowLeftSquareFill size={20} />
        </NavLink>
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Registrar Producto
        </h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Nombre
          </label>
          <input
            autoComplete="off"
            {...register("nombre")}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Codigo
          </label>
          <input
            autoComplete="off"
            {...register("codigo")}
            className="mt-1 p-2 w-full border rounded-md"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Descripcion
          </label>
          <input
            autoComplete="off"
            {...register("descripcion")}
            className="mt-1 p-2 w-full border rounded-md"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Precio
          </label>
          <input
            autoComplete="off"
            {...register("precio")}
            className="mt-1 p-2 w-full border rounded-md"
            type="number"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Proveedor
          </label>
          <select
            {...register("proveedor_id")}
            className="mt-1 p-2 w-full border rounded-md"
            id="proveedor"
          >
            <option value="" selected disabled>
              Seleccione un proveedor
            </option>
            {proveedores.map((proveedor) => (
              <option key={proveedor.id} value={proveedor.id}>
                {proveedor.nombre}
              </option>
            ))}
          </select>
        </div>
        <button
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-400 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
          type="submit"
          value="enviar"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
