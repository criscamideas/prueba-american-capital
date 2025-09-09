import api from "@utils/api";

export const auth = async (email, password) => {
  try {
    const { data } = await api.post("/auth/login", { email, password });
    if (!data) return;
    return data;
  } catch (error) {
    throw error.response?.data || { message: "Error al iniciar sesión" };
  }
};
