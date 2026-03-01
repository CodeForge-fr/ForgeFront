import Modal from "./Modal";

interface ISignUp {
  onClose: () => void;
  onSwitchToLogin: () => void;
}

export default function SignUpModal({ onClose, onSwitchToLogin }: ISignUp) {
  return (
    <Modal
      onClose={onClose}
      onSwitch={onSwitchToLogin}
      text1="Sign Up"
      text2="Sign Up"
      text3="Sign In"
    />
  );
}
