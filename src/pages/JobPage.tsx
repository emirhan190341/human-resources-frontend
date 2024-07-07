import UnderlinedText from "@/components/decorators/UnerlinedText";
import { Card } from "@/components/ui/card";
import { RootState } from "@/redux/store";
import { JobDetailsProps } from "@/types/types";
import { CardContent, Container } from "@mui/material";
import { FaLeftLong } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



const jobDetails: JobDetailsProps = {
  code: "270bfa0a-475a-4090-9983-433450d61b78",
  position: "Software Engineer",
  activationTime: "2022-01-01",
  workType: "Full-time",
  jobDescription:
    "Looking for a software engineer with experience in React, Node.js, and Docker.",
  todo: [
    "Build distributed data ingestion, processing, storage, reporting and warehousing systems that scale to many petabytes.",
    "Build Machine Learning systems that serve real-time predictions to millions of customers.",
  ],
  requirements: [
    "Experience in React",
    "Experience in Node.js",
    "Experience in Docker",
  ],
};

const JobPage = () => {
  const jobSeeker = useSelector(
    (state: RootState) => state.jobSeeker.jobSeeker
  );
  return (
    <div>
      <Card>
        <CardContent className="bg-job w-full">
          <div className="flex justify-between items-center w-full">
            <div className="w-full text-center">
              <h1 className="text-white font-bold text-5xl">
                {jobDetails.position}
              </h1>
              <p className="text-white text-2xl mt-1">
                Posted on {jobDetails.activationTime}
              </p>
              <p className="text-white text-xl mt-1">
                {jobDetails.workType} (Turkey)
              </p>
              <div className="flex gap-4 justify-center mt-5">
                <button className="text-sky-500">Refer a friend</button>
                <button className="btn text-[#fdd762]">I'm interested</button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Container className="mt-6">
        <Link to="/jobs" className="inline-block">
          <div className="flex items-center gap-2 justify-center">
            <FaLeftLong className="h-6 w-6 text-black" />
            <span className="font-bold">Back to job applications list</span>
          </div>
        </Link>

        <div className="w-full">
          <h2 className="font-bold ml-4 text-4xl text-[#000000d9]">
            <UnderlinedText>About OBSS</UnderlinedText>
          </h2>
          <div className="max-w-xl">
            <p className="mt-7 ml-4 text-lg text-justify">
              We build distributed data ingestion, processing, storage,
              reporting and warehousing systems that scale to many petabytes. We
              have built Machine Learning systems that serve real-time
              predictions to millions of customers.
            </p>
          </div>
        </div>

        <div className="w-full mt-8">
          <h2 className="font-bold ml-4 text-4xl text-[#000000d9]">
            Job Description
          </h2>
          <div className="max-w-xl">
            <p className="mt-7 ml-4 text-lg text-justify">
              {jobDetails.jobDescription}
            </p>
          </div>
        </div>

        <div className="w-full mt-8">
          <h2 className="font-bold ml-4 text-4xl text-[#000000d9]">
            Job Requirements
          </h2>
          <p className="text-xl mt-5 text-black font-bold">What You Will Do</p>
          <ul className="mt-2 max-w-xl list-disc list-inside">
            {jobDetails.todo.map((todo, index) => (
              <li key={index} className="text-lg">
                {todo}
              </li>
            ))}
          </ul>
          <p className="text-xl mt-5 text-black font-bold">Job Requirements</p>
          <ul className="mt-2 max-w-xl list-disc list-inside">
            {jobDetails.requirements.map((requirement, index) => (
              <li key={index} className="text-lg">
                {requirement}
              </li>
            ))}
          </ul>
        </div>

        <Link
          className="bg-red-500"
          to={`/job/${jobDetails.code}/apply-job/${jobSeeker.id}`}
        >
          <button className="absolute left-1/2 text-white bg-job hover:bg-sky-600 py-2 mt-2 transform -translate-x-1/2 -translate-y-1/2 px-4 rounded-md">
            Apply
          </button>
        </Link>
      </Container>

      <Container>
        {/* Placeholder for IsIlanlariSayfasi component */}
        {/* Replace with your actual component */}
        {/* <IsIlanlariSayfasi /> */}
      </Container>
    </div>
  );
};

export default JobPage;
