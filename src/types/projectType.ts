import { StaticImageData } from "next/image";

export interface ProjectContextType {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  activeModal: string | null;
  setActiveModal: (modal: string | null) => void;
  onClose: () => void;
}

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
