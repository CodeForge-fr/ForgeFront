'use client'
import { courseApi } from "@/app/api/courseApi";
import { CoursesContext } from "@/context/CoursesContext";
import { Course, CourseContextType } from "@/types/courseType";
import { ReactNode, useCallback, useEffect, useState } from "react";

export const CourseProvider = ({ children }: { children: ReactNode }) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const pageSize = 8;

  const fetchCourses = useCallback(async () => {
    setLoading(true);
    try {
      const data = await courseApi({
        page: currentPage,
        pageSize,
      });
      setCourses(data.items || data);
      setTotalItems(data.total || 0);
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    } finally {
      setLoading(false);
    }
  }, [currentPage]);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  const totalPages = Math.ceil(totalItems / pageSize);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const value: CourseContextType = {
    courses,
    setCourses,
    loading,
    setLoading,
    currentPage,
    setCurrentPage,
    totalPages,
    pageNumbers,
    refreshCourses: fetchCourses,
  };

  return (
    <CoursesContext.Provider value={value}>{children}</CoursesContext.Provider>
  );
};
