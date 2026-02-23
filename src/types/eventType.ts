import { StaticImageData } from "next/image";

export interface eventType {
  id: number;
  title: string;
  description: string;
  daysLeft: string;
  image: string | StaticImageData;
  logo: string | StaticImageData;
  type: string;
}
