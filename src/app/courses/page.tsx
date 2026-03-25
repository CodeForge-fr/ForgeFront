"use client";

import CoursesHero from "@/components/main/courses/CoursesHero";
import CoursesFilters from "@/components/main/courses/CoursesFilters";
import CoursesGrid from "@/components/main/courses/CoursesGrid";
import CoursesPagination from "@/components/main/courses/CoursesPagination";

export default function CoursesPage() {
  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <CoursesHero />

      <div className="max-w-7xl">
        <CoursesFilters />
        <CoursesGrid />
        <CoursesPagination />
      </div>
    </div>
  );
}