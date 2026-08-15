import Link from "next/link";
import PrimaryButton from "./ui/PrimaryButton";

export function NotFoundAction() {
  return (
    <>
      <h2 className="text-center ">Acorta una nueva URL en dos clics</h2>
      <Link href="/">
        <PrimaryButton title="Acortar nueva URL" disabled={false} />
      </Link>
    </>
  );
}
