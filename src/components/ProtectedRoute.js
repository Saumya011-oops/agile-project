import { Navigate, useLocation } from "react-router-dom";

// Wrap any <Route> element in this to require login.
// If there's no token, we save where the user was trying to go
// (Login.js already knows how to read "redirectAfterLogin" and send
// them back there after a successful login) and bounce to /login.
export default function ProtectedRoute({ children }) {
  const location = useLocation();
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  if (!token || !user) {
    localStorage.setItem("redirectAfterLogin", location.pathname);
    return <Navigate to="/login" replace />;
  }

  return children;
}
