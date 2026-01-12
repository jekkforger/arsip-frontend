import { useState } from "react";
import illustration from "../assets/login-illustration.png";
import logo from "../assets/logo-arsip.png";

function Input({ label, type = "text", value, onChange }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-600">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-slate-700 outline-none transition
                   focus:border-[#1F5EFF] focus:ring-4 focus:ring-blue-100"
      />
    </label>
  );
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false); // ✅ default: tidak dicentang

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, remember });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Layout: kiri biru, kanan putih */}
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[3fr_2fr]">
        {/* LEFT */}
        <div className="relative bg-[#1D4ED8] overflow-hidden">
          {/* Logo (non-mobile, lebih gede, responsif) */}
          <div className="absolute left-10 top-8 hidden md:flex items-start z-10">
            <img
              src={logo}
              alt="Logo Digitalisasi Arsip"
              className="
                w-auto object-contain select-none
                h-16 md:h-20 lg:h-24 xl:h-28
              "
              draggable="false"
            />
          </div>

          {/* Ilustrasi */}
          <div className="h-full flex items-center justify-center px-10 py-10">
            <div className="w-full max-w-[560px]">
              <img
                src={illustration}
                alt="Ilustrasi Login"
                className="w-full h-auto select-none"
                draggable="false"
              />
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-center bg-white px-6 py-12">
          <div className="w-full max-w-[460px]">
            <h1 className="text-[32px] font-bold leading-tight text-slate-900">
              Login Akun
            </h1>
            <p className="mt-3 text-sm text-[18px] leading-6 text-slate-500">
              Selamat datang kembali! Silakan masuk dengan
              <br className="hidden sm:block" />
              email dan kata sandi yang telah terdaftar.
            </p>

            <div className="mt-8 h-px w-full bg-slate-100" />

            <form onSubmit={onSubmit} className="mt-8 space-y-5">
              <Input
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                label="Password"
                type={remember ? "text" : "password"} // ✅ toggle tampil/sembunyi
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <label className="flex items-center gap-2 text-sm text-slate-600">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-[#1F5EFF] focus:ring-[#1F5EFF]"
                />
                Tampilkan Password
              </label>

              <button
                type="submit"
                className="mt-2 w-full rounded-md bg-[#2C73EB] px-4 py-3 text-sm font-semibold text-white
                           shadow-[0_10px_25px_rgba(31,94,255,0.25)]
                           transition hover:bg-[#1A4FE6] focus:outline-none focus:ring-4 focus:ring-blue-100"
              >
                Login Akun
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
