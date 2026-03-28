import { createContext, useContext } from "react";
import { modalType } from "@/types/modalType";

export const ModalContext = createContext<modalType | null>(null);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};
