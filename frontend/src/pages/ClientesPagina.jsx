import { useEffect, useState } from "react";
import { cargarClientes } from "../api/clientes.api";

export function ClientesPagina() {

    const [clientes, setClientes] = useState([]);

    useEffect(()=>{
        function traerClientes() {
            const res = cargarClientes();
            // setClientes(res.data)
            console.log(res.data);
        }
        traerClientes();
    },[])

  return (
    <div>
      ClientesPagina
    </div>
  )
}
