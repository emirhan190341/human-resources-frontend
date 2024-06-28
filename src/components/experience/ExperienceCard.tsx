type ExperienceProps = {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  country?: string;
  city?: string;
  description?: string;
};

const ExperienceCard = (props: ExperienceProps) => {
  return (
    <div className="flex flex-col">
      <p className="font-semibold ">{props.position} </p>
      <p>Codlean</p>
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

export default ExperienceCard;
