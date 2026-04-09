import Image from "next/image";
import prevIcon from "../../../../public/icons/prevIcon.svg";
import nextIcon from "../../../../public/icons/nextIcon.svg";

export default function CoursesPagination() {
  return (
    <div className="flex justify-start p-10 gap-2">
      <Image src={prevIcon} alt="Previous" width={20} height={20} />
      <button className="w-10 h-10 border rounded-full bg-gray-300 border-none">01</button>
      <button className="w-10 h-10 border rounded-full bg-gray-300 border-none">02</button>
      <button className="w-10 h-10 border rounded-full bg-gray-300 border-none">03</button>
      <Image src={nextIcon} alt="Next" width={20} height={20} />
    </div>
  );
}