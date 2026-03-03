import Modal from "./Modal";

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
  return (
    <Modal
      onClose={onClose}
      onLoginSuccess={onLoginSuccess}
      onSwitch={onSwitchToRegister}
      text1="Welcome back!"
      text2="Log In"
      text3="Sign Up"
    />
  );
}
