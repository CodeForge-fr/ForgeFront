import convidence from "../../public/images/convidence.jpg";
import career from "../../public/images/career.png";
import summit from "../../public/images/summit.jpg";
import aua from "../../public/icons/convidenceIcon.png";
import asue from "../../public/icons/careerIcon.png";
import summitIcon from "../../public/icons/summitIcon.png";

export const eventsData = [
  {
    id: 1,
    title: "Inter-University Science Forum 2024",
    description:
      "Discussing the perspectives of educational digitalization and the role of AI in modern Armenian universities.",
    daysLeft: "3 days left",
    image: convidence,
    logo: aua,
    type: "large",
  },
  {
    id: 2,
    title: "Professional Masterclass Series",
    description:
      "Top industry experts share practical skills to help students bridge the gap between graduation and career start.",
    daysLeft: "5 days left",
    image: career,
    logo: asue,
    type: "small",
  },
  {
    id: 3,
    title: "National Student Hiking Summit",
    description:
      "Join students from all over Armenia to explore our hidden landscapes, build new networks, and enjoy the great outdoors.",
    daysLeft: "6 days left",
    image: summit,
    logo: summitIcon,
    type: "large",
  },
];
