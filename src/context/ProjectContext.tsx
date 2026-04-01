import { createContext, useContext } from "react";
import { ProjectContextType } from "@/types/projectType";

export const ProjectContext = createContext<ProjectContextType | null>(null);

export const useProject = () => {
  const context = useContext(ProjectContext);
  if (!context)
    throw new Error("useProject must be used inside ProjectProvider");
  return context;
};
