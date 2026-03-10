import React from "react";
import Image from "next/image";
import prevIcon from "../../../public/icons/prevIcon.svg";
import nextIcon from "../../../public/icons/nextIcon.svg";

interface EventPaginationProps {
  currentPage: number;
  totalPages: number;
  pageNumbers: number[];
  setCurrentPage: (page: number) => void;
}

const EventPagination = ({
  currentPage,
  totalPages,
  pageNumbers,
  setCurrentPage,
}: EventPaginationProps) => {
  return (
    <div className="flex items-center gap-x-2.5 mt-10">
      <button
        onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
      >
        <Image src={prevIcon} alt="Previous" width={16} height={16} />
      </button>
      <div className="flex gap-x-[10px]">
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
            <span className="w-4 h-4 flex items-center justify-center">
              {number.toString().padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>
      <button
        onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        <Image src={nextIcon} alt="Next" width={16} height={16} />
      </button>
    </div>
  );
};

export default EventPagination;
