import EventGrid from "./events";

const University = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start gap-y-5 lg:flex-row lg:justify-between lg:items-center">
          <h2 className="w-full lg:w-3/5 text-5xl text-[#333333] font-medium font-poppins">
            <b className="text-[#2D3DD1FF] font-bold">Active</b> Initiatives{" "}
            <br />
            and Projects
          </h2>
          <p className=" w-full mt-10 text-[#5E6C6A] font-light gap-3 rounded-xl md:w-[65%] lg:w-[43%]">
            Discover top-tier events across all Armenian universities in one
            unified feed. Join hackathons, academic debates, and cultural
            activities designed to foster collaboration and empower the national
            student community.
          </p>
        </div>
        <EventGrid />
      </div>
    </section>
  );
};

export default University;
