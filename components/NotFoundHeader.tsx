import { sora } from "./ui/fonts";
import Image from "next/image";

export default function NotFoundHeader() {
  return (
    <>
      <p className="mt-3 text-center text-base md:text-xl ">
        El enlace que estás buscando no existe o ya no está disponible.
      </p>
      <Image
        alt=""
        width={550}
        height={550}
        src="/animations/404-animation.svg"
      ></Image>
    </>
  );
}
