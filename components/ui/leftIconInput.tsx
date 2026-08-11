import { ReactNode } from "react";
import FieldError from "./FieldError";

export default function LeftIconInput({
  icon,
  error,
  value,
  onChange,
}: {
  icon: ReactNode;
  error?: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="w-full">
      <div className="flex justify-center w-full">
        <label
          className="bg-slate-800 text-white rounded-l-md p-3 flex gap-2"
          htmlFor="url"
        >
          <span>{icon}</span>
        </label>
        <input
          className=" truncate rounded-r-md w-full px-5"
          type="text"
          name="url"
          id="url"
          placeholder="Pega aquí la URL"
          value={value}
          onChange={onChange}
        />
      </div>
      <div className="h-1">{error && <FieldError error={error} />}</div>
    </div>
  );
}
