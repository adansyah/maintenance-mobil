import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Dashboard from "./components/Pages/Dashboard";
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from "./middleware/ProtectedRoute";
import GuestRoute from "./middleware/GuestRoute";


function App() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer />
      <Routes>
        {/* Login */}
        <Route path="/" element={
          <GuestRoute>
          <Login />
          </GuestRoute>
          } />

        {/* DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
            <Dashboard initialMenuId="beranda" />
            </ProtectedRoute>
          }
        />
        {/* LAYANAN */}
        <Route
          path="/layanan"
          element={
            <ProtectedRoute>
            <Dashboard initialMenuId="layanan" />
            </ProtectedRoute>
          }
        />
        {/* DATA KENDARAAN */}
        <Route
          path="/kendaraan"
          element={
            <ProtectedRoute>
            <Dashboard initialMenuId="kendaraan" />
            </ProtectedRoute>
          }
        />
        {/* SERVIS KENDARAAN */}
        <Route
          path="/servis"
          element={
            <ProtectedRoute>
            <Dashboard initialMenuId="servis" />
            </ProtectedRoute>
          }
        />
        {/* RIWAYAT SERVIS */}
        <Route
          path="/servis/riwayat"
          element={
          <ProtectedRoute>
            <Dashboard initialMenuId="riwayat" />
          </ProtectedRoute>
          }
        />
        {/* LAPORAN */}
        <Route
          path="/laporan"
          element={
            <ProtectedRoute>
            <Dashboard initialMenuId="laporan" />
            </ProtectedRoute>
          }
        />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
