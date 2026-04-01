import { useAuth } from "@/context/AuthContext";
import Link from "next/link"; 
import React from "react";
import { IoPerson } from "react-icons/io5";

type MobileHeaderProps = {
  mobileMenu: boolean;
  setMobileMenu: (value: boolean) => void;
  currentTheme: {
    mobileBg?: string;
    text?: string;
    icon?: string;
    nav?: string;
    header?: string;
  };
  handleLogout: () => void;
  openLogin?: () => void;
  openRegister?: () => void;
};

const MobileHeader = ({
  mobileMenu,
  currentTheme,
  handleLogout,
  openLogin,
  openRegister,
  setMobileMenu,
}: MobileHeaderProps) => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {mobileMenu && (
        <div
          className={`${currentTheme.mobileBg} ${currentTheme.text} lg:hidden backdrop-blur-lg px-6 py-6 flex flex-col gap-6`}
        >
          <Link href="/events" onClick={() => setMobileMenu(false)}>
            Events
          </Link>
          <Link href="/projects" onClick={() => setMobileMenu(false)}>
            Projects
          </Link>
          <Link href="/courses" onClick={() => setMobileMenu(false)}>
            Courses
          </Link>
          <Link href="/contact" onClick={() => setMobileMenu(false)}>
            Contact Us
          </Link>
          <Link href="/about" onClick={() => setMobileMenu(false)}>
            About Us
          </Link>

          <div className="border-t border-white/20 pt-4 flex flex-col gap-3">
            {isLoggedIn ? (
              <>
                <Link href="/profile">
                  <IoPerson />
                </Link>
                <button onClick={handleLogout} className="text-left text-white">
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => openLogin?.()}
                  className="text-left text-blue-400"
                >
                  Sign In
                </button>
                <button
                  onClick={() => openRegister?.()}
                  className="text-left text-blue-400"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MobileHeader;
