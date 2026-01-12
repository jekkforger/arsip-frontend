import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";

import Login from "./pages/Login";

import Dashboard from "./pages/Kaban/Dashboard/Dashboard";
import Pencarian from "./pages/Kaban/Pencarian/Pencarian";
import Favorit from "./pages/Kaban/Favorit/Favorit";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/kaban/dashboard" replace />} />
      <Route path="/login" element={<Login />} />

      <Route element={<AppLayout />}>
        <Route path="/kaban/dashboard" element={<Dashboard />} />
        <Route path="/kaban/search" element={<Pencarian />} />
        <Route path="/kaban/favorite" element={<Favorit />} />
      </Route>

      <Route path="*" element={<Navigate to="/kaban/dashboard" replace />} />
    </Routes>
  );
}
