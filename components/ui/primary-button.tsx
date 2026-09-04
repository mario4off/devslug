function PrimaryButton({
  title,
  type = "button",
  disabled = true,
}: {
  title: string;
  type?: "submit" | "button";
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={
        disabled
          ? "bg-gray-900 border-slate-800 border text-gray-400 px-3 p-2 rounded-md w-fit text-sm md:text-base"
          : `primary-button`
      }
    >
      {title}
    </button>
  );
}

export default PrimaryButton;
