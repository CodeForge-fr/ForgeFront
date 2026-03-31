"use client";

import { ChangeEvent, ReactNode, useState } from "react";
import { ProfileContext } from "@/context/ProfileContext";
import {
  saveProfile,
  postProfile,
  getSavedProfiles,
} from "@/app/api/profileApi";
import { IEducation } from "@/types/educationType";
import { useAuth } from "@/context/AuthContext";
import { profileType } from "@/types/profileType";

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [education, setEducation] = useState<IEducation[]>([]);
  const [skills, setSkills] = useState<{ id: number; skill: string }[]>([]);
  const [skillInput, setSkillInput] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const onClose = () => setActiveModal(null);

  const fetchEducation = async () => {
    if (!user?.id) return;
    const response = await getSavedProfiles(Number(user.id));
    setEducation(response);
    if (response?.skill) {
      const mapped = response.skill.map((s: string, i: number) => ({
        id: i,
        skill: s,
      }));
      setSkills(mapped);
    }
  };

  const handleSaveEducation = async (data: IEducation) => {
    if (!user?.id) {
      console.error("User not found");
      return;
    }
    try {
      const response = await saveProfile(Number(user.id), data);
      if (response) {
        setEducation((prev) => [...prev, response]);
      } else {
        setEducation((prev) => [...prev, data]);
      }
      onClose();
    } catch (error) {
      console.error("Failed to save education:", error);
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
    }
  };

  const handleCreateSkill = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.id || !skillInput.trim()) return;

    const newSkillName = skillInput.trim();
    const fullProfilePayload: profileType = {
      userId: user.id,
      gender: "Male",
      dateOfBirth: "1998-05-12",
      education: education.map((edu) => ({
        institution: edu.institution,
        degree: edu.degree,
      })),
      skill: [newSkillName],
      phone: "+1234567890",
      email: user.email || "john@example.com",
      address: "123 Main St",
      nickname: "johndoe",
    };

    try {
      const response = await postProfile(fullProfilePayload);
      if (response) {
        setSkills((prev) => [
          ...prev,
          { id: Date.now() + Math.random(), skill: newSkillName },
        ]);
        setSkillInput("");
        setActiveModal(null);
      }
    } catch (error) {
      console.error("Failed to create skill:", error);
      alert("Failed to add skill. Check console for details.");
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        loading,
        setLoading,
        activeModal,
        setActiveModal,
        onClose,
        education,
        setEducation,
        skills,
        setSkills,
        skillInput,
        setSkillInput,
        selectedFile,
        setSelectedFile,
        previewUrl,
        setPreviewUrl,
        fetchEducation,
        handleSaveEducation,
        handleFileChange,
        handleCreateSkill,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
