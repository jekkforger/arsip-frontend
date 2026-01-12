import DocumentCard from "./DocumentCard";

function Panel({ title, children }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <div className="mt-4 space-y-3">{children}</div>
    </div>
  );
}

export default function SidePanels({
  recent = [],
  favoriteDocs = [],
  favorites = new Set(),
  onToggleFavorite,
}) {
  return (
    <div className="space-y-5">
      <Panel title="Pencarian Terakhir">
        {recent.map((doc) => (
          <DocumentCard
            key={doc.id}
            {...doc}
            isFavorite={favorites.has(doc.id)}
            onToggleFavorite={() => onToggleFavorite(doc.id)}
            onOpen={() => console.log("Open recent:", doc.id)}
            onDownload={() => console.log("Download recent:", doc.id)}
          />
        ))}
      </Panel>

      <Panel title="Dokumen Favorit">
        {favoriteDocs.map((doc) => (
          <DocumentCard
            key={doc.id}
            {...doc}
            isFavorite={true}
            onToggleFavorite={() => onToggleFavorite(doc.id)}
            onOpen={() => console.log("Open fav:", doc.id)}
            onDownload={() => console.log("Download fav:", doc.id)}
          />
        ))}
      </Panel>
    </div>
  );
}
