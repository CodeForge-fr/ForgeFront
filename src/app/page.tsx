/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import MainComponent from "@/components/main";
import SignInModal from "@/components/modal/SignInModal";
import SignUpModal from "@/components/modal/SignUpModal";
import { useAuth } from "@/app/context/AuthContext";
import HeaderSection from "@/components/main/header/page";

type ModalType = "login" | "register" | null;

export default function Home() {
  const { logout } = useAuth();
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openLogin = () => {
    setActiveModal("login");
    window.history.replaceState(null, "", "/signin");
  };

  const openRegister = () => {
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

  const handleLogout = () => {
    logout();
    window.history.replaceState(null, "", "/");
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-zinc-50 dark:bg-black">

      <HeaderSection openLogin={openLogin} openRegister={openRegister} />

      <MainComponent />

      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="absolute inset-0" onClick={closeModal} />

          <div className="relative z-10 w-full max-w-md max-h-[100vh] rounded-2xl">
            {activeModal === "login" ? (
              <SignInModal
                onClose={closeModal}
                onLoginSuccess={handleLoginSuccess}
                onSwitchToRegister={openRegister}
              />
            ) : (
              <SignUpModal onClose={closeModal} onSwitchToLogin={openLogin} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
