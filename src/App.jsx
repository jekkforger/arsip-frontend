import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login.jsx";
import DashboardKaban from "./pages/Kaban/Dashboard/Dashboard.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* default langsung dashboard */}
        <Route path="/" element={<Navigate to="/admin/kaban/dashboard" replace />} />

        <Route path="/login" element={<Login />} />
        <Route path="/admin/kaban/dashboard" element={<DashboardKaban />} />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/admin/kaban/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
