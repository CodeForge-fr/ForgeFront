import { useEffect, useState } from "react";
import { Search, SlidersHorizontal, MapPin } from "lucide-react";
import PaginationDots from "../Pagination";

interface HomeSection1Props {
  title?: string;
  description?: string;
}
export default function HomeSection1({}: HomeSection1Props) {
  const [loaded, setLoaded] = useState(false);
  const [query, setQuery] = useState("");

  const [activeTab, setActiveTab] = useState(0);
  const totalSlides = 5;

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="main-div"
      className="relative min-h-screen flex items-center justify-center bg-[url('/images/home_section1.png')] bg-cover bg-center bg-no-repeat"
    >
      <div />

      {/* Content */}

      <div
        className={`relative  flex-col items-center z-10 text-center px-[18px] transition-all  ease-out ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="w-[1440px] gap-[32px] flex justify-center ">
          <div className="w-[949px] relative group">
            {/* Search Icon  */}
            <div className="absolute flex items-center left-4 top-3.5 z-5">
              <Search className="w-[18px] h-[18px] text-white group-focus-within:text-blue-400 transition-colors" />
            </div>

            {/* Input Field */}
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className="w-full bg-[#1a1a2e]/50 backdrop-blur-md text-white border border-white rounded-full py-3 px-12 outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 placeholder:text-white"
            />

            {/* Filter Icon */}
            <button
              className={
                "absolute inset-y-0 right-4 flex items-center text-white \r\n             ..."
              }
              onClick={() => console.log("Filter clicked")}
            >
              <SlidersHorizontal className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="w-[1440px] h-[275px]  gap-[40px]">
          <p className="text-white text-6xl text-[64px] font-medium font-['Poppins']">
            OCTOBER 26, 2026
          </p>

          <h1 className="text-white text-6xl text-[100px] font-bold mb-2 font-['Poppins']">
            CINEMA MEDLEY
          </h1>

          <p className="text-white text-[30px] font-normal italic font-['Poppins']">
            BY IMPERIAL ORCHESTRA
          </p>

          <p className="text-white text-[30px]  font-semibold font-['Poppins']">
            SYMPHONIC SOUNDTRACK SHOW
          </p>
        </div>

        <div className="flex items-center justify-center  text-white text-[40px] font-['Poppins'] font-medium tracking-widest mb-12">
          <MapPin className="h-10 w-10" />
          <p>YEREVAN</p>
        </div>

        <div className="flex gap-[23px] justify-center flex-wrap">
          <button className="w-[170px] border border-white text-white rounded-[24px] px-[24px] py-[10px] hover:bg-white/30 ">
            View Details
          </button>
          <button className="w-[170px] bg-[#1170FF] border border-white text-white rounded-[24px] px-[24px] py-[10px]uppercase  font-semibold hover:bg-blue-700 ">
            Book Now
          </button>
        </div>
        {/* Pagination Dots */}
        <PaginationDots
          total={totalSlides}
          current={activeTab}
          onChange={setActiveTab}
        />
      </div>
    </div>
  );
}
