"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const AboutSection = () => {
  const [studentsCount, setStudentsCount] = useState(0);
  const [universitiesCount, setUniversitiesCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);

  const statsRef = useRef<HTMLDivElement | null>(null);

  const animateValue = (
    start: number,
    end: number,
    duration: number,
    setter: React.Dispatch<React.SetStateAction<number>>
  ) => {
    let startTime: number | null = null;

    const step = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setter(Math.floor(progress * (end - start) + start));

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateValue(0, 50, 1500, setStudentsCount);
          animateValue(0, 10, 1500, setUniversitiesCount);
          animateValue(0, 500, 1500, setProjectsCount);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-16 items-stretch">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col justify-between">
            
            {/* Title */}
            <h2 className="text-4xl font-bold text-[#2D3DD1]">
              About Us
            </h2>

            {/* Stats */}
            <div
              ref={statsRef}
              className="flex items-center gap-12 mt-16"
            >
              <div>
                <div className="text-4xl font-bold text-[#333333]">
                  +{studentsCount}K
                </div>
                <p className="text-[#5E6C6A] text-sm mt-2">Students</p>
              </div>

              <div className="h-12 w-px bg-gray-300"></div>

              <div>
                <div className="text-4xl font-bold text-[#333333]">
                  +{universitiesCount}
                </div>
                <p className="text-[#5E6C6A] text-sm mt-2">Universities</p>
              </div>

              <div className="h-12 w-px bg-gray-300"></div>

              <div>
                <div className="text-4xl font-bold text-[#333333]">
                  +{projectsCount}
                </div>
                <p className="text-[#5E6C6A] text-sm mt-2">
                  Joint Projects
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col">
            
            <p className="text-[#5E6C6A] leading-relaxed mb-8">
              Our platform creates a dynamic ecosystem connecting 50,000+
              students and 10+ academic institutions. By fostering innovation
              through 500+ collaborative projects, we bridge the gap between
              education and real-world impact.
            </p>

            <div className="rounded-2xl overflow-hidden shadow-md mt-auto">
              <Image
                src="/images/about.png"
                alt="students"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;