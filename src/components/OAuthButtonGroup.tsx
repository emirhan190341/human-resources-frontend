import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const providers = [
  { name: "Google", icon: <FcGoogle /> },
  { name: "Twitter", icon: <FaXTwitter /> },
  { name: "GitHub", icon: <FaGithub /> },
];

const OAuthButtonGroup = () => {
  return (
    <div className="flex gap-5 items-center justify-center">
      {providers.map((provider) => (
        <button
          key={provider.name}
          className="bg-gray-200 px-6 py-4 mt-5  rounded-lg hover:bg-gray-300 transition-colors duration-300 ease-in-out"
        >
          {provider.icon}
        </button>
      ))}
    </div>
  );
};

export default OAuthButtonGroup;
