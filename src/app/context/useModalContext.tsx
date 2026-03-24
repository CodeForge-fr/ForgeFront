import { modalType } from "@/types/modalType";
import { createContext, useContext } from "react";

export const ModalContext = createContext<modalType | null>(null);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};
