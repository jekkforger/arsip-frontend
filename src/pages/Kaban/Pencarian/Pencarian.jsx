import { useMemo, useState, useContext, useEffect } from "react";
import SearchHeader from "./components/SearchHeader";
import SearchResults from "./components/SearchResults";
import SidePanels from "./components/SidePanels";
import { TopbarContext } from "../../../layouts/AppLayout";

const MOCK_DOCS = [
  {
    id: "d1",
    title: "Surat Pelayanan Wajib Pajak",
    nomorSurat: "973 / 045 / BAPENDA / 2024",
    nomorArsip: "20240520-143005",
    tahun: "2024",
    akses: "umum",
  },
  {
    id: "d2",
    title: "Surat Ketetapan Pajak Daerah",
    nomorSurat: "973 / 045 / BAPENDA / 2024",
    nomorArsip: "20240520-143005",
    tahun: "2024",
    akses: "terbatas",
  },
  {
    id: "d3",
    title: "Peraturan Bupati Tahun 2020",
    nomorSurat: "973 / 045 / BAPENDA / 2024",
    nomorArsip: "20240520-143005",
    tahun: "2024",
    akses: "rahasia",
  },
];

export default function Pencarian() {
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState(new Set(["d3"]));

  // set topbar global utk halaman ini (biar gak nyangkut dari dashboard)
  const topbarCtx = useContext(TopbarContext);
  useEffect(() => {
    if (!topbarCtx?.setTopbar) return;
    topbarCtx.setTopbar({
      title: "Pencarian Dokumen",
      showSearch: false, // karena search udah ada di konten
      searchPlaceholder: "Cari dokumen",
      onSearch: null,
    });
  }, [topbarCtx]);

  const results = useMemo(() => {
    if (!query.trim()) return MOCK_DOCS;
    const q = query.toLowerCase();
    return MOCK_DOCS.filter(
      (d) =>
        d.title.toLowerCase().includes(q) ||
        d.nomorSurat.toLowerCase().includes(q) ||
        d.nomorArsip.toLowerCase().includes(q) ||
        String(d.tahun).includes(q)
    );
  }, [query]);

  const recent = useMemo(() => [MOCK_DOCS[0], MOCK_DOCS[1]], []);
  const favoriteDocs = useMemo(
    () => MOCK_DOCS.filter((d) => favorites.has(d.id)),
    [favorites]
  );

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const openMetadata = () => {
    console.log("Open metadata search");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <SearchHeader query={query} setQuery={setQuery} onOpenMetadata={openMetadata} />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <SearchResults
          results={results}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onOpenMetadata={openMetadata}
        />

        <SidePanels
          recent={recent}
          favoriteDocs={favoriteDocs}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      </div>
    </div>
  );
}
