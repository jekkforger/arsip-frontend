import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";

import Dashboard from "./pages/Kaban/Dashboard/Dashboard";
import Search from "./pages/Kaban/Pencarian/Pencarian";
import Favorit from "./pages/Kaban/Favorit/Favorit";
import Persetujuan from "./pages/Kaban/Persetujuan/Persetujuan";
import Log from "./pages/Kaban/Log/Log";
import Login from "./pages/Login";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/kaban/dashboard" replace />} />
      <Route path="/login" element={<Login />} />

      {/* Semua halaman kaban harus di dalam AppLayout */}
      <Route path="/kaban" element={<AppLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="search" element={<Search />} />
        <Route path="favorite" element={<Favorit />} />
        <Route path="approval" element={<Persetujuan />} />
        <Route path="activity" element={<Log />} />
      </Route>

      <Route path="*" element={<Navigate to="/kaban/dashboard" replace />} />
    </Routes>
  );
}
