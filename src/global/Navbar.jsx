import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo-arsip.png";

import gridSvg from "./icons/dashboard.svg";
import searchSvg from "./icons/search.svg";
import starSvg from "./icons/favorit.svg";
import approvalSvg from "./icons/persetujuan-akses.svg";
import logSvg from "./icons/log-aktivitas.svg";
import logoutSvg from "./icons/logout.svg";

const navItems = [
  { key: "dashboard", label: "Dashboard", icon: gridSvg, to: "/kaban/dashboard", end: true },
  { key: "search", label: "Pencarian Dokumen", icon: searchSvg, to: "/kaban/search" },
  { key: "favorite", label: "Favorit", icon: starSvg, to: "/kaban/favorite" },
  { key: "approval", label: "Persetujuan Akses", icon: approvalSvg, to: "/kaban/approval" },
  { key: "activity", label: "Log Aktivitas", icon: logSvg, to: "/kaban/activity" },
];

export default function Navbar() {
  return (
    <aside className="hidden md:flex fixed left-0 top-0 z-50 h-screen w-[280px] flex-col bg-[#1D4ED8] text-white">
      {/* Logo */}
      <div className="px-6 pt-10 pb-10 flex justify-center">
        <div className="w-full max-w-[220px] overflow-hidden">
          <img
            src={logo}
            alt="Digitalisasi Arsip"
            draggable="false"
            style={{ height: 140 }}
            className="w-full object-cover select-none"
          />
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-8">
        <ul className="space-y-7">
          {navItems.map((item) => (
            <li key={item.key}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `group flex w-full items-center gap-4 text-left transition-colors duration-200 ${
                    isActive ? "text-white" : "text-white/50 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {/* ICON: Menggunakan group-hover dan isActive untuk mengontrol opacity */}
                    <img
                      src={item.icon}
                      alt=""
                      draggable="false"
                      className={`h-6 w-6 transition duration-200 [filter:brightness(0)_invert(1)] ${
                        isActive 
                          ? "opacity-100" 
                          : "opacity-50 group-hover:opacity-100"
                      }`}
                    />

                    {/* LABEL */}
                    <span className="text-[16px] font-normal transition-colors duration-200">
                      {item.label}
                    </span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout */}
      <div className="px-8 pb-8 pt-6 border-t border-white/10">
        <button
          type="button"
          className="group flex w-full items-center gap-4 text-white/50 hover:text-white transition-colors duration-200"
        >
          <img
            src={logoutSvg}
            alt=""
            className="h-6 w-6 opacity-50 transition duration-200 [filter:brightness(0)_invert(1)] group-hover:opacity-100"
            draggable="false"
          />
          <span className="text-[16px] font-normal">Logout</span>
        </button>
      </div>
    </aside>
  );
}