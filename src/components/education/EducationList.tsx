import { LuPlus } from "react-icons/lu";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useSelector } from "react-redux";
import RotatedText from "../decorators/RotatedText";
import EducationCard from "./EducationCard";
import EducationForm from "./EducationForm";
import { RootState } from "@/redux/store";

type Education = {
  id: number;
  schoolName: string;
  department: string;
  major: string;
  startDate: string;
  endDate: string;
  country: string;
  city: string;
  description: string;
};

const EducationList = () => {
  const [open, setOpen] = useState(false);
  const jobSeeker = useSelector(
    (state: RootState) => state.jobSeeker.jobSeeker
  );

  const { isLoading, error, data } = useQuery({
    queryKey: ["education"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:8080/api/v1/job-seeker-education/${jobSeeker.id}`,
        {
          credentials: "include",
        }
      );
      console.log(res);
      const data = await res.json();
      console.log(data.response[0]);
      return data;
    },
    enabled: true,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error(error);
  }

  return (
    <div className="border border-r-0 border-slate-400 rounded-tl-xl rounded-bl-xl rounded-br-xl shadow-xl p-4 mt-3">
      <div className="flex text-xl justify-between items-center">
        <span className="font-bold">
          <RotatedText>Education</RotatedText>
        </span>
        <div className="flex items-center gap-2">
          <button onClick={() => setOpen(true)}>
            <LuPlus />
          </button>
          {/*TODO: Implement edit functionality */}
        </div>
      </div>

      {open && (
        <EducationForm
          open={open}
          handleClose={() => {
            setOpen(false);
          }}
        />
      )}

      {data?.response.map((education: Education) => (
        <EducationCard
          key={education.id}
          schoolName={education.schoolName}
          department={education.department}
          major={education.major}
          startDate={education.startDate}
          endDate={education.endDate}
          country={education.country}
          city={education.city}
          description={education.description}
        />
      ))}
    </div>
  );
};

export default EducationList;
