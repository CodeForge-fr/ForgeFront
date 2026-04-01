"use client";
import { useState } from "react";
import { Poppins } from "next/font/google";
import ProjectCard from "./ProjectCard";
import ProjectPagination from "./pagination";
import EventPagination from "../events/pagination";

// ─── Font ───────────────

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
});

// ─── Types ───────────────

interface Project {
  club: string;
  logo: string;
  time: string;
  title: string;
  description: string;
  roles: string[];
  seats: number;
  deadline: string;
}

// ─── Data ───────────────

const ECO_TECH_PROJECT: Project = {
  club: "AUA Community Service Club",
  logo: "/hackathon-card-logo.svg",
  time: "5h ago",
  title: "Eco-Tech Green Campus Initiative",
  description:
    "Looking for engineering students to design a smart waste-recycling system for Armenian universities.",
  roles: ["Environmentalist", "Hardware Engineer", "Project Manager"],
  seats: 2,
  deadline: "Nov 05",
};

const BLOCK_1_PROJECTS: Project[] = [
  {
    club: "YSU IT Club",
    logo: "/hackathon-card-logo.svg",
    time: "2h ago",
    title: "Smart City Solutions Hackathon",
    description:
      "We are building a cross-university team to solve urban traffic issues in Yerevan.",
    roles: ["Designer", "Backend Dev", "Data Scientist"],
    seats: 3,
    deadline: "Oct 26",
  },
  ECO_TECH_PROJECT,
  ECO_TECH_PROJECT,
  ECO_TECH_PROJECT,
];

const BLOCK_2_PROJECTS: Project[] = [ECO_TECH_PROJECT, ECO_TECH_PROJECT];

const TOTAL_PAGES = 3;
const PAGE_NUMBERS: number[] = [1, 2, 3];

// ─── Sub-components ───────────────

function PageHeader() {
  return (
    <div className="ml-[calc(12rem+1.5rem)]">
      <section className="w-full pt-9 text-center">
        <h2 className="text-[2.5rem] font-medium tracking-[0.01em] text-slate-900 leading-[1.1]">
          <span className="text-sky-500 font-semibold">Active</span> Initiatives
          <br />
          and Projects
        </h2>
        <p className="mt-6 px-2 text-[0.8rem] text-slate-500 leading-relaxed max-w-xl mx-auto">
          Discover top-tier events across all Armenian universities in one
          unified feed. Join hackathons, academic debates, and cultural
          activities designed to foster collaboration and empower the national
          student community.
        </p>
      </section>
    </div>
  );
}

function FeaturedBanner() {
  return (
    <section className="relative rounded-2xl overflow-hidden border border-gray-200 max-h-[322px]">
      <div className="flex">
        <div className="w-1/2 flex-shrink-0">
          <img
            src="/images/futuristic-city.png"
            alt="Smart City"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col bg-white px-4 py-6 w-1/2">
          <div className="flex items-center gap-3 px-6">
            <div className="w-8 h-8 border-2 border-black rounded-sm flex items-center justify-center font-black text-sm">
              D
            </div>
            <div className="text-[10px] font-bold uppercase leading-tight text-gray-800 tracking-wide">
              Business
              <br />
              Development
              <br />
              Group
            </div>
          </div>
          <hr className="border-gray-200 my-3" />
          <div className="flex-1 px-6">
            <h2 className="text-xl font-bold text-gray-900 leading-snug">
              <span className="font-extrabold">Smart Cities:</span>
              <br />
              How Is Technology Shaping
              <br />
              the Future of Urban Living?
            </h2>
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
        <button className="bg-white border border-gray-300 text-gray-900 text-[0.8rem] font-semibold px-8.5 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 whitespace-nowrap">
          Book Now
        </button>
      </div>
    </section>
  );
}

interface ProjectGridProps {
  projects: Project[];
}

function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}

interface ContentColumnProps {
  children: React.ReactNode;
}

function ContentColumn({ children }: ContentColumnProps) {
  return (
    <div className="max-w-[732px] mx-auto sm:max-w-[940px] flex gap-6">
      <div className="hidden sm:block w-48 shrink-0" />
      <div className="w-[calc(100%-13rem)] shrink-0">{children}</div>
    </div>
  );
}

// ─── Page ───────────────

export default function ProjectsPage() {
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <div className={`bg-[#f0f4ff] ${poppins.className}`}>
      <div className="max-w-[940px] mx-auto px-5 sm:px-10">
        <PageHeader />
      </div>

      <section className="min-h-screen pt-5 px-5 pb-3 sm:pt-10 sm:px-10 sm:pb-6">
        <ContentColumn>
          <ProjectGrid projects={BLOCK_1_PROJECTS} />
        </ContentColumn>
      </section>

      <section className="px-5 pb-3 sm:px-10 sm:pb-6">
        <ContentColumn>
          <FeaturedBanner />

          <div className="mt-5 sm:mt-10">
            <ProjectGrid projects={BLOCK_2_PROJECTS} />
          </div>

          <div className="flex justify-start mt-6">
            <ProjectPagination
              currentPage={currentPage}
              totalPages={TOTAL_PAGES}
              pageNumbers={PAGE_NUMBERS}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </ContentColumn>
      </section>
    </div>
  );
}
