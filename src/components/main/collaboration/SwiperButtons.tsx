"use client";

import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import leftIcon from "../../../../public/icons/left.svg";
import rightIcon from "../../../../public/icons/right.svg";

interface SwiperButtonsProps {
  swiper: SwiperType | null;
}

export default function SwiperButtons({ swiper }: SwiperButtonsProps) {
  return (
    <div className="flex gap-[10px]">
      <button
        onClick={() => swiper?.slidePrev()}
        className="rounded-3xl bg-[#0097FE] w-[48px] h-[48px] flex justify-center items-center cursor-pointer"
        aria-label="Previous slide"
      >
        <Image
          sizes="100vw"
          src={leftIcon}
          alt="Previous"
          width={24}
          height={24}
        />
      </button>

      <button
        onClick={() => swiper?.slideNext()}
        className="rounded-3xl bg-[#0097FE] w-[48px] h-[48px] flex justify-center items-center cursor-pointer"
        aria-label="Next slide"
      >
        <Image
          sizes="100vw"
          src={rightIcon}
          alt="Next"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
}
