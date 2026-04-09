import React from "react";
import CoursesFilters from "./CoursesFilters";
import CoursesGrid from "./CoursesGrid";
import CoursesHero from "./CoursesHero";
import CoursesPagination from "./CoursesPagination";
import { useCourses } from "@/context/CoursesContext";
import CourseFooter from "./CourseFooter";

const Courses = () => {
  const { pageNumbers, totalPages, currentPage, setCurrentPage } = useCourses();

  return (
    <section className="w-full">
      <CoursesHero />

      <div>
        <CoursesFilters />
        <CoursesGrid />
        <CoursesPagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageNumbers={pageNumbers}
          totalPages={totalPages}
        />
      </div>

      <CourseFooter/>
    </section>
  );
};

export default Courses;
