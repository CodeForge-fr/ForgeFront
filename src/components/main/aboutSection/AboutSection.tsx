"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { aboutTheme } from "@/themes/aboutThemes";

const AboutSection = () => {
  const [counts, setCounts] = useState({ students: 0, uni: 0, projects: 0 });
  const pathname = usePathname();
  const statsRef = useRef<HTMLDivElement | null>(null);

  const theme =
    aboutTheme[pathname as keyof typeof aboutTheme] || aboutTheme.default;

  const animateValue = (
    end: number,
    setterKey: keyof typeof counts,
    duration = 1500,
  ) => {
    let startTime: number | null = null;
    const step = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * end);

      setCounts((prev) => ({ ...prev, [setterKey]: value }));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateValue(50, "students");
          animateValue(10, "uni");
          animateValue(theme.projectsEnd, "projects");
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [theme.projectsEnd]); 

  return (
    <section className="py-20 md:py-24">
      <div className="max-w-xl md:max-w-4xl lg:max-w-7xl mx-auto px-4 sm:px-6">
        <div className={theme.container}>
          {/* Header Section */}
          <div
            className={`${theme.headerWrapper} flex flex-col gap-y-5 justify-between`}
          >
            <div className="md:flex-1">
              <h2 className={theme.title}>{theme.titleText}</h2>
            </div>

            {theme.showDesc && (
              <div className="md:flex-1">
                <p className="text-[#5E6C6A] leading-relaxed mb-8">
                  Our platform creates a dynamic ecosystem connecting 50,000+
                  students and 10+ academic institutions. By fostering
                  innovation through 500+ collaborative projects...
                </p>
              </div>
            )}
          </div>

          {/* Stats & Image Section */}
          <div className="flex flex-col gap-y-10 items-start lg:flex-row sm:items-end sm:justify-between w-full">
            <div
              className={pathname === "/about" ? "w-full" : "w-full lg:w-[45%]"}
            >
              <div ref={statsRef} className={theme.statsGrid}>
                {/* Students */}
                <div className={`${theme.statItem} flex flex-col`}>
                  <div className={theme.statValue}>+{counts.students}K</div>
                  <p className={`${theme.statLabel} mt-2 text-[#5E6C6A]`}>
                    Students
                  </p>
                </div>
                {/* Universities */}
                <div className={`${theme.statItem} flex flex-col`}>
                  <div className={theme.statValue}>+{counts.uni}</div>
                  <p className={`${theme.statLabel} mt-2 text-[#5E6C6A]`}>
                    Universities
                  </p>
                </div>
                {/* Projects */}
                <div className={`${theme.statItem} flex flex-col border-none`}>
                  <div className={theme.statValue}>+{counts.projects}</div>
                  <p className={`${theme.statLabel} mt-2 text-[#5E6C6A]`}>
                    Joint Projects
                  </p>
                </div>
              </div>
            </div>

            {/* Image Wrapper */}
            <div
              className={`${theme.imageContainer} rounded-2xl overflow-hidden shadow-md mt-auto`}
            >
              <Image
                src={theme.imageSrc}
                alt="Display"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                style={
                  pathname === "/about" ? { objectPosition: "40% 20%" } : {}
                }
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
