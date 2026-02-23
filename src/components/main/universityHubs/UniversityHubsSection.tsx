import Image from "next/image";

const universities = [
  { src: "/universities/other1.png", alt: "University" },
  { src: "/images/YSU.png", alt: "YSU" },
  { src: "/universities/asue.png", alt: "ASUE" },
  { src: "/images/NUACA.png", alt: "NUACA" },
  { src: "/universities/ysu.png", alt: "University" },
  { src: "/images/AUA.png", alt: "AUA" },
  { src: "/universities/nuaca.png", alt: "University" },
];

const UniversityHubsSection = () => {
  return (
    <section className="bg-[#F5F5F7] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Content */}
        <div className="flex justify-between items-start mb-20">
          <h2 className="text-5xl font-semibold font-poppins text-[#333] w-1/2 leading-tight">
            <span className="text-[#2D3DD1]">University</span> Hubs
          </h2>

          <p className="text-[#5E6C6A] w-2/5 font-light leading-relaxed">
            Discover top-tier events across all Armenian universities in one
            unified feed. Join hackathons, academic debates, and cultural
            activities designed to foster collaboration and empower the
            national student community.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="flex flex-col items-center gap-16">
          {/* Top Row - 4 logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-20 place-items-center w-full">
            {universities.slice(0, 4).map((uni, index) => (
              <Image
                key={index}
                src={uni.src}
                alt={uni.alt}
                width={150}
                height={150}
                className="object-contain"
              />
            ))}
          </div>

          {/* Bottom Row - 3 logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-24 place-items-center w-4/5">
            {universities.slice(4).map((uni, index) => (
              <Image
                key={index}
                src={uni.src}
                alt={uni.alt}
                width={170}
                height={170}
                className="object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversityHubsSection;