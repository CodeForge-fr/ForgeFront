import { eventType } from "@/types/eventType";
import Image from "next/image";

interface IEventCard {
  event: eventType;
}

export const EventCard = ({ event }: IEventCard) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden group">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute top-6 left-6">
          <div
            className={`h-12 ${event.logo === "AUA" ? "w-20" : "w-30"}`}
          >
            <Image
              src={event.logo}
              alt="University Logo"
              className="object-contain object-left brightness-0 invert"
            />
          </div>
        </div>

        <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-sm font-semibold text-gray-800 rounded-2xl">
          {event.daysLeft}
        </div>
      </div>

      <div className="flex flex-col gap-y-5">
        <h3 className="w-3/4 text-3xl font-bold text-[#333333] leading-tight">
          {event.title}
        </h3>
        <p className="text-gray-600 text-md leading-relaxed w-[90%]">
          {event.description}
        </p>
      </div>
    </div>
  );
};
