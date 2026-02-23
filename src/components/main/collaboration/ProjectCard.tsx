import { projectType } from "@/types/projectType";
import Image from "next/image";

interface ProjectCardProps {
  project: projectType;
}

function ProjectCard({ project }: ProjectCardProps) {

  return (
    <div
      className={`w-full bg-white rounded-3xl p-5 flex flex-col gap-5 border-none h-full`}
    >
      <div className="flex justify-between items-start">
        <div className="w-full flex items-center justify-between gap-3">
          <div className=" flex items-center justify-center gap-[10px]">
            <div
              className={`h-10 flex items-center justify-center ${
                project.university.includes("AUA") ? "w-[64px]" : "w-11"
              }`}
            >
              <Image
                src={project.logo}
                alt="logo"
                className="max-h-full object-contain"
              />
            </div>
            <h4 className="font-semibold text-sm text-gray-800 whitespace-pre-line">
              {project.university}
            </h4>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-gray-400">{project.timeAgo}</span>
          </div>
        </div>
      </div>

      <h3 className="w-[250px] text-xl font-bold text-gray-900 leading-tight">
        {project.title}
      </h3>
      <p className="text-gray-500 text-xs">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-[#2d3dd1] text-white text-[10px] p-2  rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="w-full h-[1px] bg-[#333333]"></div>
      <div className="text-xs font-bold text-gray-800">
        {project.seatsLeft} seats left
      </div>

      <div className="flex flex-col gap-y-[25px]">
        <button className="w-full bg-[#2D3DD1] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
          Join Project
        </button>
        <p className="text-sm text-gray-400">Deadline: {project.deadline}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
