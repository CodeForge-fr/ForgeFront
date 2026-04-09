import { Course } from "@/types/courseType";
import Image, { StaticImageData } from "next/image";

interface Props extends Course {
  star: string;
  price: number;
  image: string | StaticImageData;
  type: string;
  icon: string | StaticImageData;
  title: string;
  desc: string;
}

export default function CourseCard({
  type,
  icon,
  star,
  price,
  image,
  title,
  desc,
}: Props) {
  return (
    <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
      <Image
        src={image}
        width={286}
        height={192}
        alt={title}
        className="w-full object-cover"
      />

      <div className="p-6">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">{type}</h3>
          <div className="flex items-center gap-x-1">
            <Image src={icon} alt="icon" width={18} height={18} />
            <span className="text-[#EAB308]">{star}</span>
          </div>
        </div>

        <div className="flex flex-col gap-y-2 mt-3">
          <h3 className="text-[#000000] font-semibold text-lg">{title}</h3>
          <p className="text-[#4B5563] text-sm">{desc}</p>
        </div>

        <div className="flex justify-between items-center mt-10">
          <span className="text-[#4F46E5] font-bold text-2xl">${price}</span>
          <button className="bg-[#4F46E5] text-white px-3 py-1 rounded-md">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}
