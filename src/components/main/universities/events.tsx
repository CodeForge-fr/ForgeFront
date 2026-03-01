import { eventsData } from "@/data/eventsData";
import { EventCard } from "./eventCard";
import Image from "next/image";
import arrow from "../../../../public/icons/arrow.svg";
import arrowTop from "../../../../public/icons/arrowTop.svg";

export default function EventGrid() {
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <EventCard event={eventsData[0]} />

        <div className="flex flex-col gap-y-5">
          <div className="bg-blue-700 py-5 h-[150px] rounded-[32px] flex flex-col justify-between text-white cursor-pointer hover:bg-blue-800 transition-colors">
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
          <EventCard event={eventsData[1]} />
        </div>

        <EventCard event={eventsData[2]} />
      </div>
    </section>
  );
}
