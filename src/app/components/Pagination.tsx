"use client";

import React from "react";

interface PaginationDotsProps {
  total: number;
  current: number;
  onChange: (index: number) => void;
}

const PaginationDots: React.FC<PaginationDotsProps> = ({
  total,
  current,
  onChange,
}) => {
  return (
    <div className="flex items-center justify-center gap-3 py-4">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onChange(index)}
          className={`
            h-2.5 w-2.5 rounded-full transition-all duration-300
            ${
              index === current
                ? "bg-white scale-125 shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                : "bg-white/40 hover:bg-white/60"
            }
          `}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default PaginationDots;
