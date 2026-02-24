import React from 'react';
import Image from 'next/image';
import arrow from '../../../../public/icons/arrow.svg';

interface EventCardProps {
  event: {
    title: string;
    description: string;
  };
}

export const EventCard = ({ event }: EventCardProps) => {
  return (
    <div className="bg-white rounded-[32px] p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer group border border-gray-100 mb-6">
      <div className="flex justify-end mb-4">
        <div className="w-12 h-12 bg-[#2D3DD1] rounded-full flex items-center justify-center group-hover:bg-[#1a2ab0] transition-colors">
          <Image src={arrow} alt="arrow" className="w-6 h-6 filter brightness-0 invert" />
        </div>
      </div>
      <h3 className="text-2xl font-bold text-[#333333] mb-2">{event.title}</h3>
      <p className="text-[#5E6C6A]">{event.description}</p>
    </div>
  );
};