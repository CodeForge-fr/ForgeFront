import { useState } from "react";
import Modal from "./Modal";
import { useAuth } from "@/app/context/AuthContext";

interface ISignIn {
  onClose: () => void;
  onLoginSuccess: () => void;
  onSwitchToRegister: () => void;
}

export default function SignInModal({
  onClose,
  onLoginSuccess,
  onSwitchToRegister,
}: ISignIn) {
  const { login } = useAuth();

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
    const success = await login(formData.email, formData.password);
    if (success) onLoginSuccess?.();
  };

  return (
    <Modal
      onClose={onClose}
      onLoginSuccess={onLoginSuccess}
      onSwitch={onSwitchToRegister}
      onSubmit={handleSubmit}
      formData={formData}
      setFormData={setFormData}
      text1="Welcome back!"
      text2="Log In"
      text3="Sign Up"
    />
  );
}
