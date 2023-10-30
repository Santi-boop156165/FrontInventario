import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

const Registro_inventario = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
    <form  className="w-96 p-12 rounded-lg bg-white shadow-lg">
    <NavLink
          to={"/productos"}
          className="flex justify-end mb-6 transform transition-all duration-200  hover:-translate-y-1 focus:outline-none "
        >
          <BsFillArrowLeftSquareFill size={20} />
        </NavLink>
      <h1 className="text-2xl font-semibold mb-6 text-center">Registrar Inventario</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600" htmlFor="username">
          Productos disponibles
        </label>
        <input
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600" htmlFor="email">
          Almacenes disponibles
        </label>
        <input
          className="mt-1 p-2 w-full border rounded-md"
          type="text"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600" htmlFor="password">
         Cantidad
        </label>
        <input
          className="mt-1 p-2 w-full border rounded-md"
          type="number"

        />
      </div>

      <button
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-400 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
        type="submit"
      >
        Submit
      </button>
    </form>
  </div>
  )
}

export default Registro_inventario