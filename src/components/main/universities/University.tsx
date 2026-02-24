import EventGrid from "./events";

const University = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="w-3/5 text-5xl text-[#333333] font-medium font-poppins">
            <b className="text-[#2D3DD1FF] font-bold">Active</b> Initiatives{" "}
            <br />
            and Projects
          </h2>
          <p className="w-[43%] text-[#5E6C6A] font-light gap-3 rounded-xl">
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
