import React, { useEffect, useRef } from "react";
import { Camera } from "lucide-react";
import Image from "next/image";
import { IoPerson } from "react-icons/io5";
import EducationModal from "./createEducation";
import { useProfile } from "@/context/ProfileContext";

const AboutProfile = () => {
  const {
    activeModal,
    setActiveModal,
    onClose,
    education,
    skills,
    skillInput,
    setSkillInput,
    previewUrl,
    fetchEducation,
    handleFileChange,
    handleCreateSkill,
  } = useProfile();

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchEducation();
  }, []);

  return (
    <div className="w-4/5 mx-auto sm:w-[30%] sm:m-0 flex flex-col gap-10 relative overflow-visible">
      <div
        className="relative w-full h-100 aspect-[2/3] cursor-pointer -mt-40 z-50 rounded-2xl overflow-hidden group"
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
          {education.length > 0 ? (
            education.map((edu, index) => (
              <div
                key={edu.id || index}
                className="border-l-2 border-blue-100 pl-3"
              >
                <p className="font-semibold text-gray-800 leading-tight">
                  {edu.institution}
                </p>
                <p className="text-sm text-gray-600">
                  {edu.degree} {edu.fieldOfStudy && `· ${edu.fieldOfStudy}`}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {edu.startDate || "N/A"} – {edu.endDate || "Present"}
                </p>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-400 italic">
              No education added yet.
            </p>
          )}
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

      {activeModal === "education" && <EducationModal />}
    </div>
  );
};

export default AboutProfile;
