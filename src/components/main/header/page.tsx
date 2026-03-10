/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import HeroSection from "./heroSection/HeroSection";
import Header from "./Header";
import SignInModal from "@/components/modal/SignInModal";
import SignUpModal from "@/components/modal/SignUpModal";
import { useAuth } from "@/app/context/AuthContext";


type ModalType = "login" | "register" | null;

const HeaderSection = () => {
  const { logout } = useAuth();
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const handleOpenLogin = () => {
    setActiveModal("login");
    window.history.replaceState(null, "", "/signin");
  };

  const handleOpenRegister = () => {
    setActiveModal("register");
    window.history.replaceState(null, "", "/signup");
  };

  const closeModal = () => {
    setActiveModal(null);
    window.history.replaceState(null, "", "/");
  };

  const handleLoginSuccess = () => {
    closeModal();
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-zinc-50 dark:bg-black">

      <Header openLogin={handleOpenLogin} openRegister={handleOpenRegister} />

      <HeroSection />

      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">

          <div className="absolute inset-0" onClick={closeModal} />

          <div className="relative z-10 w-full max-w-md max-h-[100vh] rounded-2xl">
            {activeModal === "login" ? (
              <SignInModal
                onClose={closeModal}
                onLoginSuccess={handleLoginSuccess}
                onSwitchToRegister={handleOpenRegister}
              />
            ) : (
              <SignUpModal
                onClose={closeModal}
                onSwitchToLogin={handleOpenLogin}
              />
            )}
          </div>

        </div>
      )}

    </div>
  );
};

export default HeaderSection;