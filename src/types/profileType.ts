import { ChangeEvent } from "react";
import { IEducation } from "./educationType";

export interface ProfileContextType {
  // UI state
  loading: boolean;
  setLoading: (loading: boolean) => void;
  activeModal: string | null;
  setActiveModal: (modal: string | null) => void;
  onClose: () => void;

  // Education
  education: IEducation[];
  setEducation: React.Dispatch<React.SetStateAction<IEducation[]>>;
  fetchEducation: () => Promise<void>;
  handleSaveEducation: (data: IEducation) => Promise<void>;

  // Skills
  skills: { id: number; skill: string }[];
  setSkills: React.Dispatch<
    React.SetStateAction<{ id: number; skill: string }[]>
  >;
  skillInput: string;
  setSkillInput: (input: string) => void;
  handleCreateSkill: (e: React.FormEvent) => Promise<void>;

  // File / Avatar
  selectedFile: File | null;
  setSelectedFile: (file: File | null) => void;
  previewUrl: string | null;
  setPreviewUrl: (url: string | null) => void;
  handleFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface profileType {
  userId: number;
  gender: string;
  dateOfBirth: string;
  education: {
    institution?: string;
    degree?: string;
  }[];
  skill: string[];
  phone: string;
  email: string;
  address: string;
  nickname: string;
}
