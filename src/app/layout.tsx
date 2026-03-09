import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "swiper/css";
import "./globals.css";
import { AuthProvider } from "./context/AuthProvider";

import Header from "@/components/main/header/Header";
import Footer from "@/components/main/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
});

export const metadata: Metadata = {
  title: "UniLink",
  description: "UniLink Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <AuthProvider>

          <Header />

          {children}

          <Footer />

        </AuthProvider>
      </body>
    </html>
  );
}