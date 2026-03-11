"use client";

import React, { useEffect, useState } from "react";
import { EventCard } from "@/components/main/universities/eventCard";
import EventPagination from "./pagination";
import EventSidebar from "./eventSideBar";
import { fetchEvents } from "@/app/api/eventApi";
import { Event } from "@/types/eventType";

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const data = await fetchEvents();
        setEvents(data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setLoading(false);
      }
    };

    getEvents();
  }, []);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(events.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEvents = events.slice(indexOfFirstItem, indexOfLastItem);
  console.log("Current Events:", currentEvents);

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  if (loading)
    return <div className="text-center py-20">Loading Events...</div>;

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
