"use client";

import { ReactNode, useState, useEffect, useCallback } from "react";
import { EventContext } from "@/context/EventContext";
import { fetchEvents } from "@/app/api/eventApi";
import { Event } from "@/types/eventType";

export const EventProvider = ({ children }: { children: ReactNode }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const pageSize = 9;

  const onClose = () => setActiveModal(null);

  const getEvents = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchEvents({
        page: currentPage,
        pageSize,
      });
      setEvents(data);

      if (data.length === pageSize) {
        setTotalItems(currentPage * pageSize + 1);
      } else {
        setTotalItems(currentPage * pageSize - (pageSize - data.length));
      }
    } catch (error) {
      console.error("Failed to fetch events:", error);
    } finally {
      setLoading(false);
    }
  }, [currentPage]);

  useEffect(() => {
    getEvents();
  }, [getEvents]);

  const totalPages = Math.ceil(totalItems / pageSize);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <EventContext.Provider
      value={{
        events,
        setEvents,
        loading,
        setLoading,
        activeModal,
        setActiveModal,
        onClose,
        currentPage,
        setCurrentPage,
        totalPages,
        pageNumbers,
        refreshEvents: getEvents,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
