import React, { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import {MdProductionQuantityLimits} from "react-icons/md";
import { GetAlmacenes } from "../../api/Almacen";

const Almacen_table = () => {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const response = await GetAlmacenes();
        setData(response.almacenes);
        console.log(response.almacenes);
    };
    useEffect(() => {
        fetchData();
    }, []);

  return (
    <div className="flex flex-col mt-2">
    <div className="overflow-x-auto">
      <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
        <div className="flex justify-between">
          <NavLink
            to={`/almacenes`}
            className="text-gray-800 hover:text-gray-400 font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out"
          >
            <FaHome className="text-xl" />
          </NavLink>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium border-l border-r border-gray-200">
                Nombre
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium border-l border-r border-gray-200">
                Capacidad actual
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium border-l border-r border-gray-200">
                Capacidad Total
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium border-l border-r border-gray-200">
                Ubicacion
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium border-l border-r border-gray-200">
                Ver productos
              </th>

            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((almacenes, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                <td className="px-6 py-4 border-l border-r border-gray-200">
                  {almacenes.nombre}
                </td>
                <td className="px-6 py-4 border-l border-r border-gray-200">
                  {almacenes.capacidad_actual}
                </td>
                <td className="px-6 py-4 border-l border-r border-gray-200">
                  {almacenes.capacidad_total}
                </td>
                <td className="px-6 py-4 border-l border-r border-gray-200">
                  {almacenes.ubicacion}
                </td>
                <td className="px-6 py-4 border-l border-r border-gray-200">
                <NavLink
                to={`/almacenes/detalle/${almacenes.id}`} 
                >
                < MdProductionQuantityLimits 
                size={30} className=" transform transition-all duration-200  hover:-translate-y-1 focus:outline-none cursor-pointer" />
                </NavLink>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <div className="flex justify-start gap-6 mt-4 px-8"></div>
  </div>
  )
}

export default Almacen_table