import pdfIcon from "../icons/pdf.svg";
import Badge from "./Badge";
import favIcon from "../icons/favorit.svg";

export default function DocumentCard({
  title,
  nomorSurat,
  nomorArsip,
  tahun,
  akses = "umum", // umum | terbatas | rahasia
  isFavorite = false,
  onToggleFavorite,
  onOpen,
  onDownload,
}) {
  const aksesLabel = akses?.toLowerCase?.() || "umum";

  return (
    <div className="flex w-full items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="min-w-0 flex-1">
        <h4 className="truncate text-[15px] font-semibold text-slate-900">
          {title}
        </h4>

        <div className="mt-1 text-[11px] text-slate-500">
          <span className="mr-2">
            Nomor Surat: <span className="text-slate-600">{nomorSurat}</span>
          </span>
          <span>
            Nomor Arsip: <span className="text-slate-600">{nomorArsip}</span>
          </span>
        </div>

        <div className="mt-2 text-[11px] text-slate-500">
          Tahun Dokumen: <span className="text-slate-700">{tahun}</span>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <button
            onClick={onOpen}
            className="rounded-md bg-[#1F5EFF] px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:brightness-95"
          >
            Buka Dokumen
          </button>

          <Badge variant={aksesLabel}>
            {aksesLabel === "umum"
              ? "Umum"
              : aksesLabel === "terbatas"
              ? "Terbatas"
              : "Rahasia"}
          </Badge>

          <button
            onClick={onDownload}
            className="rounded-md bg-slate-700 px-3 py-1.5 text-xs font-semibold text-white hover:bg-slate-800"
          >
            Unduh Dokumen
          </button>

          <button
            onClick={onToggleFavorite}
            className="ml-1 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-800"
            title={isFavorite ? "Hapus dari favorit" : "Tambah ke favorit"}
          >
            <img
              src={favIcon}
              alt="favorit"
              className={[
                "h-[16px] w-[16px]",
                isFavorite ? "text-amber-500" : "text-slate-400",
              ].join(" ")}
              style={{
                filter: isFavorite
                  ? "invert(73%) sepia(70%) saturate(546%) hue-rotate(2deg) brightness(96%) contrast(92%)"
                  : "invert(62%) sepia(8%) saturate(330%) hue-rotate(178deg) brightness(95%) contrast(90%)",
              }}
            />
          </button>
        </div>
      </div>

      <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-lg">
        <img src={pdfIcon} alt="PDF" className="h-[54px] w-[54px]" />
      </div>
    </div>
  );
}
