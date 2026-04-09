import { createContext, useContext } from "react";
import { CourseContextType } from "@/types/courseType";

export const CoursesContext = createContext<CourseContextType | null>(null);

export const useCourses = () => {
  const context = useContext(CoursesContext);
  if (!context) throw new Error("useCourese must be used inside CoursesProvider");
  return context;
};
