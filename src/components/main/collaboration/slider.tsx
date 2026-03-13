"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/data/projectData";


export default function ProjectSlider() {
  const [list] = useState([
    "Teammates",
    "Partner University",
    "Speakers",
    "Tech Support",
  ]);
  const [isActive, setIsActive] = useState<number | null>(0);
  
  return (
    <div className="mt-[60px] rounded-3xl">
      <div className="flex justify-between items-center text-white">
        <div className="flex flex-col gap-y-[20px]">
          <h2 className="italic text-[#333333] font-normal">
            Who are you looking for?
          </h2>
          <div className="flex flex-wrap text-[#333333] gap-5">
            {list.map((item, index) => (
              <span
                key={index}
                className={`cursor-pointer transition-all ${
                  isActive === index
                    ? "underline underline-offset-8 text-[#0097FE] font-semibold"
                    : "text-[#333333]"
                }`}
                onClick={() => setIsActive(index)}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center mt-10 gap-x-5">
        {projectsData.slice(0, 3).map((project, index) => (
          <div
            key={project.id}
            className={`mb-8 h-full ${
              index === 2 ? "hidden lg:block" : ""
            } ${
              index === 1 ? "hidden md:block" : ""
            }`}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
