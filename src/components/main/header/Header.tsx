"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "../../../app/context/AuthContext";
import { Menu, X } from "lucide-react";

type Props = {
  openLogin?: () => void;
  openRegister?: () => void;
};

export default function Header({ openLogin, openRegister }: Props) {
  const { isLoggedIn, logout } = useAuth();

  const [openMenu, setOpenMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleLogout = () => {
    logout();
    window.history.replaceState(null, "", "/");
    setOpenMenu(false);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-[100%] mx-auto px-6 py-4 flex items-center justify-between bg-white/5 backdrop-blur-md rounded-b-2xl">
        <Link
          href={isLoggedIn ? "/profile" : "/"}
          className="flex text-white text-xl font-bold gap-2"
        >
          <span className="text-blue-500">Uni</span>
          <span className="text-gray-500">Link</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-gray-500 text-sm">
          <Link href="/events">Events</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/about">About Us</Link>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* JOIN BUTTON */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm"
            >
              Join the platform
            </button>

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
            className="md:hidden text-white"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg text-white px-6 py-6 flex flex-col gap-6">
          <Link href="/events">Events</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/about">About Us</Link>

          <div className="border-t border-white/20 pt-4 flex flex-col gap-3">
            {isLoggedIn ? (
              <button onClick={handleLogout} className="text-left text-red-400">
                Logout
              </button>
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
    </header>
  );
}
