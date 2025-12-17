import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

function GuestRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });
  }, []);

  if (loading) return null;

  //  sudah login → lempar ke dashboard
  if (session) {
    return <Navigate to="/dashboard" replace />;
  }

  //  belum login
  return children;
}

export default GuestRoute;
