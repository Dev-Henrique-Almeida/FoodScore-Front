"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { IAuthContextData, IUserData } from "@/app/shared/@types"; 
import { localStorageUtils } from "../utils/localStorageUtils"; 

const AuthContext = createContext<IAuthContextData | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUserData | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // Carregar usuário e token do localStorage ao montar o componente
  useEffect(() => {
    const storedUser = localStorageUtils.getItem("user");
    const storedToken = localStorageUtils.getItem("token");

    if (storedUser && storedToken) {
      setUser(storedUser);
      setToken(storedToken);
    }
    
  }, []); 

  // Sempre que o user ou token mudar, salve no localStorage
  useEffect(() => {
    if (user) {
      localStorageUtils.setItem("user", user);
    } else {
      localStorageUtils.removeItem("user");
    }

    if (token) {
      localStorageUtils.setItem("token", token);
    } else {
      localStorageUtils.removeItem("token");
    }
  }, [user, token]);

  useEffect(() => {
    console.log("AuthContext state:", { user, token });
  }, [user, token]);

  return (
    <AuthContext.Provider value={{ user, token, setUser, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
