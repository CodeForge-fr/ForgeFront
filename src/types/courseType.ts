import { StaticImageData } from "next/image";

export interface Course {
  id: number;
  type: string; 
  star: string; 
  icon: string | StaticImageData;
  title: string; 
  desc: string; 
  price: number;
  image: string | StaticImageData;
  start?: string;
  end?: string;
  duration?: string;
  isPayable?: boolean;
  isCompleted?: boolean;
  ageLimit?: number;
}

export interface CourseContextType {
  courses: Course[];
  setCourses: React.Dispatch<React.SetStateAction<Course[]>>;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  pageNumbers: number[];
  refreshCourses: () => Promise<void>;
}
