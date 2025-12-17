import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });
  }, []);

  if (loading) return null; // bisa ganti spinner

  //  belum login → lempar ke login
  if (!session) {
    return <Navigate to="/" replace />;
  }

  //  sudah login
  return children;
}

export default ProtectedRoute;
