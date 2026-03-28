import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { Camera } from "lucide-react";
import Image from "next/image";
import { IoPerson } from "react-icons/io5";
import EducationModal from "./createEducation";
import { useModal } from "@/context/useModalContext";
import { IEducation, profileType } from "@/types/educationType";
import { useAuth } from "@/context/AuthContext";
import {
  getSavedProfiles,
  postProfile,
  saveProfile,
} from "@/app/api/profileApi";

interface AboutProfileProps {
  previewUrl: string | null;
  setSelectedFile: (file: File | null) => void;
  setPreviewUrl: (url: string | null) => void;
}

const AboutProfile = ({
  previewUrl,
  setSelectedFile,
  setPreviewUrl,
}: AboutProfileProps) => {
  const { user } = useAuth();
  const { activeModal, setActiveModal, onClose } = useModal();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [education, setEducation] = useState<IEducation[]>([]);
  const [skills, setSkills] = useState<{ id: number; skill: string }[]>([]);
  const [skillInput, setSkillInput] = useState("");

  useEffect(() => {
    const fetchEducation = async () => {
      if (!user?.id) return;

      const userId = Number(user.id);
      const response = await getSavedProfiles(userId);

      console.log("Fetched Data:", response);
      setEducation(response);
      if (response?.skill) {
        const mapped = response.skill.map((s: string, i: number) => ({
          id: i,
          skill: s,
        }));
        setSkills(mapped);
        console.log(mapped);
      }
    };
    fetchEducation();
  }, [user?.id]);

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

      setActiveModal("education");
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
      console.log("res", response);
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
    <div className="w-full md:w-[30%] flex flex-col gap-10 relative overflow-visible">
      <div
        className="relative w-full h-100 cursor-pointer -mt-40 z-50 rounded-2xl overflow-hidden group"
        onClick={() => fileInputRef.current?.click()}
      >
        {previewUrl ? (
          <Image
            src={previewUrl}
            alt="Profile"
            fill
            className="object-cover rounded-2xl shadow-md transition"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-200">
            <IoPerson size={100} />
          </div>
        )}

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/20 rounded-2xl z-10">
          <Camera className="text-white" size={32} />
        </div>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/*"
        />
      </div>

      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-[#333333]">Education</h2>

          <p
            className="text-2xl cursor-pointer"
            onClick={() => setActiveModal("education")}
          >
            +
          </p>
        </div>
        <div className="space-y-3">
          {education.map((edu) => (
            <div key={edu.id}>
              <p className="font-semibold text-gray-800">{edu.institution}</p>
              <p className="text-sm">
                {edu.degree} {edu.fieldOfStudy && `· ${edu.fieldOfStudy}`}
              </p>
              {(edu.startDate || edu.endDate) && (
                <p className="text-xs text-gray-400">
                  {edu.startDate} – {edu.endDate || "Present"}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-[#333333]">Skills</h2>

          {activeModal === "skills" ? (
            <span onClick={onClose} className="text-lg cursor-pointer">
              x
            </span>
          ) : (
            <span
              className="text-2xl cursor-pointer"
              onClick={() => setActiveModal("skills")}
            >
              +
            </span>
          )}
        </div>

        {activeModal === "skills" && (
          <form
            className="flex items-center gap-x-2 mt-2"
            onSubmit={handleCreateSkill}
          >
            <input
              type="text"
              autoFocus
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              className="border rounded-md border-gray-300 px-2 py-1 text-sm"
              placeholder="Type a skill..."
            />
            <button type="submit" className="text-blue-500 font-medium">
              Add
            </button>
          </form>
        )}
        <div className="flex flex-wrap gap-x-3">
          {skills.map((skillObj, index) => (
            <span
              key={`skill-${skillObj.id}-${index}`}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {skillObj.skill}
            </span>
          ))}
        </div>
      </div>
      {activeModal === "education" && (
        <EducationModal onSave={handleSaveEducation} />
      )}
    </div>
  );
};

export default AboutProfile;
