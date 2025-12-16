import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Dashboard from "./components/Pages/Dashboard";
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer />
      <Routes>
        {/* Login */}
        <Route path="/" element={
          <Login />
          } />

        {/* ADMIN */}
        <Route
          path="/dashboard"
          element={
            <Dashboard initialMenuId="dashboard" />
          }
        />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
