"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "./ProjectCard";
import SwiperButtons from "./SwiperButtons";
import { projectsData } from "@/data/projectData";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

export default function ProjectSlider() {
  const [list] = useState([
    "Teammates",
    "Partner University",
    "Speakers",
    "Tech Support",
  ]);
  const [isActive, setIsActive] = useState<number | null>(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  return (
    <div className="mt-[60px] rounded-3xl">
      <div className="flex justify-between items-center text-white">
        <div className="flex flex-col gap-y-[20px]">
          <h2 className="italic text-[#333333] font-normal">
            Who are you looking for?
          </h2>
          <div className="flex text-[#333333] gap-x-[20px]">
            {list.map((item, index) => (
              <span
                key={index}
                className={`cursor-pointer transition-all ${
                  isActive === index
                    ? "underline underline-offset-8 text-[#2D3DD1] font-semibold"
                    : "text-[#333333]"
                }`}
                onClick={() => setIsActive(index)}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <SwiperButtons swiper={swiper} />
      </div>

      <Swiper
        spaceBetween={24}
        onSwiper={setSwiper}
        slidesPerView={4}
        centeredSlides={false}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        className="mt-8 !overflow-visible md:!overflow-hidden"
      >
        {projectsData.map((project) => (
          <SwiperSlide key={project.id} className="mr-5">
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
