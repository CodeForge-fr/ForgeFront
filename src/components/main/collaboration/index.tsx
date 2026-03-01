import ProjectSlider from "./slider";

const Collaboration = () => {
  return (
    <section className="mt-[115px] mb-[95px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col justify-between lg:flex-row gap-8">
          <h2 className="w-full lg:w-3/5 text-3xl md:text-5xl text-[#333333] font-medium font-poppins">
            <b className="text-[#2D3DD1FF] font-bold">Collaborate</b> and
            <br className="hidden md:block" /> bring ideas to life
          </h2>

          <p className="w-[40%] text-[#5E6C6A] font-light lg:text-justify font-poppins">
            Join forces with students from across Armenia. Find teammates, share
            resources, and turn your student projects into reality through
            cross-university partnerships.
          </p>
        </div>
        <ProjectSlider />
      </div>
    </section>
  );
};

export default Collaboration;
