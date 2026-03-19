import { Outlet, Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import { Navbar } from "../components/Navbar"

export function ProtectedLayout() {
  // user validation
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) return <Navigate to="/login" replace />;

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}