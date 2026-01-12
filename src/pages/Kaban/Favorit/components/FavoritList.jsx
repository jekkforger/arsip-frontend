// src/pages/Kaban/Favorit/components/FavoritList.jsx
import FavoritItem from "./FavoritItem";

const dummy = [
  {
    title: "Peraturan Bupati Tahun 2020",
    meta: "Nomor Surat: 973 / 045 / BAPENDA / 2024   Nomor Arsip: 20240520-143005",
    year: "Tahun Dokumen: 2024",
    level: "Rahasia",
  },
  {
    title: "Surat Pelayanan Wajib Pajak",
    meta: "Nomor Surat: 973 / 045 / BAPENDA / 2024   Nomor Arsip: 20240520-143005",
    year: "Tahun Dokumen: 2024",
    level: "Umum",
  },
];

export default function FavoritList({ title = "Dokumen Favorit", variant = "default" }) {
  return (
    <div className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
      <div className="flex items-center justify-between px-6 py-5">
        <h2 className="text-lg font-bold text-slate-900">{title}</h2>
      </div>

      <div className="px-6 pb-6 space-y-4">
        {dummy.map((item, i) => (
          <FavoritItem key={i} item={item} compact={variant === "compact"} />
        ))}
      </div>
    </div>
  );
}
