import Link from "next/link";
import PrimaryButton from "./ui/primary-button";

export function NotFoundFooter() {
  return (
    <footer className="flex flex-col items-center gap-7">
      <h2 className="text-center ">Acorta una nueva URL en dos clics</h2>
      <Link href="/">
        <PrimaryButton title="Acortar nueva URL" disabled={false} />
      </Link>
    </footer>
  );
}
