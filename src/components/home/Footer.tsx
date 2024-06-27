import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-12 md:py-16 text-center mt-auto">
      <div className="space-y-4 md:space-y-5">
        <div className="flex justify-center">
          <div className="space-x-4 flex">
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="#" aria-label="GitHub">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>
        <p color="g.subtle" className="text-sm">
          &copy; {new Date().getFullYear()} OBSS, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
