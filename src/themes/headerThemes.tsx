export const themeMap: Record<
  string,
  {
    header?: string;
    text?: string;
    icon?: string;
    nav?: string;
    mobileBg?: string;
  }
> = {
  "/": {
    header: "bg-white/5 rounded-b-2xl",
    text: "text-white",
    icon: "text-white",
    nav: "text-gray-500",
    mobileBg: "bg-black/90",
  },
  "/profile": {
    header: "bg-white md:bg-[#0097FE] static",
    text: "text-[#333333] md:text-white",
    icon: "text-[#333333] md:text-white",
    nav: "text-white",
    mobileBg: "bg-[#0097FE]",
  },
  "/about": {
    header: "bg-white shadow-sm",
    text: "text-[#333333]",
    icon: "text-[#333333]",
    nav: "text-gray-600",
    mobileBg: "bg-[#1E90D6] text-white",
  },
  "/events": {
    header: "bg-black/80",
    text: "text-white",
    icon: "text-white",
    nav: "text-gray-300",
    mobileBg: "bg-black/95",
  },
  "/courses": {
    header:
      "bg-gradient-to-r from-[#4F46E5] to-[#9333EA] shadow-md border-b border-white/10",
    text: "text-white",
    icon: "text-white",
    nav: "text-gray-200",
    mobileBg: "bg-[#4F46E5]",
  },
};
