import { Navigate } from "react-router-dom";
import { useAuth } from "@contexts/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <p>Cargando...</p>;

  return user ? children : <Navigate to="/login" replace />;
};
