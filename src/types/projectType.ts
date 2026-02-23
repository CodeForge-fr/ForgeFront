import { StaticImageData } from "next/image";

export interface projectType {
  id: number;
  university: string;
  timeAgo: string;
  logo: string | StaticImageData;
  title: string;
  description: string;
  tags: string[];
  seatsLeft: number;
  deadline: string;
}
