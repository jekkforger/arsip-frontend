// src/pages/Kaban/Favorit/components/FavoritItem.jsx
import pdfSvg from "../icons/pdf.svg";
import favSvg from "../icons/favorit.svg";

const levelStyle = {
  Umum: "bg-emerald-600 text-white",
  Terbatas: "bg-amber-500 text-white",
  Rahasia: "bg-red-700 text-white",
};

export default function FavoritItem({ item, compact = false }) {
  return (
    <div
      className={[
        "rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm",
        "flex items-start justify-between gap-4",
        compact ? "p-4" : "p-5",
      ].join(" ")}
    >
      <div className="min-w-0">
        <div className="text-[14px] font-semibold text-slate-900 truncate">
          {item.title}
        </div>

        <div className="mt-1 text-[11px] text-slate-400 leading-4">
          {item.meta}
        </div>
        <div className="mt-1 text-[11px] text-slate-400">{item.year}</div>

        <div className="mt-3 flex items-center gap-2">
          <button className="rounded-md bg-[#1D4ED8] px-3 py-1 text-[11px] text-white">
            Buka Dokumen
          </button>

          <span
            className={[
              "inline-flex rounded-md px-3 py-1 text-[11px] font-semibold",
              levelStyle[item.level] || "bg-slate-200 text-slate-700",
            ].join(" ")}
          >
            {item.level}
          </span>

          <button className="rounded-md bg-slate-700 px-3 py-1 text-[11px] text-white">
            Unduh Dokumen
          </button>

          <img src={favSvg} alt="" className="h-4 w-4" draggable="false" />
        </div>
      </div>

      <div className="shrink-0">
        <img src={pdfSvg} alt="" className={compact ? "h-12 w-12" : "h-14 w-14"} draggable="false" />
      </div>
    </div>
  );
}
