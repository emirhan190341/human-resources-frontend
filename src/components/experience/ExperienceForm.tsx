import { useMutation } from "@tanstack/react-query";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import InputField from "../InputField";
import MUIModal from "../MUIModal";

interface ExperienceFormProps {
  handleClose: () => void;
  open: boolean;
  experience?: Experience;
}

type Experience = {
  id: number;
  position: string;
  companyName: string;
  startDate: string;
  endDate: string;
  country: string;
  city: string;
  description: string;
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

const ExperienceForm = ({
  handleClose,
  open,
  experience,
}: ExperienceFormProps) => {
  const jobSeeker = useSelector(
    (state: RootState) => state.jobSeeker.jobSeeker
  );

  const addExperience = async (experience: Experience) => {
    const response = await fetch(
      `http://localhost:8080/api/v1/job-seeker-experience/${jobSeeker.id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(experience),
        credentials: "include",
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const methods = useForm<Experience>({
    defaultValues: experience || {
      id: 0,
      position: "",
      companyName: "",
      startDate: "",
      endDate: "",
      country: "",
      city: "",
      description: "",
    },
  });

  const mutation = useMutation({
    mutationFn: addExperience,
    onSuccess: () => {
      toast.success("Experience added successfully");
      handleClose();
    },
    onError: (error) => {
      console.error("Error adding experience:", error);
    },
  });

  const onSubmit = (data: Experience) => {
    mutation.mutate(data);
  };

  return (
    <MUIModal style={style} open={open} handleClose={handleClose}>
      <FormProvider {...methods}>
        <form
          className="flex flex-col"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <InputField name="positionName" placeholder="Position Name" />
          <InputField name="companyName" placeholder="Company Name" />
          <InputField
            name="startDate"
            placeholder="Start date"
            rules={{
              pattern: {
                value: /^\d{4}-\d{2}-\d{2}$/,
                message: "yyyy-mm-dd format",
              },
            }}
          />
          <InputField name="endDate" placeholder="End date" />
          <InputField name="country" placeholder="Country" />
          <InputField name="city" placeholder="City" />
          <InputField name="description" placeholder="Description" />
          <button
            className="group mt-4 w-32 px-4 font-bold mx-auto  bg-gradient-to-r from-green-300 to-purple-300 text-3xl text-transparent bg-clip-text"
            type="submit"
          >
            <span className="group-hover:text-teal-300 transition duration-300 ease-in-out">
              Create
            </span>
          </button>
        </form>
      </FormProvider>
    </MUIModal>
  );
};

export default ExperienceForm;
