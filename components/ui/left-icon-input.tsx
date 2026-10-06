import { ReactNode, useId } from "react";
import FieldError from "./field-error";

export default function LeftIconInput({
  icon,
  error,
  value,
  placeholder,
  disabled = false,
  onChange,
}: {
  icon?: ReactNode;
  error?: string[];
  value: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const inputId = useId();
  const errorId = `${inputId}-error`;
  const hasError = Boolean(error?.length);

  return (
    <div className="w-full ">
      <div className="flex min-h-10 justify-center w-full">
        <label
          className={`${disabled ? `bg-slate-900 [&_p]:text-gray-600` : "bg-slate-800"}  rounded-l-md p-2 md:p-3 flex gap-2`}
          htmlFor={inputId}
        >
          <span>{icon}</span>
        </label>
        <input
          className={`${disabled ? "bg-zinc-900" : "bg-zinc-200"} text-sm md:text-base truncate rounded-r-md w-full px-5  text-zinc-900`}
          type="text"
          name="url"
          id={inputId}
          placeholder={disabled ? "" : placeholder}
          value={value}
          aria-invalid={hasError || undefined}
          aria-describedby={hasError ? errorId : undefined}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
      <div className="h-1" id={errorId} aria-live="polite">
        {error && <FieldError error={error} />}
      </div>
    </div>
  );
}
