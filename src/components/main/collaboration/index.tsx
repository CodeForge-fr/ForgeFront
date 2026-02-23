import ProjectSlider from "./slider";

const Collaboration = () => {
  return (
    <section className="mt-[115px] mb-[95px]">
      <div className="flex justify-between">
        <h2 className="w-3/5 text-5xl text-[#333333] font-semibold font-poppins">
          <b className="text-[#2D3DD1FF]">Collaborate</b> and
          <br /> bring ideas to life
        </h2>

        <p className="w-[40%] text-[#5E6C6A] font-light text-justify font-poppins">
          Join forces with students from across Armenia. Find teammates, share
          resources, and turn your student projects into reality through
          cross-university partnerships.
        </p>
      </div>

      <ProjectSlider />
    </section>
  );
};

export default Collaboration;
