import Navbar from "../../../global/Navbar";
import HeaderBar from "./components/HeaderBar";
import WelcomeCard from "./components/WelcomeCard";
import StatCard from "./components/StatCard";
import StorageCard from "./components/StorageCard";
import QuickActions from "./components/QuickActions";
import ActivityTable from "./components/ActivityTable";
import AccessRequestTable from "./components/AccessRequestTable";
import ApprovalCard from "./components/ApprovalCard";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F6F8FC]">
      {/* Navbar fixed, jangan dibungkus offset */}
      <Navbar activeKey="dashboard" />

      {/* MAIN: jangan ikut scroll (overflow-hidden), yang scroll nanti inner content */}
      <main className="h-screen md:ml-[280px] overflow-hidden">
        {/* HEADER: sticky (judul + search + profil) */}
        <div className="sticky top-0 z-40 bg-[#F6F8FC]">
          <div className="px-5 py-6 lg:px-6">
            <HeaderBar />
          </div>
        </div>

        {/* CONTENT: ini aja yang scroll */}
        <div className="h-[calc(100vh-96px)] overflow-y-auto px-5 py-6 lg:px-6">
          {/* TOP cards */}
          <section className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            <div className="lg:col-span-12 grid grid-cols-1 gap-4 lg:grid-cols-12 auto-rows-[180px]">
              <div className="lg:col-span-6 h-full">
                <WelcomeCard />
              </div>

              <div className="lg:col-span-3 h-full">
                <StatCard
                  title="Total Arsip Digital"
                  value="12,282"
                  subtitle="+487 Dokumen ditambahkan hari ini"
                  icon="folder"
                />
              </div>

              <div className="lg:col-span-3 h-full">
                <StorageCard />
              </div>
            </div>
          </section>

          {/* approval + shortcuts */}
          <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-4 h-full">
              <ApprovalCard total={5} />
            </div>

            <div className="lg:col-span-8 h-full">
              <QuickActions className="h-full" />
            </div>
          </section>

          {/* tables */}
          <section className="mt-6 space-y-6">
            <ActivityTable />
            <AccessRequestTable />
          </section>
        </div>
      </main>
    </div>
  );
}
