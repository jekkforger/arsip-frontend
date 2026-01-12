// src/pages/Kaban/Favorit/components/FavoritHeader.jsx
import SearchBar from "../../Dashboard/components/SearchBar";
import ProfileBadge from "../../Dashboard/components/ProfileBadge";

export default function FavoritHeader() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
      <div>
        <h1 className="text-3xl font-semibold text-slate-900">Favorit</h1>
        <div className="mt-4 max-w-[520px]">
          <SearchBar placeholder="Cari dokumen favorit" />
        </div>
      </div>

      <div className="lg:pt-1">
        <ProfileBadge />
      </div>
    </div>
  );
}
