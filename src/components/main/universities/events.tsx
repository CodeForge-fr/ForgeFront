import { EventCard } from "./eventCard";
import Image from "next/image";
import arrow from "../../../../public/icons/arrow.svg";
import arrowTop from "../../../../public/icons/arrowTop.svg";
import Link from "next/link";
// import { fetchEvents } from "@/app/api/eventApi";
import { useEffect, useState } from "react";
import { Event } from "@/types/eventType";

export default function EventGrid() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const getEvents = async () => {
//       try {
//         const data = await fetchEvents();
//         setEvents(data);
//       } catch (error) {
//         console.error("Failed to fetch events:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getEvents();
//   }, []);

  return (
    <section className="w-full mx-auto mt-[100px]">
      <div className="flex gap-6 mb-8 text-gray-600 font-medium">
        <div className="flex items-center gap-1 cursor-pointer">
          Universities
          <Image sizes="100vw" src={arrowTop} alt="arrow-top" />
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          Category
          <Image sizes="100vw" src={arrowTop} alt="arrow-top" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {events.slice(0, 1).map((item) => (
          <EventCard key={item.id} event={item} />
        ))}
        {/* <EventCard event={eventsData[0]} /> */}

        <div className="flex flex-col gap-y-5">
          <div className="hidden  py-5 h-[150px] flex flex-col justify-between rounded-[32px] text-white bg-[#0097FE] cursor-pointer hover:bg-blue-500 transition-colors md:hidden lg:flex">
            <div className="w-full flex justify-end px-5">
              <Image
                src={arrow}
                alt="arrow"
                className="w-12 bg-white rounded-full"
              />
            </div>
            <span className="text-2xl font-bold pl-5 fnt-poppins">
              View all
            </span>
          </div>
          {events.slice(1, 2).map((item) => (
            <EventCard key={item.id} event={item} />
          ))}
        </div>
        {events.slice(2, 3).map((item) => (
          <EventCard key={item.id} event={item} className="md:hidden lg:flex" />
        ))}
        <div className="flex bg-[#0097FE] py-5 h-[150px] rounded-[32px] flex flex-col justify-between text-white cursor-pointer hover:bg-blue-500 transition-colors md:hidden">
          <div className="w-full flex justify-end px-5">
            <Image
              src={arrow}
              alt="arrow"
              className="w-12 bg-white rounded-full"
            />
          </div>
          <span className="text-2xl font-bold pl-5 fnt-poppins">View all</span>
        </div>
      </div>
      <Link
        href="/universities"
        className="hidden w-max items-center gap-2 px-15 py-2 mt-20 mx-auto font-medium transition-colors cursor-pointer rounded-full  text-white bg-[#0097FE] hover:bg-blue-500 md:flex lg:hidden"
      >
        View all
      </Link>
    </section>
  );
}
