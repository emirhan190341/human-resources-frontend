import { CardContent } from "@/components/ui/card";
import { useState } from "react";
import { FaLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

type JobDetailsProps = {
  position: string;
  activationTime: string;
  workType: string;
};

const jobDetails: JobDetailsProps = {
  position: "Software Engineer",
  activationTime: "2022-01-01",
  workType: "Full-time",
};

const JobApplyPage = () => {
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [coverLetter, setCoverLetter] = useState("");

  const handleClick = () => {
    // Handle the apply click
  };

  return (
    <div>
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

      <div className="container mx-auto mt-10 max-w-6xl">
        <Link to="/job/1" className="inline-block">
          <div className="flex items-center gap-2 justify-center">
            <FaLeftLong className="h-6 w-6 text-black" />
            <span className="font-bold">Back to job page</span>
          </div>
        </Link>

        <form>
          <div className="flex flex-col gap-7 mb-20 mt-20">
            <div className="font-bold">Basic Info</div>
            <div className="form-control">
              <label className="form-label">Full name</label>
              <input
                className="input"
                onChange={(e) => setFirstname(e.target.value)}
                value={firstname}
                placeholder="First name"
                required
              />

              <label className="form-label mt-7">Email</label>
              <input
                className="input"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email"
                required
              />

              <label className="form-label mt-7">Phone</label>
              <input
                className="input"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                placeholder="Phone"
                required
              />
            </div>
          </div>
        </form>

        <div className="w-full bg-gray-300 h-px my-4"></div>

        <div className="flex flex-col gap-4">
          <div className="font-bold">Cover Letter</div>
          <textarea
            className="textarea"
            onChange={(e) => setCoverLetter(e.target.value)}
            value={coverLetter}
            placeholder="Here is a sample placeholder"
          />
        </div>
      </div>

      <div className="container mx-auto mt-10 mb-10 max-w-xs">
        <button
          onClick={handleClick}
          className="w-full text-white bg-red-500 hover:bg-red-600 py-2 px-4 rounded"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default JobApplyPage;
