"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEvent } from "@/context/EventContext";
import { EventCard } from "./eventCard";
import arrow from "../../../../public/icons/arrow.svg";
import arrowTop from "../../../../public/icons/arrowTop.svg";

export default function EventGrid() {
  const { events, loading } = useEvent();

  if (loading) {
    return (
      <div className="text-center py-20 font-medium text-gray-500">
        Loading Events...
      </div>
    );
  }

  return (
    <section className="w-full mx-auto mt-[100px]">
      {/* Filters Header */}
      <div className="flex gap-6 mb-8 text-gray-600 font-medium">
        <div className="flex items-center gap-1 cursor-pointer hover:text-blue-500 transition-colors">
          Universities
          <Image src={arrowTop} alt="arrow-top" width={12} height={12} />
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-blue-500 transition-colors">
          Category
          <Image src={arrowTop} alt="arrow-top" width={12} height={12} />
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Card 1 */}
        {events[0] && <EventCard key={events[0].id} event={events[0]} />}

        <div className="flex flex-col gap-y-5">
          {/* Desktop "View all" card */}
          <Link
            href="/universities"
            className="hidden py-5 h-[150px] flex flex-col justify-between rounded-[32px] text-white bg-[#0097FE] cursor-pointer hover:bg-blue-600 transition-colors lg:flex"
          >
            <div className="w-full flex justify-end px-5">
              <Image
                src={arrow}
                alt="arrow"
                className="w-12 bg-white rounded-full p-2"
              />
            </div>
            <span className="text-2xl font-bold pl-5 font-poppins">
              View all
            </span>
          </Link>

          {/* Card 2 */}
          {events[1] && <EventCard key={events[1].id} event={events[1]} />}
        </div>

        {/* Card 3 (Hidden on tablet, shown on mobile/desktop) */}
        {events[2] && (
          <EventCard
            key={events[2].id}
            event={events[2]}
            className="md:hidden lg:flex"
          />
        )}

        {/* Mobile "View all" card */}
        <Link
          href="/universities"
          className="flex bg-[#0097FE] py-5 h-[150px] rounded-[32px] flex-col justify-between text-white cursor-pointer hover:bg-blue-600 transition-colors md:hidden"
        >
          <div className="w-full flex justify-end px-5">
            <Image
              src={arrow}
              alt="arrow"
              className="w-12 bg-white rounded-full p-2"
            />
          </div>
          <span className="text-2xl font-bold pl-5 font-poppins">View all</span>
        </Link>
      </div>

      {/* Tablet "View all" Button */}
      <Link
        href="/universities"
        className="hidden w-max items-center gap-2 px-10 py-3 mt-20 mx-auto font-medium transition-all cursor-pointer rounded-full text-white bg-[#0097FE] hover:bg-blue-600 md:flex lg:hidden active:scale-95 shadow-lg shadow-blue-200"
      >
        View all
      </Link>
    </section>
  );
}
