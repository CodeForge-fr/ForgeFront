import Link from "next/link";
import ProjectSlider from "./slider";

const Collaboration = () => {
  return (
    <section className="mt-[40px] md:mt-[115px]">
      <div className="mx-auto md:px-4 max-w-xl md:max-w-4xl lg:max-w-7xl">
        <div className="flex flex-col justify-between lg:flex-row gap-8">
          <h2 className="w-full text-[#333333] text-4xl md:text-5xl md:font-medium font-poppins lg:w-3/5">
            <b className="text-[#0097FE] font-bold">Collaborate</b> and
            <br className="hidden md:block" /> bring ideas to life
          </h2>

          <p className="w-full md:w-[80%] lg:w-[40%] text-[#5E6C6A] font-light lg:text-justify ">
            Join forces with students from across Armenia. Find teammates, share
            resources, and turn your student projects into reality through
            cross-university partnerships.
          </p>
        </div>
        <ProjectSlider />
        <Link
          href="/collaboration"
          className="flex items-center gap-2 mt-8 text-white font-medium hover:bg-blue-500 transition-colors cursor-pointer w-max rounded-full px-15 py-2 m-auto bg-[#0097FE]"
        >
          View all
        </Link>
      </div>
    </section>
  );
};

export default Collaboration;
