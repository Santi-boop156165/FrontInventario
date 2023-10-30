import React,{useState} from 'react'
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { SendAlmacen } from "../../api/Almacen";
const Registrar_almacen = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = async (data) => {
    try {
      await SendAlmacen(data);
      toast.success("Almacen creado con éxito");
      navigate("/almacenes");
    } catch (error) {
      const dataError = error.response.data;
      const keys = Object.keys(dataError);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = dataError[key];
        toast.error(`${key}: ${value}`);
      }
    }
  }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form  
      onSubmit={handleSubmit(onSubmit)}
      className="w-96 p-12 rounded-lg bg-white shadow-lg">
      <NavLink
          to={"/almacenes"}
          className="flex justify-end mb-6 transform transition-all duration-200  hover:-translate-y-1 focus:outline-none "
        >
          <BsFillArrowLeftSquareFill size={20} />
        </NavLink>
        <h1 className="text-2xl font-semibold mb-6 text-center">Registrar almacen</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600" >
            Nombre
          </label>
          <input
            {...register("nombre")}
            type="text"
            autoComplete='off'
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600" >
            Ubicacion
          </label>
          <input
            {...register("ubicacion")}
            autoComplete='off'
            className="mt-1 p-2 w-full border rounded-md"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600" >
           Capacidad
          </label>
          <input
            {...register("capacidad_total")}
            autoComplete='off'
            className="mt-1 p-2 w-full border rounded-md"
            type="text"

          />
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
  )
}

export default Registrar_almacen