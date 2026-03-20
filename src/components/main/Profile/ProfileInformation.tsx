import React from "react";
import Image from "next/image";
import profile from "../../../../public/icons/profile.svg";
import project from "../../../../public/icons/project.svg";
import notification from "../../../../public/icons/notifications.svg";
import password from "../../../../public/icons/profile-password.svg";

const ProfileInformation = () => {
  return (
    <div className="w-full md:w-[65%] mb-10">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-4xl font-semibold text-[#333333]">
            Karen Vardanyan
          </h1>
          <p className="text-[#0097FE] font-normal text-md">Data Analyst</p>
        </div>
        <button className="bg-[#0097FE] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition">
          Create a business account
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-gray-200 mb-8 space-x-8">
        <button className="flex items-center gap-2 pb-4 border-b-2 border-[#0097FE] text-[#0097FE] font-medium">
          <Image src={profile} alt="profile" width={16} height={16} /> About
        </button>
        <button className="flex items-center gap-2 pb-4 text-gray-500 hover:text-gray-700">
          <Image src={password} alt="password" width={16} height={16} /> Password
        </button>
        <button className="flex items-center gap-2 pb-4 text-gray-500 hover:text-gray-700">
          <Image src={notification} alt="notification" width={16} height={16} /> Notification
        </button>
        <button className="flex items-center gap-2 pb-4 text-gray-500 hover:text-gray-700">
          <Image src={project} alt="project" width={16} height={16} /> Projects
        </button>
      </div>

      {/* Form Section */}
      <div className="flex flex-col gap-y-5">
        <div>
          <h3 className="text-xl font-semibold text-[#333333]">About</h3>
          <p className="text-[#5E6C6A] text-sm font-normal">
            Contact details and basic personal information.
          </p>
        </div>

        <div className="grid grid-cols-1 mt-2 gap-y-5">
          <h4 className="font-bold text-[#333333] text-xl">Contact</h4>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <span className="text-[#333333]">Phone</span>
            <span className="col-span-2 text-[#0097FE]">+374 98478562</span>

            <span className="text-[#333333]">E - Mail</span>
            <span className="col-span-2 text-[#0097FE]">
              karenvardanyan@gmail.com
            </span>

            <span className="text-[#333333]">Address</span>
            <span className="col-span-2 text-gray-800">—</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-4 pt-4">
          <h4 className="font-bold text-[#333333] text-xl">Personal Information</h4>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <span className="text-[#333333]">Gender</span>
            <span className="col-span-2 text-[#0097FE]">Male</span>

            <span className="text-[#333333]">Date of Birth</span>
            <span className="col-span-2 text-[#0097FE]">12 / 05 / 1998</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 pt-10">
          <button className="px-5 py-3 border border-gray-300 border-1 border-[#333333] rounded-full text-gray-600 hover:bg-gray-50">
            Cancel
          </button>
          <button className="px-5 py-3 bg-[#0097FE] text-white rounded-full shadow-lg hover:bg-blue-600">
            Update information
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;