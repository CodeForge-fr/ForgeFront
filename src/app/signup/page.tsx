import Modal from "../../components/modal/Modal";

interface ISignUp {
  onClose: () => void;
}

export default function SignUpPage({ onClose }: ISignUp) {
  return (
    <>
      <Modal
        onClose={onClose}
        text1="Sign Up"
        text2="Sign Up"
        text3="Sign In"
      />
    </>
  );
}
