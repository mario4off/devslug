function PrimaryButton({
  title,
  type = "button",
}: {
  title: string;
  type?: "submit" | "button";
}) {
  return (
    <button
      type={type}
      className="bg-slate-950 border-teal-400 border text-white p-3 rounded-md w-fit hover:bg-teal-950 hover:scale-105 transition duration-300 ease-in-out "
    >
      {title}
    </button>
  );
}

export default PrimaryButton;
