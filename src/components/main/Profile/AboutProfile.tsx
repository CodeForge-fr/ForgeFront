import React, { ChangeEvent, useRef } from "react";
import { Camera } from "lucide-react";
import Image from "next/image";
import { IoPerson } from "react-icons/io5";
// import EducationModal from "./createEducation";

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
  const fileInputRef = useRef<HTMLInputElement>(null);
//   const [showModal, setShowModal] = useState(false);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
    }
  };

//   const handleSaveEducation = (data: unknown) => {
//     console.log("Saved Education Data:", data);
//     // You can add logic here to update your state or send to a database
//   };

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
        <div className="flex item-center justify-between">
          <h2 className="text-xl font-semibold text-[#333333] mb-3">
            Education
          </h2>
        
          <p className="text-2xl">   {/* onClick={() => setShowModal(true)}  */}
            +
          </p>
        </div>
        <div className="flex item-center justify-between">
          <h2 className="text-xl font-semibold text-[#333333] mb-3">Skills</h2>
          <p className="text-2xl">+</p>
        </div>
      </div>

      {/* {showModal && (
        <EducationModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onSave={handleSaveEducation}
        />
      )} */}
    </div>
  );
};

export default AboutProfile;
