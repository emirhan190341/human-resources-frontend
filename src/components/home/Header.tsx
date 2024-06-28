import { RootState } from "@reduxjs/toolkit/query";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutJobSeeker } from "../../redux/JobSeekerSlice";
import MUIModal from "../MUIModal";
import ConfirmLogout from "./ConfirmLogout";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const jobSeeker = useSelector(
    (state: RootState) => state.jobSeeker.jobSeeker
  );

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleConfirmLogout = () => {
    setModalOpen(false);
    mutate();
  };

  type StyleProps = {
    position: string;
    top: string;
    left: string;
    transform: string;
    width: number;
    background: string;
    borderRadius: string;
    boxShadow: number;
    p: number;
  };

  const style: StyleProps = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    background: "linear-gradient(to bottom, #1e293b, #0ea5e9)",
    borderRadius: "20px",
    boxShadow: 24,
    p: 4,
  };

  const { mutate } = useMutation({
    mutationFn: async () => {
      const res = await fetch("http://localhost:8080/api/v1/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      const data = await res.json();
      return data;
    },
    onSuccess: (data) => {
      dispatch(logoutJobSeeker());
      toast.success(data.message);
    },
  });

  return (
    <div className="px-4">
      <div className="max-w-[1200px] sticky top-0 left-0   w-full md:mx-auto  mt-8  shadow-xl  ">
        <div className="flex w-full items-center justify-between">
          <div>
            <img
              className="w-28 object-cover"
              src="/src/assets/logo.jpg"
              alt=""
            />
          </div>
          <div className="text-black text-sm md:text-xl flex gap-3 mr-4">
            <Link to="/" className=" py-2  rounded-lg">
              Home
            </Link>
            {jobSeeker?.accountVerified && (
              <Link to="/profile" className=" py-2   rounded-lg">
                Profile
              </Link>
            )}
            <Link to="/jobs" className=" py-2  rounded-lg">
              Jobs
            </Link>
            <Link to="/contact" className=" py-2  rounded-lg">
              Contact Us
            </Link>
            {!jobSeeker?.accountVerified && (
              <Link to="/login" className=" py-2  rounded-lg">
                Login
              </Link>
            )}
            {!jobSeeker?.accountVerified && (
              <Link to="/signup" className="py-2 rounded-lg ">
                Sign Up
              </Link>
            )}

            <div className="absolute ">
              <MUIModal
                style={style}
                open={modalOpen}
                handleClose={handleCloseModal}
              >
                <ConfirmLogout
                  onClose={handleCloseModal}
                  onConfirm={handleConfirmLogout}
                />
              </MUIModal>
            </div>

            {jobSeeker?.accountVerified && (
              <button
                onClick={handleOpenModal}
                className="bg-gradient-to-r from-red-900 to-red-500 p-1 text-transparent bg-clip-text  "
              >
                Logout
              </button>
            )}
          </div>
        </div>
        <Toaster
          toastOptions={{
            style: {
              border: "1px solid #33F3FF",
              padding: "3px",
              color: "black",
              background: "#f3f4f6",
              fontSize: "12px",
            },
          }}
          position="top-right"
          reverseOrder={false}
        />
      </div>
    </div>
  );
};

export default Header;
