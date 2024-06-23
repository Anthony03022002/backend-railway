import { useEffect, useState } from "react";
import { cargarClientes } from "../api/clientes.api";

export function ClientesPagina() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    async function traerClientes() {
      const res = await cargarClientes();
      setClientes(res.data);
    }
    traerClientes();
  }, []);

  return (
    <div className="overflow-x-auto mt-8 mx-4">
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-2 px-4 border-b">Cédula</th>
            <th className="py-2 px-4 border-b">Nombre</th>
            <th className="py-2 px-4 border-b">Apellido</th>
            <th className="py-2 px-4 border-b">Celular</th>
            <th className="py-2 px-4 border-b">Dirección</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id} className="hover:bg-gray-200">
              <td className="py-2 px-4 border-b">{cliente.cedula}</td>
              <td className="py-2 px-4 border-b">{cliente.nombre}</td>
              <td className="py-2 px-4 border-b">{cliente.apellido}</td>
              <td className="py-2 px-4 border-b">{cliente.celular}</td>
              <td className="py-2 px-4 border-b">{cliente.direccion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
