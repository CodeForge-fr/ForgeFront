import React from "react";
import HeroSection from "./heroSection/HeroSection";
import Header from "./Header";

interface HeaderSectionProps {
  openLogin?: () => void;
  openRegister?: () => void;
}

const HeaderSection = ({ openLogin, openRegister }: HeaderSectionProps) => {
  return (
    <div className="flex flex-col">
      <Header openLogin={openLogin} openRegister={openRegister} />
      <HeroSection />
    </div>
  );
};

export default HeaderSection;
