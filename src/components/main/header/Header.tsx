"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "../../../context/AuthContext";
import { usePathname } from "next/navigation";
import { themeMap } from "../../../themes/headerThemes";
import MobileHeader from "./mobile/mobileHeader";
import DesktopHeader from "./desktop/desktopHeader";

type Props = {
  openLogin?: () => void;
  openRegister?: () => void;
};

export default function Header({ openLogin, openRegister }: Props) {
  const { isLoggedIn, logout } = useAuth();

  const [openMenu, setOpenMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = () => {
    logout();
    window.history.replaceState(null, "", "/");
    setOpenMenu(false);
  };

  const defaultTheme = {
    header: "bg-white/5 rounded-b-2xl",
    text: "text-white",
    icon: "text-white",
    nav: "text-gray-500",
    mobileBg: "bg-black/90",
  };

  const currentTheme = themeMap[pathname] || defaultTheme;

  return (
    <header
      className={`${currentTheme.header} absolute top-0 left-0 w-full z-50 backdrop-blur-md`}
    >
      <div className="max-w-xl md:max-w-4xl mx-auto px-4 lg:max-w-7xl py-[26px] flex items-center justify-between">
        <Link
          href={isLoggedIn ? "/profile" : "/"} // "/profile"
          className={`flex text-xl font-normal gap-2`}
        >
          <span className={currentTheme.text}>
            <b className="text-blue-500 font-bold">Uni</b>Link
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <DesktopHeader
          currentTheme={currentTheme}
          mounted={mounted}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
          handleLogout={handleLogout}
          openLogin={openLogin}
          openRegister={openRegister}
        />
      </div>

      {/* MOBILE MENU */}
      <MobileHeader
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
        currentTheme={currentTheme}
        handleLogout={handleLogout}
        openLogin={openLogin}
        openRegister={openRegister}
      />
    </header>
  );
}
