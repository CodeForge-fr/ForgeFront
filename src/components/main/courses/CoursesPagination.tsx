import Image from "next/image";
import prevIcon from "../../../../public/icons/prevIcon.svg";
import nextIcon from "../../../../public/icons/nextIcon.svg";

interface CoursesPageType {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  pageNumbers: number[];
  totalPages: number;
}

export default function CoursesPagination({
  currentPage,
  setCurrentPage,
  pageNumbers,
  totalPages,
}: CoursesPageType) {
  return (
    <div className="flex justify-start p-10 gap-2">
      <button
        onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="disabled:opacity-30"
      >
        <Image src={prevIcon} alt="Previous" width={20} height={20} />
      </button>

      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => setCurrentPage(number)}
          className={`w-10 h-10 flex items-center justify-center rounded-full text-lg font-medium transition-all
            ${
              currentPage === number
                ? "bg-[#0095FF] text-white shadow-lg shadow-blue-200"
                : "bg-[#E5E5E5] text-[#555555] hover:bg-gray-300"
            }`}
        >
          {number.toString().padStart(2, "0")}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages || totalPages === 0}
        className="disabled:opacity-30"
      >
        <Image src={nextIcon} alt="Next" width={20} height={20} />
      </button>
    </div>
  );
}
