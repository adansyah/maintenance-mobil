import React, { useState } from "react";
import { supabase } from "../../lib/supabase";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error("Email atau password salah");
    } else {
      toast.success("Login berhasil 🚗");
      // redirect
      window.location.href = "/dashboard";
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="flex w-full max-w-5xl bg-gray-800 rounded-xl overflow-hidden shadow-2xl">

        {/* LEFT IMAGE */}
        <div className="hidden md:flex w-1/2 relative bg-gradient-to-br from-zinc-600 to-gray-900">
          <div className="absolute inset-0 bg-[url('/car.png')] bg-cover bg-center opacity-50 animate-zoom"></div>

          <div className="relative z-10 flex flex-col justify-end p-10 text-white">
            <h2 className="text-3xl font-bold mb-3">
              Sistem Maintenance Mobil
            </h2>
            <p className="text-gray-300">
              Pantau servis, riwayat perawatan, dan estimasi biaya kendaraan Anda
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-600 p-3 rounded-full text-white text-xl">
                🚗
              </div>
            </div>
            <h1 className="text-2xl font-bold text-white">
              Login Bengkel
            </h1>
            <p className="text-gray-400 text-sm">
              Masuk menggunakan email
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">

            {/* EMAIL */}
            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="contoh@email.com"
                required
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Masukkan password"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
            >
              {loading ? "Memproses..." : "Login"}
            </button>
          </form>
        </div>
      </div>

      {/* ANIMATION */}
      <style>
        {`
          @keyframes zoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
          }
          .animate-zoom {
            animation: zoom 12s ease-in-out infinite alternate;
          }
        `}
      </style>
    </div>
  );
}

export default Login;
