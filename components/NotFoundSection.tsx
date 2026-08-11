import Link from "next/link";
import { sora } from "./ui/fonts";
import Image from "next/image";
import PrimaryButton from "./ui/PrimaryButton";

export default function NotFoundSection() {
  return (
    <section className=" mt-5">
      <header className="flex flex-col items-center">
        <h1 className={`${sora.className} text-center`}>
          No encontramos este enlace
        </h1>
        <p className="mt-3 text-center text-base md:text-xl">
          El enlace que estás buscando no existe o ya no está disponible.
        </p>
        <Image
          alt=""
          width={550}
          height={550}
          src="/animations/404-animation.svg"
        ></Image>
      </header>
      <footer className=" flex mt-8 flex-col items-center gap-8">
        <h2 className="text-center">Acorta una nueva URL en dos clics</h2>
        <Link href="/">
          <PrimaryButton title="Acortar nueva URL" disabled={false} />
        </Link>
      </footer>
    </section>
  );
}
