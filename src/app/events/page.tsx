"use client";

import React from "react";
import { EventCard } from "@/components/main/universities/eventCard";
import EventPagination from "./pagination";
import EventSidebar from "./eventSideBar";
import { useEvent } from "@/context/EventContext";

const Events = () => {
  const {
    events,
    loading,
    currentPage,
    setCurrentPage,
    totalPages,
    pageNumbers,
  } = useEvent();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <span className="ml-4 text-gray-600">{loading}</span>
      </div>
    );
  }
  return (
    <section className="px-20 my-10">
      <div className="flex items-start gap-x-10">
        <div className="w-[22%] mt-[308px]">
          <EventSidebar />
        </div>
        <div className="flex-2">
          <div className="flex flex-col items-center text-center gap-y-5">
            <h2 className="w-full text-4xl md:text-5xl text-[#333333] font-medium ">
              <b className="text-[#2D3DD1FF] font-bold">Active</b> Initiatives{" "}
              <br />
              and Projects
            </h2>
            <p className="w-[70%] mt-10 text-[#5E6C6A] font-light gap-3 rounded-xl">
              Discover top-tier events across all Armenian universities in one
              unified feed. Join hackathons, academic debates, and cultural
              activities designed to foster collaboration and empower the
              national student community.
            </p>
          </div>

          {/* EVENTS GRID */}
          {
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
              {events.map((item) => (
                <EventCard
                  key={item.id}
                  event={{
                    ...item,
                    name: item.name,
                    daysLeft: item.daysLeft || "Upcoming",
                  }}
                />
              ))}
            </div>
          }

          {/* PAGINATION */}

          <EventPagination
            currentPage={currentPage}
            totalPages={totalPages}
            pageNumbers={pageNumbers}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
};

export default Events;
