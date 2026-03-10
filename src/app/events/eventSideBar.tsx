"use client";
import React, { useState } from "react";
import { X, Plus } from "lucide-react";
import { categories } from "@/data/eventCategories";

const EventSidebar = () => {
  const [openSections, setOpenSections] = useState<string[]>([
    "University",
    "Concerts",
    "Films",
    "Sports",
  ]);

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title],
    );
  };

  return (
    <aside className="w-full flex flex-col gap-y-6">
      <div className="text-[#0097FE] text-base font-normal mb-2">Home/Events</div>

      <h3 className="text-[#333333] font-bold text-lg tracking-wider">
        CATEGORIES
      </h3>

      <div className="flex flex-col gap-y-4">
        {categories.map((cat) => (
          <div key={cat.title} className="border-b border-gray-100 pb-4">
            <button
              onClick={() => toggleSection(cat.title)}
              className="flex items-center justify-between w-full py-2 text-gray-800 font-bold text-lg"
            >
              {cat.title}
              {openSections.includes(cat.title) ? (
                <X size={24} />
              ) : (
                <Plus size={18} />
              )}
            </button>

            {openSections.includes(cat.title) && (
              <ul className="mt-2 flex flex-col gap-y-3">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="text-[#333333] text-sm font-normal hover:text-[#0095FF] cursor-pointer transition-colors leading-tight"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default EventSidebar;
