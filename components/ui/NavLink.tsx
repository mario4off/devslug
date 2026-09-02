import Link from "next/link";
import LinkSVG from "@/components/ui/icons/link";

export default function SecondaryButton({ text }: { text: string }) {
  return (
    <Link
      href={"/links"}
      aria-label="Mis enlaces"
      className="text-white  border text-sm rounded-md px-3 p-2 border-gray-700 bg-gray-950 hover:bg-gray-900 hover:border-gray-600 transition-colors duration-200"
    >
      <LinkSVG color="white" className="inline sm:hidden"></LinkSVG>
      <span className="hidden sm:inline">{text}</span>
    </Link>
  );
}
