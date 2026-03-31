"use client";

import Link from "next/link";
import { X, Menu } from "lucide-react";
import React from "react";
import { IoPerson } from "react-icons/io5";
import { useAuth } from "../../../../context/AuthContext";

type DesktopHeaderProps = {
  currentTheme: {
    nav?: string;
    icon?: string;
  };
  mounted: boolean;
  openMenu: boolean;
  setOpenMenu: (value: boolean) => void;
  mobileMenu: boolean;
  setMobileMenu: (value: boolean) => void;
  handleLogout: () => void;
  openLogin?: () => void;
  openRegister?: () => void;
};

const DesktopHeader = ({
  currentTheme,
  mounted,
  openMenu,
  setOpenMenu,
  mobileMenu,
  setMobileMenu,
  handleLogout,
  openLogin,
  openRegister,
}: DesktopHeaderProps) => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <nav
        className={`${currentTheme.nav} hidden lg:flex items-center gap-8 text-sm`}
      >
        <Link href="/events">Events</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/contact">Contact Us</Link>
        <Link href="/about">About Us</Link>
      </nav>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">
        <div className="relative hidden lg:block">
          {mounted && isLoggedIn ? (
            <Link href="/profile">
              <IoPerson className={currentTheme.icon} />
            </Link>
          ) : (
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm"
            >
              Join the platform
            </button>
          )}

          {openMenu && (
            <div className="absolute right-0 top-12 bg-white rounded-xl shadow-lg w-40 text-black flex flex-col overflow-hidden">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 hover:bg-gray-100 text-left"
                >
                  Logout
                </button>
              ) : (
                <>
                  <button
                    onClick={() => {
                      openLogin?.();
                      setOpenMenu(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 text-left"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      openRegister?.();
                      setOpenMenu(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 text-left"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {/* BURGER BUTTON */}
        <button
          className={`${currentTheme.icon} lg:hidden`}
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </>
  );
};

export default DesktopHeader;
