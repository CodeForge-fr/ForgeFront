"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1E90D6] w-full text-white px-10 md:px-20 py-16">
      <div className="max-w-7xl mx-auto">

        {/* Top */}
        <div className="grid md:grid-cols-2 gap-16 mb-16">

          {/* Left */}
          <div>
            <h2 className="text-4xl font-semibold mb-10">Unilink</h2>

            <p className="text-sm opacity-80 mb-4">
              Stay updated with the latest cross-university events
            </p>

            <div className="flex items-center border-b border-white/40 pb-2 max-w-md">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent outline-none flex-1 placeholder:text-white/70"
              />
              <ArrowRight size={20} />
            </div>

            <Link href="#" className="block mt-8 text-sm opacity-80 hover:opacity-100">
              www.Unilink.am
            </Link>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-10">
            <h3 className="text-2xl font-semibold max-w-md">
              Connecting students, universities, and opportunities
            </h3>

            <div className="grid grid-cols-3 gap-10 text-sm">

              {/* Menu */}
              <div>
                <h4 className="font-semibold mb-4">Menu</h4>
                <ul className="space-y-2 opacity-80">
                  <li>
                    <Link href="#" className="hover:opacity-100">
                      Universities
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:opacity-100">
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:opacity-100">
                      Organizations
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:opacity-100">
                      Opportunities
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 opacity-80">
                  <li>
                    <Link href="#" className="hover:opacity-100">
                      How it works
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:opacity-100">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:opacity-100">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:opacity-100">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-semibold mb-4">Say Hello</h4>
                <Link
                  href="#"
                  className="opacity-80 hover:opacity-100"
                >
                  info@unilink.am
                </Link>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/30 pt-6 text-sm opacity-70">
          2026 UniLink Platform. All rights reserved.
        </div>

      </div>
    </footer>
  );
}