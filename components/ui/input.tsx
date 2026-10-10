import { ReactNode, useId } from "react";
import FieldError from "./field-error";

export default function Input({
  error,
  placeholder,
  value,
  disabled = false,
  onChange,
}: {
  error?: string[];
  placeholder?: string;
  value: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const inputId = useId();
  const errorId = `${inputId}-error`;
  const hasError = Boolean(error?.length);

  return (
    <div className="w-full ">
      <div className="flex min-h-9 md:min-h-12 justify-center w-full">
        <label htmlFor={inputId}></label>
        <input
          className={`${disabled ? "bg-zinc-950" : "bg-zinc-200"} text-sm md:text-base transition duration-200  truncate rounded-md w-full px-5  text-zinc-900`}
          type="text"
          name="url"
          id={inputId}
          onChange={onChange}
          value={value}
          placeholder={disabled ? "" : placeholder}
          aria-invalid={hasError || undefined}
          aria-describedby={hasError ? errorId : undefined}
          disabled={disabled}
        />
      </div>
      <div className="h-1" id={errorId} aria-live="polite">
        {error && <FieldError error={error} />}
      </div>
    </div>
  );
}
