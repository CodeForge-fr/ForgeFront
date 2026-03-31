"use client";

import { ReactNode, useState } from "react";
import { ProjectContext } from "@/context/ProjectContext";
// import { ProjectContextType } from "@/types/projectType";

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const onClose = () => setActiveModal(null);

  return (
    <ProjectContext.Provider
      value={{
        loading,
        setLoading,
        activeModal,
        setActiveModal,
        onClose,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
