import { CircularProgress } from "@mui/material";
import { RootState } from "@reduxjs/toolkit/query";
import { useQuery } from "@tanstack/react-query";
import { GoPencil } from "react-icons/go";
import { LuPlus } from "react-icons/lu";
import { useSelector } from "react-redux";
import ExperienceCard from "./ExperienceCard";
import { useState } from "react";
import ExperienceForm from "./ExperienceForm";
import RotatedText from "../decorators/RotatedText";

type ExperienceListProps = {
  id: number;
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  country: string;
  city: string;
  description: string;
};

const ExperienceList = () => {
  const [open, setOpen] = useState(false);
  const jobSeeker = useSelector(
    (state: RootState) => state.jobSeeker.jobSeeker
  );

  const { isLoading, error, data } = useQuery({
    queryKey: ["experience"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:8080/api/v1/job-seeker-experience/${jobSeeker.id}`,
        {
          credentials: "include",
        }
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    console.error(error);
  }

  return (
    <div className="border border-b-0 border-slate-400 rounded-tr-xl rounded-bl-xl shadow-xl p-4 mt-3">
      <div className="flex text-xl justify-between items-center">
        <span className="font-bold">
          <RotatedText>Experience</RotatedText>
        </span>
        <div className="flex items-center gap-2">
          <button onClick={() => setOpen(true)}>
            <LuPlus />
          </button>
        </div>
      </div>

      {open && (
        <ExperienceForm
          open={open}
          handleClose={() => {
            setOpen(false);
          }}
        />
      )}

      {data?.response.map((experience: ExperienceListProps) => (
        <ExperienceCard
          key={experience.id}
          position={experience.position}
          company={experience.company}
          startDate={experience.startDate}
          endDate={experience.endDate}
          country={experience.country}
          city={experience.city}
          description={experience.description}
        />
      ))}
    </div>
  );
};

export default ExperienceList;
