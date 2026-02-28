"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import the router
import MainComponent from "@/components/main";
import Modal from "@/components/modal/Modal";
import SignUpPage from "./signup/page";
import SignInPage from "./signin/page";

export default function Home() {
  const router = useRouter();
  const [isLoginModal, setIsLoginModal] = useState(false);
  const [isRegisterModal, setIsRegisterModal] = useState(false);

  const openLogin = () => {
    setIsLoginModal(true);
    window.history.pushState(null, "", "/signin");
  };

  const openRegister = () => {
    setIsRegisterModal(true);
    window.history.pushState(null, "", "/signup");
  };

  const closeModal = () => {
    setIsLoginModal(false);
    setIsRegisterModal(false);
    window.history.pushState(null, "", "/");
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-zinc-50 dark:bg-black">
      <nav className="p-6 flex gap-6 border-b border-zinc-800">
        <button onClick={openLogin} className="hover:text-blue-500">
          Sign In
        </button>
        <button onClick={openRegister} className="hover:text-blue-500">
          Sign Up
        </button>
      </nav>

      <MainComponent />

      {(isLoginModal || isRegisterModal) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="absolute inset-0" onClick={closeModal} />
          <div className="relative z-10">
            {isLoginModal ? (
              <SignInPage onClose={closeModal} />
            ) : (
              <SignUpPage onClose={closeModal} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
