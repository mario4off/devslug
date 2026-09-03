import Link from "next/link";

export default function SecondaryButton({
  route,
  text,
  children,
}: {
  route: string;
  text: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={route}
      aria-label="Mis enlaces"
      className="text-white flex items-center border text-sm rounded-md md:px-3 p-2 border-gray-700 bg-gray-950 hover:bg-gray-900 hover:border-gray-600 transition-colors duration-200"
    >
      {children}
      <span className="hidden sm:inline">{text}</span>
    </Link>
  );
}
