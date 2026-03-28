"use client";

import { useState, useCallback } from "react";
import type { ReactNode } from "react";
import { loginProvider, registerProvider } from "@/app/api/auth";
import type { IAuth, UserProfile } from "@/types/authType";
import { AuthContext } from "../context/AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isLoggedIn = !!user;

  const login = useCallback(async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const result = await loginProvider({ email, password });

      setUser(result.user ?? null);
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
    setUser(null);
    setError(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, loading, isLoggedIn, error, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
