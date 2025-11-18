import { createContext, useContext, useEffect, useState } from "react";
import {
  login as loginRequest,
  registerUser as registerRequest,
} from "../services/clientAuthService";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const token = localStorage.getItem("authToken");
      const rawUser = localStorage.getItem("authUser");

      if (token && rawUser && rawUser !== "undefined" && rawUser !== "null") {
        const parsedUser = JSON.parse(rawUser);
        setUser(parsedUser);
      }
    } catch (err) {
      console.error("[AuthContext Cliente] Error leyendo sesión", err);
    } finally {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    const data = await loginRequest(email, password);
    console.log("[AuthContext Cliente] respuesta login API:", data);

    const { token, user } = data;

    if (!token || !user) {
      throw new Error("Respuesta de login inválida: falta token o user");
    }

    localStorage.setItem("authToken", token);
    localStorage.setItem("authUser", JSON.stringify(user));

    setUser(user);
    return user;
  };

  const register = async (payload) => {
    // opcional: registrar + loguear, o solo registrar
    const newUser = await registerRequest(payload);

    // Si quisieras loguear automáticamente al registrar:
    // const loginData = await loginRequest(payload.email, payload.password);
    // ...

    return newUser;
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        register,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
