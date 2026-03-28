"use client";

import { ReactNode, useState } from "react";
import { ModalContext } from "@/context/useModalContext";

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const onClose = () => setActiveModal(null);

  return (
    <ModalContext.Provider
      value={{
        loading,
        setLoading,
        activeModal,
        setActiveModal,
        onClose,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
