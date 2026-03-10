"use client";

import React, { useState } from "react";
import { eventsData } from "@/data/eventsData";
import { EventCard } from "@/components/main/universities/eventCard";
import EventPagination from "./pagination";
import EventSidebar from "./eventSideBar";

const Events = () => {
  const [events] = useState(eventsData);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(events.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEvents = events.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <section className="px-20 my-10">
      <div className="flex items-start gap-x-10">
        <div className="w-[22%] mt-[308px]">
          <EventSidebar />
        </div>
        <div className="flex-2">
          <div className="flex flex-col items-center text-center gap-y-5">
            <h2 className="w-full text-5xl text-[#333333] font-medium font-poppins">
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
              {currentEvents.map((item) => (
                <EventCard key={item.id} event={item} />
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
