import React from 'react'

const Registro_transaccion = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
    <form  className="w-96 p-12 rounded-lg bg-white shadow-lg">
      <h1 className="text-2xl font-semibold mb-6 text-center">Registrar Venta</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600" htmlFor="username">
          Inventarios
        </label>
        <input
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600" htmlFor="email">
          Cantidad
        </label>
        <input
          className="mt-1 p-2 w-full border rounded-md"
          type="number"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600" htmlFor="email">
          Producto
        </label>
        <input
          className="mt-1 p-2 w-full border rounded-md"
          type="text"
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

export default Registro_transaccion