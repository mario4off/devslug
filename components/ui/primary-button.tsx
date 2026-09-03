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
          : `text-sm md:text-base bg-slate-950 border-teal-400 border text-white p-3 rounded-md w-fit hover:bg-teal-950 hover:scale-105 transition duration-200 ease-in-out `
      }
    >
      {title}
    </button>
  );
}

export default PrimaryButton;
