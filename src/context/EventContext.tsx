import { createContext, useContext } from "react";
import { EventContextType } from "@/types/eventType";

export const EventContext = createContext<EventContextType | null>(null);

export const useEvent = () => {
  const context = useContext(EventContext);
  if (!context)
    throw new Error("useEvent must be used inside EventProvider");
  return context;
};
