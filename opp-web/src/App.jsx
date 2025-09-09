import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "@views/auth/Login";
import { Home } from "@views/public/Home";
import { AuthProvider } from "@contexts/AuthContext";
import { PrivateRoute } from "@layouts/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <main className="font-primary bg-cream">
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
      </Router>
    </AuthProvider>
  );
}

export default App;
