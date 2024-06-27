import { useMemo } from "react";

type useFormattedDateTypeProps = {
  dateString: string;
};

const useFormattedDate = ({ dateString }: useFormattedDateTypeProps) => {
  const formattedDate = useMemo(() => {
    const date = new Date(dateString);
    return date.toLocaleDateString("tr-TR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  }, [dateString]);

  return formattedDate;
};

export default useFormattedDate;
