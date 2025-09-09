import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "@services/auth";
import { useAuth } from "@contexts/AuthContext";

export const useForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.type]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!form.email || !form.password) {
      setMessage("Por favor completa todos los campos.");
      return;
    }

    setLoading(true);
    try {
      const userData = await auth(form.email, form.password);
      if (!userData.token) {
        setMessage("Usuario o contraseña incorrectos.");
        return;
      }
      login(userData);
      navigate("/home");
    } catch (err) {
      setMessage(err.response?.data?.error || "Usuario o contraseña incorrectos.");
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    loading,
    message,
    handleChange,
    handleSubmit,
  };
};
