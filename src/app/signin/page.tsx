import Modal from "@/components/modal/Modal";

interface ISignIn {
  onClose: () => void;
}

export default function SignInPage({ onClose }: ISignIn) {
  return (
    <>
      <Modal
        onClose={onClose}
        text1="Welcome back !"
        text2="Log In"
        text3="Sign Up"
      />
    </>
  );
}
