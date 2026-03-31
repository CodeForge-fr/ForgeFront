"use client";

import React from "react";
import AboutProfile from "../../components/main/Profile/AboutProfile";
import ProfileInformation from "../../components/main/Profile/ProfileInformation";

const ProfilePage = () => {
  return (
    <div className="flex bg-white md:bg-[#0097FE] pt-25">
      <div className="flex-1 w-full mx-auto mt-10 py-10 px-4 md:px-20 bg-white overflow-visible">
        <div className="bg-white rounded-lg flex flex-col gap-10 md:flex-row overflow-visible">
          <AboutProfile />
          <ProfileInformation />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
