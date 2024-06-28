import { RootState } from "@reduxjs/toolkit/query";
import { useMutation } from "@tanstack/react-query";
import { Controller, FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import InputField from "../InputField";
import MUIModal from "../MUIModal";

interface ProfileFormProps {
  handleClose: () => void;
  open: boolean;
}

type Profile = {
  address?: string;
  country?: string;
  city?: string;
  mobilPhone?: string;
  nationalityId?: string;
  birthYear?: string;
  profilePicture?: string;
  position?: string;
  github?: string;
  linkedin?: string;
  biography?: string;
  website?: string;
  languages?: string[];
  skills?: string[];
};

const ProfileData: Profile = {
  address: "1234 Elm Street",
  country: "USA",
  city: "Springfield",
  mobilPhone: "555-555-5555",
  nationalityId: "123456789",
  birthYear: "1990-01-01",
  profilePicture: "https://example.com/profile.jpg",
  position: "Software Engineer",
  github: "github.com/example",
  linkedin: "linkedin.com/in/example",
  biography: "I am a software engineer",
  website: "example.com",
  languages: ["English", "Spanish"],
  skills: ["React", "Node.js"],
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  background: "linear-gradient(to bottom, #1e293b, #0ea5e9)",
  borderRadius: "20px",
  boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.1)",
  padding: "16px",
  display: "flex",
  flexWrap: "wrap",
};

const ProfileForm = ({ handleClose, open }: ProfileFormProps) => {
  const jobSeeker = useSelector(
    (state: RootState) => state.jobSeeker.jobSeeker
  );

  const addProfile = async (profile: Profile) => {
    if (!jobSeeker || !jobSeeker.id) {
      throw new Error("Job seeker ID is not available");
    }

    const response = await fetch(`http://localhost:8080/api/v1/job-seeker/1`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
      credentials: "include",
    });

    // Log the response status and body
    const responseBody = await response.json();

    if (!response.ok) {
      throw new Error(
        `Network response was not ok: ${response.status} ${responseBody}`
      );
    }

    return JSON.parse(responseBody);
  };

  const methods = useForm<Profile>({
    defaultValues: {
      address: "",
      country: "",
      city: "",
      mobilPhone: "",
      nationalityId: "",
      birthYear: "",
      profilePicture: "",
      position: "",
      github: "",
      linkedin: "",
      biography: "",
      website: "",
      languages: [],
      skills: [],
    },
  });

  const mutation = useMutation({
    mutationFn: addProfile,
    onSuccess: () => {
      toast.success("Profile updated successfully");
      handleClose();
    },
    onError: (error) => {
      console.log("Error updating profile:", error.message);
      toast.error("Failed to update profile");
    },
  });

  const onSubmit = (data: Profile) => {
    console.log("Data before mutation:", data);
    mutation.mutate(data);
  };

  return (
    <MUIModal style={style} open={open} handleClose={handleClose}>
      <FormProvider {...methods}>
        <form
          className="flex flex-col gap-4"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField name="address" placeholder="Address" />
            <InputField name="country" placeholder="Country" />
            <InputField name="city" placeholder="City" />
            <InputField name="mobilPhone" placeholder="Mobile Phone" />
            <InputField name="nationalityId" placeholder="Nationality ID" />
            <InputField
              name="birthYear"
              placeholder="Birth Year (yyyy-mm-dd)"
              rules={{
                pattern: {
                  value: /^\d{4}-\d{2}-\d{2}$/,
                  message: "Please enter a valid date in yyyy-mm-dd format",
                },
              }}
            />
            <InputField
              name="profilePicture"
              placeholder="Profile Picture URL"
            />
            <InputField name="position" placeholder="Position" />
            <InputField name="github" placeholder="GitHub URL" />
            <InputField name="linkedin" placeholder="LinkedIn URL" />
            <InputField name="biography" placeholder="Biography" />
            <InputField name="website" placeholder="Website" />
            <Controller
              name="languages"
              control={methods.control}
              render={({ field }) => (
                <InputField
                  {...field}
                  name="languages"
                  placeholder="Languages (comma separated)"
                />
              )}
            />
            <Controller
              name="skills"
              control={methods.control}
              render={({ field }) => (
                <InputField
                  {...field}
                  name="skills"
                  placeholder="Skills (comma separated)"
                />
              )}
            />
          </div>
          <button
            className="group mt-4 w-32 px-4 font-bold mx-auto bg-gradient-to-r from-green-300 to-purple-300 text-3xl text-transparent bg-clip-text"
            type="submit"
          >
            <span className="group-hover:text-teal-300 transition duration-300 ease-in-out">
              Update
            </span>
          </button>
        </form>
      </FormProvider>
    </MUIModal>
  );
};

export default ProfileForm;
