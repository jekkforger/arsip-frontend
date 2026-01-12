import React from "react";
import logo from "../assets/logo-arsip.png";

// SVG di-import sebagai file biasa (URL)
import gridSvg from "./icons/dashboard.svg";
import searchSvg from "./icons/search.svg";
import starSvg from "./icons/favorit.svg";
import approvalSvg from "./icons/persetujuan-akses.svg";
import logSvg from "./icons/log-aktivitas.svg";
import logoutSvg from "./icons/logout.svg";

const navItems = [
  { key: "dashboard", label: "Dashboard", icon: gridSvg },
  { key: "search", label: "Pencarian Dokumen", icon: searchSvg },
  { key: "favorite", label: "Favorit", icon: starSvg },
  { key: "approval", label: "Persetujuan Akses", icon: approvalSvg },
  { key: "activity", label: "Log Aktivitas", icon: logSvg },
];

export default function Navbar({ activeKey = "dashboard", onNavigate }) {
  return (
    <aside
      className="
        hidden md:flex
        fixed left-0 top-0 z-50 h-screen w-[280px]
        flex-col bg-[#1D4ED8] text-white
      "
    >
      {/* Brand / Logo */}
      <div className="px-6 pt-10 pb-10 flex justify-center">
        <div className="w-full max-w-[220px] overflow-hidden">
          <img
            src={logo}
            alt="Digitalisasi Arsip"
            draggable="false"
            style={{ height: 140 }} // <-- lebih gede
            className="w-full object-cover select-none"
          />
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-8">
        <ul className="space-y-7">
          {navItems.map((item) => {
            const isActive = activeKey === item.key;

            return (
              <li key={item.key}>
                <button
                  type="button"
                  onClick={() => onNavigate?.(item.key)}
                  className={[
                    "flex w-full items-center gap-4 text-left transition",
                    isActive
                      ? "text-white"
                      : "text-white/50 hover:text-white/80",
                  ].join(" ")}
                >
                  {/* icon tanpa kotak */}
                  <img
                    src={item.icon}
                    alt=""
                    className={[
                      "h-6 w-6",
                      isActive ? "opacity-100" : "opacity-50",
                    ].join(" ")}
                    draggable="false"
                  />

                  <span className="text-[16px] font-normal">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="px-8 pb-8 pt-6">
        <button
          type="button"
          className="flex items-center gap-4 text-white/80 hover:text-white transition"
        >
          <img
            src={logoutSvg}
            alt=""
            className="h-6 w-6 opacity-80"
            draggable="false"
          />
          <span className="text-[16px] font-normal">Logout</span>
        </button>
      </div>
    </aside>
  );
}
