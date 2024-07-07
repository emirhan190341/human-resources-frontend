export type StyleProps = {
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

export type Experience = {
  id: number;
  position: string;
  companyName: string;
  startDate: string;
  endDate: string;
  country: string;
  city: string;
  description: string;
};

export type EducationProps = {
  schoolName: string;
  department: string;
  major: string;
  startDate: string;
  endDate: string;
  country?: string;
  city?: string;
  description?: string;
};

export type Education = {
  id: number;
  schoolName: string;
  department: string;
  startDate: string;
  endDate: string;
  country: string;
  city: string;
  description: string;
};

export type ExperienceProps = {
  position: string;
  companyName: string;
  startDate: string;
  endDate: string;
  country?: string;
  city?: string;
  description?: string;
};

export type Profile = {
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

export type ExperienceListProps = {
  id: number;
  position: string;
  companyName: string;
  startDate: string;
  endDate: string;
  country: string;
  city: string;
  description: string;
};

export type JobDetailsProps = {
  code: string;
  position: string;
  activationTime: string;
  workType: string;
  jobDescription: string;
  todo: string[];
  requirements: string[];
};
