"use client";

import { useState } from "react";
import { SocialButton } from "./buttons";
import Image from "next/image";
import google from "../../../public/icons/google.svg";
import apple from "../../../public/icons/apple.svg";
import fb from "../../../public/icons/fb.svg";
import emailIcon from "../../../public/icons/email.svg";
import passwordIcon from "../../../public/icons/password.svg";
import telIcon from "../../../public/icons/tel.svg";
import close from "../../../public/icons/close.svg";
import { useAuth } from "@/app/context/AuthContext";

interface ISignUp {
  onClose: () => void;
  onLoginSuccess?: () => void;
  onSwitch?: () => void;
  text1: string;
  text2: string;
  text3: string;
  onSubmit?: (e: React.FormEvent) => void;
  formData?:
    | {
        name: string;
        surname: string;
        email: string;
        phone: string;
        password: string;
        nickname: string;
      }
    | undefined;
  isRegister?: boolean;
  setFormData?: React.Dispatch<
    React.SetStateAction<{
      name: string;
      surname: string;
      email: string;
      phone: string;
      password: string;
      nickname: string;
    }>
  >;
}

const Modal = ({
  onClose,
  onSubmit,
  onSwitch,
  text1,
  text2,
  text3,
  formData,
  isRegister = false,
  setFormData,
}: ISignUp) => {
  const { loading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="max-w-xl w-full bg-[#1e1e1e] rounded-2xl relative px-8 py-10 mx-auto">
      {" "}
      <button
        onClick={onClose}
        className="absolute right-5 top-5 text-gray-400 hover:text-white transition-colors"
      >
        <Image src={close} alt="close-button" width={16} height={16} />
      </button>
      <h1 className="text-white text-center text-[32px] mb-8 font-bold">
        {text1}
      </h1>
      <form className="space-y-3" onSubmit={onSubmit}>
        <div className="relative">
          <input
            type="email"
            placeholder="Email"
            value={formData?.email ?? ""}
            className="w-full bg-[#2a2a2a] text-white border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            onChange={(e) =>
              setFormData?.({ ...formData!, email: e.target.value })
            }
          />
          <div className="absolute right-3 top-3 text-gray-500">
            <Image src={emailIcon} alt="email" width={20} height={20} />
          </div>
        </div>

        {isRegister && (
          <div className="relative">
            <input
              type="tel"
              placeholder="Phone number"
              value={formData?.phone ?? ""}
              className="w-full bg-[#2a2a2a] text-white border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              onChange={(e) =>
                setFormData?.({ ...formData!, phone: e.target.value })
              }
            />
            <div className="absolute right-3 top-3 text-gray-500">
              <Image src={telIcon} alt="tel" width={20} height={20} />
            </div>
          </div>
        )}

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={formData?.password ?? ""}
            className="w-full bg-[#2a2a2a] text-white border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            onChange={(e) =>
              setFormData?.({ ...formData!, password: e.target.value })
            }
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-gray-500 hover:text-gray-300 transition-colors"
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            ) : (
              <Image src={passwordIcon} alt="password" width={20} height={20} />
            )}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-[#0056d2] hover:bg-[#004bb8] text-white font-bold py-3 rounded-lg transition-colors mt-2"
          disabled={loading}
        >
          {loading ? "Processing..." : text2}
        </button>
      </form>
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-700 border-dotted"></span>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-[#1e1e1e] text-gray-400">Or</span>
        </div>
      </div>
      <div className="space-y-3">
        <SocialButton img={google} text="Continue with Google" />
        <SocialButton img={apple} text="Continue with Apple" />
        <SocialButton img={fb} text="Continue with Facebook" />
      </div>
      <p className="text-center text-sm text-gray-400 mt-6">
        Already have an account?{" "}
        <button className="text-blue-500 hover:underline" onClick={onSwitch}>
          {text3}
        </button>
      </p>
    </div>
  );
};
export default Modal;
