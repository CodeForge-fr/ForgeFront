"use client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeSection1 from "./components/sections/HomeSection1";

export default function Home() {
  return (
    <>
      <Header className="bg-transparent text-white py-4 px-10 md:px-20 fixed top-0 left-0 right-0 z-50" />
      <HomeSection1 />
      <Footer />
    </>
  );
}
