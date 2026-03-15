import React from "react";
import Image from "next/image";
import ellipse from "../../../public/elipse.svg";
import AboutSection from "@/components/main/aboutSection/AboutSection";
import ExpertsSection from "./imageSection";

const AboutPage = () => {
  return (
    <>
      <div className="absolute right-0 top-[-4%]">
        <Image src={ellipse} alt="ellipse" className="h-full w-auto" />
      </div>

      <div className="w-full flex items-center min-h-[540px] py-12">
        <div className="flex flex-col gap-4 pl-20 max-w-[55%] z-10">
          <h2 className="text-[44px] font-normal leading-tight">
            <strong className="text-[#0097FE] font-bold">Bridging</strong>{" "}
            Students, Universities, And Opportunities
          </h2>

          <div className="w-[210px] h-[2px] bg-black" />

          <span className="text-sm text-gray-700 leading-relaxed">
            Discover top-tier events across all Armenian universities in one
            unified feed. Join hackathons, academic debates, and cultural
            activities designed to foster collaboration and empower the national
            student community.
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-y-2.5 my-20">
        <h2 className="text-[44px] text-[#333333] font-medium text-center">
          Intelligent Networking For <br /> Modern Education
        </h2>
        <div className="w-30 h-[2px] bg-black mx-auto" />
        <div className="max-w-[74%] flex flex-col gap-y-7 mx-auto text-center font-poppins text-[#5E6C6A] capitalize leading-7">
          <span>
            UniLink is a leading Armenian platform specializing in connecting
            the academic world. Since our launch, we’ve delivered innovative
            digital tools across all regions, transforming ordinary university
            life into a connected, efficient environment.
          </span>
          <span>
            Our team leverages modern technologies to create customized
            solutions for students and partners. We integrate seamless event
            management with robust networking tools, ensuring reliable
            performance for each university&apos;s needs.
          </span>
        </div>
      </div>
      <AboutSection />
      <div className="bg-[#F7F7F7]">
        <ExpertsSection />
      </div>
    </>
  );
};

export default AboutPage;
