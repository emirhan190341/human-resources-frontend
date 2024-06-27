import { Link, useNavigate } from "react-router-dom";
import OAuthButtonGroup from "../components/OAuthButtonGroup";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { createJobSeeker } from "../redux/JobSeekerSlice";
import TransitionText from "@/components/decorators/TransitionText";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        toast.success("Login successful.");
        dispatch(createJobSeeker(data.jobSeeker));
      } else {
        const data = await response.json();
        toast.error(data.error + ". Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className=" flex min-h-full flex-1 flex-col justify-center  lg:px-8">
      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-28"
          src="/src/assets/logo.jpg"
          alt="Your Company"
        />
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 ">
          <span className="bg-gradient-to-r from-slate-800 to-sky-500  text-transparent bg-clip-text  rounded-lg">
            Sign in to your account
          </span>
        </h2>
        <p className="fg.muted text-center mt-2">
          Don't have an account? <TransitionText>Sign up</TransitionText>
        </p>
      </div>

      <div className="container max-w-[468px]  mx-auto  rounded-xl shadow-2xl mt-10 px-3 py-6 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit} method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block px-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-400 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block px-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
              <button
                type="submit"
                className="flex w-full mt-5 justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
          <div>
            <div className="flex items-center space-x-2 pt-3">
              <hr className="flex-grow border-gray-300" />
              <span className="text-base font-semibold whitespace-nowrap">
                or continue with
              </span>
              <hr className="flex-grow border-gray-300" />
            </div>
            <OAuthButtonGroup />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
