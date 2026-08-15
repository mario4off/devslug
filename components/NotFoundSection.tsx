import Link from "next/link";
import { sora } from "./ui/fonts";
import Image from "next/image";
import PrimaryButton from "./ui/PrimaryButton";
import { NotFoundAction } from "./NotFoundAction";

export default function NotFoundSection() {
  return (
    <section className=" mt-5 px-5">
      <header className="flex flex-col items-center">
        <h1 className={`${sora.className} text-center`}>
          No encontramos este enlace
        </h1>
        <p className="mt-3 text-center text-base md:text-xl ">
          El enlace que estás buscando no existe o ya no está disponible.
        </p>
        <Image
          alt=""
          width={550}
          height={550}
          src="/animations/404-animation.svg"
        ></Image>
      </header>
      <footer className=" flex mt-5 flex-col items-center gap-8">
        <NotFoundAction />
      </footer>
    </section>
  );
}
