import { Outlet } from "react-router-dom";
import { createContext, useMemo, useState } from "react";

import Navbar from "../global/Navbar";
import Topbar from "../global/Topbar";

export const TopbarContext = createContext(null);

export default function AppLayout() {
  const [topbar, setTopbar] = useState({
    title: "",
    showSearch: false,
    searchPlaceholder: "Cari dokumen",
    onSearch: null, // optional callback
  });

  const value = useMemo(() => ({ topbar, setTopbar }), [topbar]);

  return (
    <TopbarContext.Provider value={value}>
      <div className="min-h-screen bg-[#F6F8FC]">
        {/* Sidebar global */}
        <Navbar />

        <main className="h-screen md:ml-[280px] flex flex-col overflow-hidden">
          {/* TOPBAR global: sticky/di atas */}
          <div className="shrink-0 bg-[#F6F8FC]">
            <div className="px-5 py-6 lg:px-6">
              <Topbar
                title={topbar.title}
                showSearch={topbar.showSearch}
                searchPlaceholder={topbar.searchPlaceholder}
                onSearch={topbar.onSearch}
              />
            </div>
          </div>

          {/* CONTENT: ini yang scroll, ambil sisa tinggi */}
          <div className="flex-1 min-h-0 overflow-y-auto px-5 py-6 lg:px-6 pb-10">
            <Outlet />
          </div>
        </main>
      </div>
    </TopbarContext.Provider>
  );
}
