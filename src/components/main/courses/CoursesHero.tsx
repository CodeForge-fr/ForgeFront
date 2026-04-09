import Image from "next/image";
import searchIcon from "../../../../public/icons/search.svg";

export default function CoursesHero() {
  return (
    <div className="bg-gradient-to-r from-[#4F46E5] to-[#9333EA] text-white h-[465px]">
      <div className="w-full max-w-3xl mx-auto text-center flex flex-col gap-y-7 justify-center pt-[192px]">
        <h1 className="text-5xl font-bold">Discover Amazing Courses</h1>

        <p className="px-8 w-full text-xl">
          Learn from industry experts and advance your career with our
          comprehensive online courses
        </p>

        <div className="flex gap-x-4 w-[85%] mx-auto">

          <div className="relative w-full">
            {/* Icon */}
            <span className="absolute left-4 top-1/2 -translate-y-1/2">
              <Image src={searchIcon} alt="Search" width={18} height={18} />
            </span>

            {/* Input */}
            <div className="flex items-center bg-white rounded-md shadow-md px-2 py-2 w-full h-12">
              <input
                type="text"
                placeholder="Search courses..."
                className="px-8 py-2 outline-none text-gray-700 bg-transparent"
              />
            </div>
          </div>
          
          {/* Button */}
          <button className="bg-white border-[#E5E7EB] text-[#4F46E5] px-6 py-2 rounded-md h-12">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
