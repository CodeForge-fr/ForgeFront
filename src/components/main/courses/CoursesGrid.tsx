import CourseCard from "./CourseCard";
import { Course } from "@/types/courseType";
import globe from "../../../../public/globe.svg";
import universities from "../../../../public/images/universities.jpg";

const staticCourses: Course[] = [
  {
    id: 1,
    type: "Programming",
    star: "4.9",
    icon: globe,
    title: "Complete Web Development Bootcamp",
    desc: "Learn HTML, CSS, JavaScript, React, and Node.js from scratch",
    price: 99,
    image: universities,
  },
  {
    id: 2,
    type: "Design",
    star: "4.9",
    icon: globe,
    title: "UI/UX Design Masterclass",
    desc: "Master the principles of user interface and user experience design",
    price: 99,
    image: universities,
  },
  {
    id: 3,
    type: "Design",
    star: "4.9",
    icon: globe,
    title: "UI/UX Design Masterclass",
    desc: "Master the principles of user interface and user experience design",
    price: 99,
    image: universities,
  },
  {
    id: 4,
    type: "Design",
    star: "4.9",
    icon: globe,
    title: "UI/UX Design Masterclass",
    desc: "Master the principles of user interface and user experience design",
    price: 99,
    image: universities,
  },
  {
    id: 5,
    type: "Design",
    star: "4.9",
    icon: globe,
    title: "UI/UX Design Masterclass",
    desc: "Master the principles of user interface and user experience design",
    price: 99,
    image: universities,
  },
  {
    id: 6,
    type: "Programming",
    star: "4.8",
    icon: globe,
    title: "Python for Data Science",
    desc: "Analyze large datasets and build predictive models with Python",
    price: 89,
    image: universities,
  },
  {
    id: 7,
    type: "Marketing",
    star: "4.7",
    icon: globe,
    title: "Digital Marketing Strategy",
    desc: "Master SEO, SEM, and social media advertising",
    price: 79,
    image: universities,
  },
  {
    id: 8,
    type: "Business",
    star: "4.9",
    icon: globe,
    title: "Entrepreneurship 101",
    desc: "Launch your startup from an idea to a profitable business",
    price: 120,
    image: universities,
  },
  {
    id: 9,
    type: "Programming",
    star: "4.6",
    icon: globe,
    title: "iOS App Development",
    desc: "Build beautiful native apps using Swift and SwiftUI",
    price: 110,
    image: universities,
  },
  {
    id: 10,
    type: "Design",
    star: "4.8",
    icon: globe,
    title: "Motion Graphics with After Effects",
    desc: "Create stunning animations and visual effects",
    price: 95,
    image: universities,
  },
  {
    id: 11,
    type: "Data Science",
    star: "4.9",
    icon: globe,
    title: "Machine Learning A-Z",
    desc: "Learn to create Machine Learning Algorithms in Python and R",
    price: 105,
    image: universities,
  },
  {
    id: 12,
    type: "Programming",
    star: "4.5",
    icon: globe,
    title: "Java Spring Boot Microservices",
    desc: "Build scalable backend systems with Spring Boot",
    price: 99,
    image: universities,
  },
  {
    id: 13,
    type: "Cybersecurity",
    star: "4.7",
    icon: globe,
    title: "Ethical Hacking Fundamentals",
    desc: "Protect systems from hackers by thinking like one",
    price: 130,
    image: universities,
  },
  {
    id: 14,
    type: "Photography",
    star: "4.8",
    icon: globe,
    title: "Digital Photography Masterclass",
    desc: "Learn lighting, composition, and post-processing",
    price: 65,
    image: universities,
  },
  {
    id: 15,
    type: "Design",
    star: "4.9",
    icon: globe,
    title: "Graphic Design Bootcamp",
    desc: "The complete guide to Adobe Photoshop and Illustrator",
    price: 85,
    image: universities,
  },
  {
    id: 16,
    type: "Business",
    star: "4.6",
    icon: globe,
    title: "Project Management Pro",
    desc: "Prepare for PMP certification with real-world scenarios",
    price: 150,
    image: universities,
  },
  {
    id: 17,
    type: "Programming",
    star: "4.7",
    icon: globe,
    title: "C++ Game Development",
    desc: "Build high-performance games using Unreal Engine",
    price: 115,
    image: universities,
  },
];

export default function CoursesGrid() {
  //   const { courses, loading } = useCourses();

  //   if (loading) {
  //     return (
  //       <div className="max-w-7xl mx-auto grid grid-cols-4 gap-6">
  //         {/* Simple skeleton loader or message */}
  //         {[...Array(8)].map((_, i) => (
  //           <div key={i} className="h-64 bg-gray-100 animate-pulse rounded-xl" />
  //         ))}
  //       </div>
  //     );
  //   }
  return (
    <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {/*courses */}
      {staticCourses.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  );
}
