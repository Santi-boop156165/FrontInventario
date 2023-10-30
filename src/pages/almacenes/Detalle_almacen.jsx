import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import { GetAlmacen } from '../../api/Almacen';
const Detalle_almacen = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await GetAlmacen(id);
            setData(response.almacen);
            console.log(response.almacen.productos_id);
        };
        fetchData();
    }, [id]);


  return (
    <div>Detalle_almacen</div>
  )
}

export default Detalle_almacen