import { ReactNode } from "react";
import FieldError from "./field-error";

export default function LeftIconInput({
  icon,
  error,
}: {
  icon: ReactNode;
  error?: string[];
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
          className=" truncate rounded-r-md w-full"
          type="text"
          name="url"
          id="url"
          placeholder="Pega aquí la URL"
        />
      </div>
      <div className="h-1">{error && <FieldError error={error} />}</div>
    </div>
  );
}
