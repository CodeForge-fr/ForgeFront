/* eslint-disable react/no-unescaped-entities */
"use client";

import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-6 py-20">
      
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>
          <p className="text-sm text-gray-500 mb-4">
            We Are Here To Help You
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Contact the <br /> UniLink Team
          </h1>

          <p className="text-gray-500 mb-10">
            We're Happy To Answer Your Questions And Support You Every
            Step Of The Way.
          </p>

          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <div className="bg-gray-200 p-3 rounded-full">
                <Mail size={18} />
              </div>

              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-gray-800">support@unilink.am</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-gray-200 p-3 rounded-full">
                <Phone size={18} />
              </div>

              <div>
                <p className="text-sm text-gray-500">Phone number</p>
                <p className="text-gray-800">+374 10 123456</p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white rounded-3xl shadow-xl p-10">

          <form className="flex flex-col gap-5">

            <div>
              <label className="text-sm text-gray-600">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-full px-4 py-2 mt-1 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full border rounded-full px-4 py-2 mt-1 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Phone Number</label>
              <input
                type="text"
                placeholder="Phone number"
                className="w-full border rounded-full px-4 py-2 mt-1 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Message</label>
              <textarea
                placeholder="Your message"
                rows={4}
                className="w-full border rounded-2xl px-4 py-3 mt-1 outline-none"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full py-2 mt-2 w-40"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}