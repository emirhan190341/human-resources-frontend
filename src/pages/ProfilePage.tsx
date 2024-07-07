import RotatedText from "@/components/decorators/RotatedText";
import ProfileForm from "@/components/profile/ProfileForm";
import { Chip, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { CgWebsite } from "react-icons/cg";
import { CiCalendarDate } from "react-icons/ci";
import { FaCode, FaGithub, FaHome, FaLinkedin, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLanguageSharp } from "react-icons/io5";
import { MdOutlineMail, MdOutlineWork } from "react-icons/md";
import { useSelector } from "react-redux";
import EducationList from "../components/education/EducationList";
import ExperienceList from "../components/experience/ExperienceList";
import { RootState } from "@/redux/store";

const ProfilePage = () => {
  const [open, setOpen] = useState(false);
  const jobSeeker = useSelector(
    (state: RootState) => state.jobSeeker.jobSeeker
  );

  const { isLoading, error, data } = useQuery({
    queryKey: ["jobSeeker"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:8080/api/v1/job-seeker/${jobSeeker.id}`,
        {
          credentials: "include",
        }
      );
      const data = await res.json();
      return data.response;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error(error);
  }

  return (
    <div className="m-20 w-fit mx-auto flex gap-2 bg-gradient-to-r from-slate-700 to-sky-500 rounded-xl">
      {/* Left Part */}
      <div className="relative flex flex-col ">
        <div className="border border-t-0 border-slate-400 rounded-tl-xl rounded-br-xl shadow-xl p-8 w-fit flex flex-col gap-3">
          <div className="flex items-center gap-8">
            <img
              className="w-28 h-28 object-fit   rounded-full "
              src="/src/assets/ronaldo.jpg"
              alt="Photo"
            />

            <div className="absolute right-0  top-0 m-4 flex items-center gap-2">
              <button
                className="text-xl bg-teal-500 w-fit px-1 text-transparent bg-clip-text rounded-lg"
                onClick={() => setOpen(true)}
              >
                Edit
              </button>
            </div>

            <span className="text-2xl">
              {jobSeeker?.firstName} {jobSeeker?.lastName}{" "}
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <MdOutlineWork />
              <p className="text-center font-sans text-lg">{data?.position}</p>
            </div>
            <div className="flex items-center gap-2">
              <FaLocationDot />
              <p className="text-center font-sans text-lg">
                {data?.city}, {data?.country}
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-1">
              {" "}
              <MdOutlineMail />
              <p className="text-gray-500 font-semibold">Email Address:</p>
            </div>
            {jobSeeker?.email}
          </div>

          <div>
            <div className="flex items-center gap-1">
              {" "}
              <FaHome />
              <p className="text-gray-500 font-semibold">Home Address:</p>
            </div>
            <p className="whitespace-normal">{data?.address}</p>
          </div>

          <div>
            <div className="flex items-center gap-1">
              <FaPhone />
              <p className="text-gray-500 font-semibold">Phone Number:</p>
            </div>
            <p className="font-semibold">{data?.mobilPhone}</p>
          </div>

          <div>
            <div className="flex items-center gap-1">
              <FaCode className="text-teal-500" />
              <p className="font-bold">Software Skills:</p>
            </div>
            <Stack
              direction="row"
              spacing={0}
              className="pt-2"
              flexWrap={"wrap"}
            >
              {data?.skills.map((skill: string) => (
                <Chip
                  style={{
                    margin: "5px",
                    background:
                      "linear-gradient(to right bottom, #430089, #82ffa1)",
                  }}
                  label={skill}
                  key={skill}
                />
              ))}
            </Stack>
          </div>
        </div>
        <ExperienceList />
      </div>

      <div className="flex flex-col">
        <div className="border border-t-0 border-slate-400   h-fit rounded-tr-xl rounded-bl-xl shadow-xl p-8 flex flex-col gap-3  ">
          <div className="flex justify-between text-xl">
            <RotatedText>
              <span className="font-bold text-xl ">General Information</span>
            </RotatedText>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">About Me</span>
            <p className="w-2/3 text-balance">{data?.biography}</p>
          </div>

          <div className="w-full flex flex-wrap items-center gap-12 mt-10">
            <div>
              <div className="flex items-center gap-1">
                {" "}
                <FaLinkedin />
                <p className="text-gray-500">Linkedin</p>
              </div>
              <a
                href={data?.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold w-full"
              >
                {data?.linkedin}
              </a>
            </div>
            <div>
              <div className="flex items-center gap-1">
                {" "}
                <FaGithub />
                <p className="text-gray-500">Github</p>
              </div>
              <a
                href={data?.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold w-full"
              >
                {data?.linkedin}
              </a>
            </div>
            <div>
              <div className="flex items-center gap-1">
                {" "}
                <CgWebsite />
                <p className="text-gray-500">Web Site</p>
              </div>
              <a
                href={data?.website}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold w-full"
              >
                {data?.website}
              </a>
            </div>
            <div className="flex flex-col items-start justify-between">
              <div className="flex items-center gap-1">
                <IoLanguageSharp />
                <p className="text-gray-500">Languages</p>
              </div>
              <span className="font-semibold">
                {/* TODO: Language level:1-2-3-4-5 with stars? Backend entity oluşturulması lazım */}
                {data?.languages.map((language: string) => (
                  <Chip
                    style={{
                      margin: "5px",
                      background:
                        "linear-gradient(to right bottom, #ABA3AD, #FFFFFF)",
                    }}
                    label={language}
                    key={language}
                  />
                ))}
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1">
                {" "}
                <CiCalendarDate />
                <p className="text-gray-500">Join Date</p>
              </div>
              <span className="font-semibold w-full">
                {jobSeeker.createdAt}
              </span>
            </div>
          </div>
        </div>
        <EducationList />
        {open && (
          <ProfileForm
            open={open}
            handleClose={() => {
              setOpen(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
