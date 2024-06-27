import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { RootState } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

type JobCardProps = {
  id: string;
  title: string;
  location: string;
  company: string;
  description: string;
};

const JobCard = ({
  id,
  title,
  location,
  company,
  description,
}: JobCardProps) => {
  const jobSeeker = useSelector(
    (state: RootState) => state.jobSeeker.jobSeeker
  );
  return (
    <Card variant="none">
      <CardContent>
        <div className="flex bg-gradient-to-r from-slate-800 to-sky-500 text-transparent bg-clip-text border-2 rounded-md items-center justify-center">
          <div className="p-2">
            <div className="flex gap-2 items-center">
              <Typography variant="h5" component="div">
                {title}
              </Typography>{" "}
              <Typography color={"text.secondary"} component="div">
                ({location})
              </Typography>
            </div>
            <Typography sx={{ mb: 1.5 }} color="text.primary">
              {company}
            </Typography>
            <Typography variant="body2">{description}</Typography>
          </div>
          {jobSeeker && (
            <Link
              to={`/job/${id}`}
              className="text-sky-200 bg-gradient-to-r from-slate-800 to-sky-700 rounded-2xl m-2 px-2 py-1 hover:bg-red-200 hover:text-slate-100"
              style={{ transition: "background-color 0.3s ease" }}
            >
              Apply
            </Link>
          )}
          {!jobSeeker && (
            <Link
              to="/login"
              className="text-sky-200 bg-gradient-to-r from-slate-800 to-sky-700 rounded-2xl m-2 px-2 py-1 hover:bg-red-200 hover:text-slate-100"
              style={{ transition: "background-color 0.3s ease" }}
            >
              Login
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
