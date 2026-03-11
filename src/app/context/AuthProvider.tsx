"use client";

import { useState, useCallback } from "react";
import type { ReactNode } from "react";
import { loginProvider, registerProvider } from "@/app/api/auth";
import type { IAuth, UserProfile } from "@/types/authType";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    if (typeof window === "undefined") return false;
    return !!localStorage.getItem("accessToken");
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = useCallback(async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const result = await loginProvider({ email, password });

      localStorage.setItem("accessToken", result.accessToken);
      localStorage.setItem("refreshToken", result.refreshToken);

      setUser(result.user);
      setIsLoggedIn(true);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  const register = useCallback(async (data: IAuth) => {
    setLoading(true);
    setError(null);
    try {
      await registerProvider(data);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed");
      return false;
    } finally {
      setLoading(false);
    }
  }, []);
  const logout = useCallback(() => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUser(null);
    setIsLoggedIn(false);
    setError(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isLoggedIn, loading, error, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
