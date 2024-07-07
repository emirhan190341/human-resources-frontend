import JobCard from "../components/job/JobCard";

const JobsPage = () => {
  return (
    // TODO: Add recently added jobs with redis
    <div className="flex flex-col justify-center items-center">
      <p className="text-2xl font-semibold pt-5">Open Positions</p>

      <div className="mx-auto mt-5 flex flex-col justify-center items-center border rounded-md">
        <JobCard
          code="270bfa0a-475a-4090-9983-433450d61b78"
          title="Software Engineer"
          location="Turkey, Remote"
          company="Facebook"
          description="Looking for a software engineer with experience in React, Node.js, and Docker."
        />{" "}
        <JobCard
          code="370bfa0a-475a-4090-9983-433450d61b78"
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
