import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

function Layanan() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data, error } = await supabase
      .from("layanan")
      .select("*")
      .order("nama_layanan", { ascending: true });
      console.log(data);
    if (error) {
      console.error("Error fetch layanan:", error);
    } else {
      setServices(data);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Daftar Layanan Bengkel
        </h1>
        <p className="text-sm text-gray-500">
          Pilih layanan servis kendaraan sesuai kebutuhan Anda
        </p>
      </div>

      {/* LOADING */}
      {loading && (
        <div className="text-gray-500">Memuat layanan...</div>
      )}

      {/* CARD GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="text-3xl">🛠️</div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  {service.nama_layanan}
                </h3>
                <p className="text-xs text-gray-500">
                  Estimasi: {service.estimasi || "-"}
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-4">
              {service.deskripsi || "Tidak ada deskripsi"}
            </p>

            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-indigo-600">
                Rp {Number(service.harga).toLocaleString("id-ID")}
              </span>

              
            </div>
          </div>
        ))}
      </div>

      {/* INFO */}
      <div className="mt-10 bg-indigo-50 border border-indigo-100 p-4 rounded-lg text-sm text-indigo-800">
        ℹ️ Harga dapat berubah sesuai kondisi kendaraan.
      </div>

    </div>
  );
}

export default Layanan;
