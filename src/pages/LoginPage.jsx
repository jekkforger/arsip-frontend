import { useState } from "react";
import illustration from "/login-illustration.png";
import logo from "/logo-arsip.png";

function Input({ label, type = "text", value, onChange, placeholder }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-600">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-slate-700 outline-none transition
                   focus:border-[#2B6FF2] focus:ring-2 focus:ring-[#2B6FF2]/20"
      />
    </label>
  );
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, remember });
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* GRID 60 : 40 */}
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[60%_40%]">
        {/* LEFT – 60% */}
        <div className="relative overflow-hidden bg-[#1F5EFF]">
          {/* LOGO */}
          <div className="absolute left-6 top-4 z-20">
            <img
              src={logo}
              alt="Logo"
              className="h-30 w-auto object-contain drop-shadow-md"
            />
          </div>

          {/* ILLUSTRATION */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-8">
            <div className="w-full max-w-[520px]">
              <img
                src={illustration}
                alt="Ilustrasi Login"
                className="w-full select-none"
                draggable="false"
              />
            </div>
          </div>
        </div>

        {/* RIGHT – 40% */}
        <div className="flex items-center justify-center px-6 py-12 lg:px-12">
          <div className="w-full max-w-md">
            <h1 className="text-2xl font-semibold text-slate-900">
              Login Akun
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              Selamat datang kembali! Silakan masuk dengan email dan kata sandi
              yang telah terdaftar.
            </p>

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

              <div className="flex items-center gap-2">
                <input
                  id="remember"
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-200"
                />
                <label htmlFor="remember" className="text-sm text-slate-600">
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-[#2B6FF2] px-4 py-3 text-sm font-semibold text-white
                           shadow-sm transition hover:bg-[#245FE0] focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                Login Akun
              </button>
            </form>

            <p className="mt-6 text-center text-xs text-slate-400">
              © {new Date().getFullYear()} Digitalisasi Arsip
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
