import { ReactNode } from "react";
import { Link } from "react-router-dom";

const TransitionText = ({ children }: { children: ReactNode }) => {
  return (
    <Link to="/login" className="group font-bold transition duration-300">
      {children}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
    </Link>
  );
};

export default TransitionText;
