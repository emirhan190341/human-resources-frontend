import React from "react";
import { useFormContext, Controller } from "react-hook-form";

interface InputFieldProps {
  name: string;
  placeholder: string;
  type?: string;
  rules?: any;
  disabled?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  placeholder,
  type,
  rules,
  disabled,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex items-center w-full flex-wrap gap-1">
      <div className="w-full font-bold ">{placeholder}:</div>
      <Controller
        rules={{ required: true, ...rules }}
        name={name}
        control={control}
        render={({ field }) => (
          <input
            className="border p-1 m-1 w-full rounded-xl shadow-lg  bg-gradient-to-tr from- focus:outline-none focus:ring-2 focus:ring-blue-600"
            {...field}
            placeholder={placeholder}
            type={type}
            disabled={disabled}
          />
        )}
      />
      {errors[name] && (
        <span className="text-red-500">{errors[name].message}</span>
      )}
    </div>
  );
};

export default InputField;
