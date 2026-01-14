// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";

import Login from "./pages/Login";

// Kaban
import KabanDashboard from "./pages/Kaban/Dashboard/Dashboard";
import KabanSearch from "./pages/Kaban/Pencarian/Pencarian";
import KabanFavorit from "./pages/Kaban/Favorit/Favorit";
import KabanPersetujuan from "./pages/Kaban/Persetujuan/Persetujuan";
import KabanLog from "./pages/Kaban/Log/Log";

// Pegawai
import PegawaiSearch from "./pages/Pegawai/Pencarian/Pencarian";
// nanti kalau halaman pegawai lain udah ada tinggal tambah:
// import PegawaiFavorit from "./pages/Pegawai/Favorit/Favorit";
// import PegawaiStatus from "./pages/Pegawai/Status/Status";
// import PegawaiLog from "./pages/Pegawai/Log/Log";

// Admin
import AdminDashboard from "./pages/Admin/Dashboard/Dashboard";

// Scanner
import ScannerDashboard from "./pages/Scanner/Dashboard/Dashboard";

export default function App() {
  return (
    <Routes>
      {/* default */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* auth */}
      <Route path="/login" element={<Login />} />

      {/* KABAN (pakai layout yang sama) */}
      <Route path="/kaban" element={<AppLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<KabanDashboard />} />
        <Route path="search" element={<KabanSearch />} />
        <Route path="favorite" element={<KabanFavorit />} />
        <Route path="approval" element={<KabanPersetujuan />} />
        <Route path="activity" element={<KabanLog />} />
      </Route>

      {/* PEGAWAI (pakai layout yang sama) */}
      <Route path="/pegawai" element={<AppLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<PegawaiSearch />} />

        {/*
        <Route path="favorite" element={<PegawaiFavorit />} />
        <Route path="status" element={<PegawaiStatus />} />
        <Route path="activity" element={<PegawaiLog />} />
        */}
      </Route>

      {/* PEGAWAI (pakai layout yang sama) */}
      <Route path="/admin" element={<AppLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />

        {/*
        <Route path="favorite" element={<PegawaiFavorit />} />
        <Route path="status" element={<PegawaiStatus />} />
        <Route path="activity" element={<PegawaiLog />} />
        */}
      </Route>

      <Route path="/scanner" element={<AppLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<ScannerDashboard />} />
      </Route>

      {/* fallback */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
