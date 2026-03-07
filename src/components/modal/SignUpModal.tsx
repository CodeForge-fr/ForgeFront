
import Modal from "./Modal";
import { useState } from "react";
import { useAuth } from "@/app/context/AuthContext";

interface ISignUp {
  onClose: () => void;
  onSwitchToLogin: () => void;
}

export default function SignUpModal({ onClose, onSwitchToLogin }: ISignUp) {
  const { register } = useAuth();

  const [formData, setFormData] = useState({
    name: "User",
    surname: "Name",
    email: "",
    phone: "",
    password: "",
    nickname: "user123",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const success = await register({
      ...formData,
      age: 20,
      gender: "MALE",
      role: "USER",
    });

    if (success) {
      alert("Registration successful! Please sign in.");
      onClose();
    }
  };

  return (
    <Modal
      onClose={onClose}
      onSwitch={onSwitchToLogin}
      onSubmit={handleSubmit}
      formData={formData}
      setFormData={setFormData}
      isRegister={true}
      text1="Sign Up"
      text2="Sign Up"
      text3="Sign In"
    />
  );
}
