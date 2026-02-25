"use client";

export default function Footer() {
  return (
    <footer className=" bg-[#2346D9] text-white ">
      <div className="w-max-[1280px] h-[580px] mx-[77px] flex justify-between px-20 ">
        {/* Left Section */}
        <div className=" w-[640px]">
          <div className="h-[260px] flex items-center">
            <h2 className="text-[60px] font-['Poppins'] font-bold">
              Uni<span className="font-['Poppins'] font-normal">Link</span>
            </h2>
          </div>
          <div className="h-[160px]">
            <p className="text-[18px] font-['Poppins'] font-semibold">
              Stay updated with the latest cross-university events
            </p>
            <form className="flex items-center mb-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-[540px] placeholder-white border-b border-white"
              />
              <button
                type="submit"
                className="w-[21.67px] h-[23.6px] text-white  border-none"
              >
                →
              </button>
            </form>
          </div>
          <a
            href="https://www.unilink.com"
            className="text-white gap-[10px] font-['Poppins']"
          >
            www.unilink.com
          </a>
        </div>

        {/* Right Section */}
        <div className="w-[640px] text-[42px]">
          <div className="h-[280px] flex items-center">
            <h3 className="font-['Poppins'] font-medium ">
              Connecting students, universities, and opportunities
            </h3>
          </div>
          <div className="flex flex-wrap justify-between min-w-[540px] h-[300px]">
            <div className="min-w-[120px]  gap-[20px] ">
              <div className="h-[144px] ">
                <h4 className=" text-[18px] font-['Poppins'] font-semi-bold">
                  Menu
                </h4>
                <ul className="list-none p-0 m-0 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-white my-[10px] no-underline hover:underline font-['Poppins']"
                    >
                      Universities
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white my-[10px] no-underline hover:underline font-['Poppins']"
                    >
                      Events
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white my-[10px] no-underline hover:underline font-['Poppins']"
                    >
                      Organizations
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white my-[10px] no-underline hover:underline font-['Poppins']"
                    >
                      Opportunities
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* ------------------ */}
            <div className="min-w-[120px]  gap-[20px]">
              <div className="h-[144px]">
                <h4 className="text-[18px] font-['Poppins'] font-semi-bold">
                  Support
                </h4>
                <ul className="list-none p-0 m-0 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-white my-[10px] no-underline hover:underline font-['Poppins']"
                    >
                      How it works
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white my-[10px] no-underline hover:underline font-['Poppins']"
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white my-[10px] no-underline hover:underline font-['Poppins']"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white my-[10px] no-underline hover:underline font-['Poppins']"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="min-w-[120px]  gap-[20px]">
              <div className="h-[144px]">
                <h4 className=" text-[18px] font-['Poppins'] font-semi-bold">
                  Say Hello
                </h4>
                <ul className="list-none p-0 m-0 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-white my-[10px] no-underline hover:underline font-['Poppins']"
                    >
                      info@UniLink.am
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex-col">
          <div className="border-t border-white mx-[35px]"></div>
          <div className="w-[1280px] h-[80px] flex items-center text-white font-['Poppins'] px-[35px]">
            <span className="text-gray-700">©</span> 2026 UniLink Platform. All
            rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
