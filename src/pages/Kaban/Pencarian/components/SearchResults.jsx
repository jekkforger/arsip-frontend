import DocumentCard from "./DocumentCard";

export default function SearchResults({
  results = [],
  favorites = new Set(),
  onToggleFavorite,
  onOpenMetadata,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Hasil Pencarian</h2>
          <p className="mt-1 text-xs text-slate-500">
            {results.length} Dokumen berhasil ditemukan
          </p>
        </div>

        <button
          onClick={onOpenMetadata}
          className="rounded-lg bg-[#1F5EFF] px-4 py-2 text-xs font-semibold text-white shadow-sm hover:brightness-95"
        >
          Cari dengan Metadata
        </button>
      </div>

      <div className="mt-4 space-y-3">
        {results.map((doc) => (
          <DocumentCard
            key={doc.id}
            {...doc}
            isFavorite={favorites.has(doc.id)}
            onToggleFavorite={() => onToggleFavorite(doc.id)}
            onOpen={() => console.log("Open:", doc.id)}
            onDownload={() => console.log("Download:", doc.id)}
          />
        ))}
      </div>
    </div>
  );
}
