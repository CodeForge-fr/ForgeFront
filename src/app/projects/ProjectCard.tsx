import Image from "next/image";

interface Project {
    club: string;
    logo: string;
    time: string;
    title: string;
    description: string;
    roles: string[];
    seats: number;
    deadline: string;
}

export default function ProjectCard({ club, logo, time, title, description, roles, seats, deadline }: Project) {
    return (
        <div className="bg-white rounded-2xl shadow-[0_2px_16px_0_rgba(0,0,0,0.6)] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-2 pt-2">
                <div className="flex items-center">
                    <div className="w-14 h-14 rounded-full shrink-0 overflow-hidden flex items-center justify-center">
                        <Image src={logo} alt={`${club} logo`} width={56} height={56} className="w-full h-full object-cover" />
                    </div>
                    <span className="font-semibold text-[12px] max-w-[55%] text-gray-900 tracking-tight leading-snug">
                        {club}
                    </span>
                </div>
                <span className="text-[11.5px] text-gray-400 shrink-0 ml-2 mr-2">{time}</span>
            </div>

            {/* Body */}
            <div className="px-4 pt-2.5 flex-1">
                <h2 className="font-semibold text-[1.16rem] max-w-[65%] text-gray-900 leading-[1.3] tracking-tight">
                    {title}
                </h2>
                <p className="mt-4 text-[0.7rem] text-gray-500 leading-[1.4]">{description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-5.5">
                    {roles.map((role) => (
                        <span
                            key={role}
                            className="inline-flex items-center px-1.5 py-1 rounded-md text-[0.7rem] font-thin bg-[#0097FE] text-white transition-colors duration-150 hover:bg-[#1578d6] cursor-default"
                        >
                            {role}
                        </span>
                    ))}
                </div>
            </div>

            {/* Divider */}
            <div className="mx-4.5 border-t mt-2 border-gray-500" />

            {/* Status */}
            <div className="px-5 pt-3 pb-0">
                <span className="text-xs text-gray-600">
                    Status: <span className="text-gray-900">{seats} seats left</span>
                </span>
            </div>

            {/* CTA */}
            <div className="px-4 pt-4 pb-5">
                <button className="w-full bg-[#0097FE] text-white text-xs py-2 rounded-full tracking-wide transition-all duration-150 hover:bg-[#1578d6] hover:shadow-[0_6px_24px_rgba(26,107,245,0.35)] hover:-translate-y-px active:translate-y-0">
                    Join Project
                </button>
                <p className="mt-3 text-xs text-gray-500">
                    Deadline: <span className="font-medium">{deadline}</span>
                </p>
            </div>
        </div>
    );
}