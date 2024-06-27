type EducationProps = {
  schoolName: string;
  department: string;
  major: string;
  startDate: string;
  endDate: string;
  country?: string;
  city?: string;
  description?: string;
};

const EducationCard = (props: EducationProps) => {
  return (
    <div className="flex flex-col">
      <p className="font-semibold ">{props.schoolName} </p>
      <p>
        {props.department}
        {props.major}
      </p>
      <p className="text-gray-500">
        {props.startDate} - {props.endDate}
      </p>
      <p className="text-gray-500">
        {props.city},{props.country}
      </p>
      <p>{props.description}</p>
      <hr className="flex-grow my-2 border-gray-300" />
    </div>
  );
};

export default EducationCard;
