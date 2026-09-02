import Link from "next/link";

export default function SecondaryButton({ text }: { text: string }) {
  return (
    <Link
      href={"/links"}
      className="text-white border text-sm rounded-md px-3 p-2 border-gray-700 bg-gray-950 hover:bg-gray-900 hover:border-gray-600 transition-colors duration-200"
    >
      {text}
    </Link>
  );
}
