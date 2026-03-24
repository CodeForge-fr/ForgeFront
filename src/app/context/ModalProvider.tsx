"use client"

import { ReactNode, useState } from "react";
import { ModalContext } from "./useModalContext";

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [onClose, setOnClose] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        loading,
        setLoading,
        isOpen,
        setIsOpen,
        onClose,
        setOnClose,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
