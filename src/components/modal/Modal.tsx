interface ISignUp {
  onClose: () => void;
  text1: string;
  text2: string;
  text3: string
}

const Modal = ({ onClose, text1, text2, text3 }: ISignUp) => {
  return (
    <div className="relative w-[611px] bg-[#1e1e1e] rounded-2xl p-8 shadow-2xl border border-gray-800">
      <button
        onClick={onClose}
        className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <h1 className="text-white text-center">{text1}</h1>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="relative">
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-[#2a2a2a] text-white border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
          />
          <div className="absolute right-3 top-3.5 text-gray-500">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
        </div>

        <div className="relative">
          <input
            type="tel"
            placeholder="Phone number"
            className="w-full bg-[#2a2a2a] text-white border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
          />
          <div className="absolute right-3 top-3.5 text-gray-500">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
        </div>

        <div className="relative">
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-[#2a2a2a] text-white border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
          />
          <div className="absolute right-3 top-3.5 text-gray-500">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
              <line x1="1" y1="1" x2="23" y2="23"></line>
            </svg>
          </div>
        </div>

        <button className="w-full bg-[#0056d2] hover:bg-[#004bb8] text-white font-bold py-3 rounded-lg transition-colors mt-2">
          {text2}
        </button>
      </form>
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-700 border-dotted"></span>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-[#1e1e1e] text-gray-400">Or</span>
        </div>
      </div>

      <div className="space-y-3">
        <SocialButton text="Continue with Google" />
        <SocialButton text="Continue with Apple" />
        <SocialButton text="Continue with Facebook" />
      </div>

      <p className="text-center text-sm text-gray-400 mt-8">
        Already have an account?{" "}
        <button className="text-blue-500 hover:underline">{text3}</button>
      </p>
    </div>
  );
};

const SocialButton = ({ text }: { text: string }) => (
  <button className="w-full flex items-center justify-center gap-3 bg-transparent border border-gray-700 hover:bg-gray-800 text-white py-3 rounded-lg transition-colors">
    <div className="w-5 h-5 bg-gray-600 rounded-full" />
    <span className="text-sm font-medium">{text}</span>
  </button>
);

export default Modal;
