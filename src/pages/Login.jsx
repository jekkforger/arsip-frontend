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
  const [email, setEmail] = useState(""); // <-- FIX: kosong
  const [password, setPassword] = useState(""); // (udah kosong dari awal, tetep)
  const [remember, setRemember] = useState(true);

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
          {/* Logo + brand text */}
          <div className="absolute left-10 top-0 flex items-center gap-3 text-white">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Logo Digitalisasi Arsip"
                className="h-[250px] w-[250px] object-contain"
              />
            </div>
          </div>

          {/* Ilustrasi: posisinya agak ke bawah & gede */}
          <div className="h-full flex items-center justify-center px-10 pt-28 pb-14 lg:pt-0">
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
                type="password"
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
                Remember me
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
