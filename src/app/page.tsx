"use client";

import { useState } from "react";
import MainComponent from "@/components/main";
import SignInModal from "@/components/modal/SignInModal";
import SignUpModal from "@/components/modal/SignUpModal";
import { useAuth } from "./context/AuthContext";

type ModalType = "login" | "register" | null;

export default function Home() {
  const { isLoggedIn, logout } = useAuth();
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
      <nav className="p-6 flex justify-end gap-6 bg-blue-400 text-white">
        {isLoggedIn ? (
          <button onClick={handleLogout} className="hover:text-red-500">
            Logout
          </button>
        ) : (
          <>
            <button onClick={openLogin} className="hover:text-blue-500">
              Sign In
            </button>
            <button onClick={openRegister} className="hover:text-blue-500">
              Sign Up
            </button>
          </>
        )}
      </nav>

      <MainComponent />

      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="absolute inset-0" onClick={closeModal} />
          <div className="relative z-10 w-full max-w-md max-h-[100vh] rounded-2xl">
            {" "}
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
