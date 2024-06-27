import JobCard from "../components/job/JobCard";

const JobsPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-2xl font-semibold pt-5">Open Positions</p>

      <div className="mx-auto mt-5 flex flex-col justify-center items-center border rounded-md">
        <JobCard
          id="1"
          title="Software Engineer"
          location="Turkey, Remote"
          company="Facebook"
          description="Looking for a software engineer with experience in React, Node.js, and Docker."
        />{" "}
        <JobCard
          id="2"
          title="Software Engineer"
          location="Turkey, Remote"
          company="Facebook"
          description="Looking for a software engineer with experience in React, Node.js, and Docker."
        />{" "}
      </div>
    </div>
  );
};

export default JobsPage;
