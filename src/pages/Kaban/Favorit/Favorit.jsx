// src/pages/Kaban/Favorit/Favorit.jsx
import Navbar from "../../../global/Navbar";
import FavoritHeader from "./components/FavoritHeader";
import FavoritList from "./components/FavoritList";

export default function Favorit() {
  return (
    <div className="min-h-screen bg-[#F6F8FC]">
      <Navbar activeKey="favorite" />

      <main className="min-h-screen md:ml-[280px] px-5 py-6 lg:px-6">
        <FavoritHeader />

        <section className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* KIRI: daftar favorit */}
          <div className="lg:col-span-8">
            <FavoritList title="Dokumen Favorit" />
          </div>

          {/* KANAN: bisa lu pakai buat “Favorit Terakhir” / ringkasan */}
          <div className="lg:col-span-4">
            <FavoritList title="Favorit Terakhir" variant="compact" />
          </div>
        </section>
      </main>
    </div>
  );
}
