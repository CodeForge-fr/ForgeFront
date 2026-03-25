import CourseCard from "./CourseCard";

const courses = [
  { id: 1, title: "React Course", price: 99, image: "/img1.jpg" },
  { id: 2, title: "Node.js Course", price: 120, image: "/img2.jpg" },
];

export default function CoursesGrid() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
      {courses.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  );
}