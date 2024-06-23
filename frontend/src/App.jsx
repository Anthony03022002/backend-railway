import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ClientesPagina } from "./pages/ClientesPagina";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navigate to='/clientes' />} />
        <Route path="/clientes" element={<ClientesPagina />} />
      </Routes>
    </BrowserRouter>
  );
}
