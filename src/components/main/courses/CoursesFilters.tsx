import Image from "next/image";
import arrowTop from "../../../../public/icons/arrowTop.svg";

export default function CoursesFilters() {
    return (
        <div className="flex flex-wrap gap-4 mb-6 bg-white px-8 py-10">

            <div className="relative">
                <select className="appearance-none border px-3 py-2 pr-8 rounded-md">
                    <option>All Categories</option>
                </select>

                <span className="absolute right-[5px] top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    <Image
                        src={arrowTop}
                        alt="Arrowtop"
                    />
                </span>
            </div>

            <div className="relative">
                <select className="appearance-none border px-3 py-2 pr-8 rounded-md">
                    <option>All Levels</option>
                </select>

                <span className="absolute right-[5px] top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    <Image
                        src={arrowTop}
                        alt="Arrowtop"
                    />
                </span>
            </div>

            <div className="relative">
                <select className="appearance-none border px-3 py-2 pr-8 rounded-md">
                    <option>Sort by</option>
                </select>

                <span className="absolute right-[5px] top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    <Image
                        src={arrowTop}
                        alt="Arrowtop"
                    />
                </span>
            </div>

        </div>
    );
}