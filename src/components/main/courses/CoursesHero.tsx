import Image from "next/image";
import searchIcon from "../../../../public/icons/search.svg";

export default function CoursesHero() {
    return (
        <div className="bg-gradient-to-r from-[#4F46E5] to-[#9333EA] text-white flex items-center justify-center h-[400px]">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-4">
                    Discover Amazing Courses
                </h1>

                <p className="mb-6">
                    Learn from industry experts and advance your career with our comprehensive
                    online courses
                </p>

                <div className="flex justify-center mt-6">
                    <div className="relative w-full max-w-l">

                        {/* Icon */}
                        <span className="absolute left-4 top-1/2 -translate-y-1/2">
                            <Image
                                src={searchIcon}
                                alt="Search"
                                width={18}
                                height={18}
                            />
                        </span>

                        {/* Input */}
                        <div className="flex items-center bg-white rounded-md shadow-md px-2 py-2 w-full max-w-xl h-12">

                            <input
                                type="text"
                                placeholder="Search courses..."
                                className="flex-1 px-8 py-2 outline-none text-gray-700 bg-transparent"
                            />
                        </div>

                        {/* Button */}
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border-[#E5E7EB] text-[#4F46E5] px-6 py-2 rounded-md text-sm h-12">
                            Search
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}