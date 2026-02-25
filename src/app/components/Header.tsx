"use client";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// interface University {
//   name: string;
//   country: string;
// }

interface Event {
  id: number;
  name: string;
  date: string;
}

interface Partner {
  id: number;
  name: string;
}

interface Language {
  id: number;
  code: string;
  language: string;
}

interface HeaderI {
  className?: string;
}

export default function Header({ className }: HeaderI) {
  //   const [isDropdownOpenU, setIsDropdownOpenU] = useState(false);

  const [isDropdownOpenE, setIsDropdownOpenE] = useState(false);
  const [isDropdownOpenPr, setIsDropdownOpenPr] = useState(false);
  const [isDropdownOpenL, setIsDropdownOpenL] = useState(false);
  const [isDropdownOpenP, setIsDropdownOpenP] = useState(false);
  //   const [universities, setUniversities] = useState<University[]>([]);
  const [partners, setPartners] = useState<Partner[]>([]);

  const [events, setEvents] = useState<Event[]>([]);

  const [languages, setLanguages] = useState<Language[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState("En");

  //   useEffect(() => {
  //     if (isDropdownOpenU && universities.length === 0) {
  //       fetch("/api/universities")
  //         .then((res) => res.json())
  //         .then((data) => {
  //           // Handle both array and object responses
  //           const universitiesList = Array.isArray(data) ? data : data.data || [];
  //           const limitedData = universitiesList.slice(0, 10).map((uni: any) => ({
  //             name: uni.name || uni.universityName || "Unknown",
  //             country: uni.country || "",
  //           }));
  //           setUniversities(limitedData);
  //         })
  //         .catch((error) => {
  //           console.error("Error fetching universities:", error);
  //         });
  //     }
  //   }, [isDropdownOpenU, universities.length]);

  useEffect(() => {
    if (isDropdownOpenE && events.length === 0) {
      const sampleEvents = [
        { id: 1, name: "Educational events", date: "October 26, 2026" },
        { id: 2, name: "IT events", date: "October 26, 2026" },
        { id: 3, name: "Sport events", date: "October 26, 2026" },
        { id: 4, name: "Other events", date: "October 26, 2026" },
      ];
      setEvents(sampleEvents);
    }
  }, [isDropdownOpenE, events.length]);

  useEffect(() => {
    const sampleLanguages = [
      { id: 1, code: "en", language: "English" },
      { id: 2, code: "hy", language: "Հայերեն" },
    ];
    setLanguages(sampleLanguages);
  }, []);

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language.code.toUpperCase());
    setIsDropdownOpenL(false);
  };

  return (
    <header style={{ height: "100px" }} className={className}>
      <nav className=" mx-[77px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex">
          <h1 className="text-[32px] font-bold ">
            <span className="text-[#0066FF] font-['Poppins']">Uni</span>Link
          </h1>
        </div>

        {/* ************************************** */}

        <div className="flex w-[601px] gap-[25px] justify-center ml-[190px]">
          <div className="relative group">
            <button
              onClick={() => setIsDropdownOpenE(!isDropdownOpenE)}
              className="flex items-center text-[15px] font-['Poppins'] hover:text-gray-300 px-[10px]"
            >
              Events{" "}
              {isDropdownOpenE ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
            {isDropdownOpenE && (
              <div className="absolute left-0 mt-3 w-[163px] bg-[#222222] rounded-[25px] p-[5px] gap-[10px] scale-125 shadow-[0_0_8px_rgba(255,255,255,0.8)] z-10 transition-all">
                <div className="flex flex-col gap-4">
                  {events.map((event) => (
                    <a
                      key={event.id}
                      href="#"
                      onClick={() => setIsDropdownOpenE(false)}
                      className="text-white text-[16px] font-light hover:text-gray-400 transition-colors font-['Poppins']"
                    >
                      {event.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="relative group">
            <button
              onClick={() => setIsDropdownOpenPr(!isDropdownOpenPr)}
              className="flex items-center text-[15px] font-['Poppins'] hover:text-gray-300 px-[10px]"
            >
              Projects{" "}
              {isDropdownOpenPr ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
            {isDropdownOpenPr && (
              <div className="absolute left-0 mt-3 w-[163px] bg-[#222222] font-['Poppins'] rounded-[25px] p-[5px] gap-[10px] scale-125 shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">
                <div className="flex flex-col gap-4">
                  {events.map((project) => (
                    <a
                      key={project.id}
                      href="#"
                      onClick={() => setIsDropdownOpenPr(false)}
                      className="text-white text-[16px] font-light hover:text-gray-400 transition-colors font-['Poppins']"
                    >
                      {project.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* <div className="flex justify-between space-x-40"> */}
          {/* Navigation Links */}
          <div className="hidden md:flex items-center ">
            <div className="relative group">
              <button
                onClick={() => setIsDropdownOpenP(!isDropdownOpenP)}
                className="flex items-center text-[15px] font-['Poppins'] hover:text-gray-300 px-[10px]"
              >
                Partners{" "}
                {isDropdownOpenP ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              {isDropdownOpenP && (
                <div className="absolute left-0 mt-3 w-[163px] bg-[#222222] rounded-[25px] p-[5px] gap-[10px] scale-125 shadow-[0_0_8px_rgba(255,255,255,0.8)] z-10 transition-all">
                  <div className="flex flex-col gap-4">
                    {events.map((partner) => (
                      <a
                        key={partner.id}
                        href="#"
                        onClick={() => setIsDropdownOpenP(false)}
                        className="text-white text-[16px] font-light hover:text-gray-400 transition-colors font-['Poppins']"
                      >
                        {partner.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="#organizations"
              className="text-[15px] font-['Poppins'] hover:text-gray-300 px-[10px] mx-[25px]"
            >
              Contact Us
            </Link>

            <Link
              href="#opportunities"
              className="text-[15px] font-['Poppins'] hover:text-gray-300 px-[10px]"
            >
              About Us
            </Link>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* <button className="text-lg hover:text-gray-400">
            <FontAwesomeIcon icon={faSearch} />
          </button> */}

          <div className="relative">
            <button
              onClick={() => setIsDropdownOpenL(!isDropdownOpenL)}
              className="w-[50px] h-[48px] text-[15px] font-medium  uppercase hover:text-gray-300"
            >
              {selectedLanguage}
            </button>
            {isDropdownOpenL && (
              <div className="w-[198px] h-[48px] absolute gap-[10px]  rounded-[24px] px-[24px] py-[10px] ">
                <ul>
                  {languages.map((lang) => (
                    <li key={lang.code}>
                      <button
                        onClick={() => handleLanguageSelect(lang)}
                        className="w-full font-['Poppins'] text-left px-4 py-2 text-sm hover:bg-gray-700 transition-colors"
                      >
                        <span className="font-['Poppins']">
                          {lang.language}
                        </span>
                        {selectedLanguage === lang.code.toUpperCase() && (
                          <span className="ml-2 text-[#0066FF]">✓</span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <button className="bg-[#0066FF] font-['Poppins'] hover:bg-blue-700 px-6 py-2.5 rounded-full text-[15px] font-medium transition-colors duration-200 whitespace-nowrap">
            Join the platform
          </button>
        </div>
      </nav>
    </header>
  );
}
