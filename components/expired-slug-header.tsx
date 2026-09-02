import Image from "next/image";
import { sora } from "./ui/fonts";

export function ExpiredSlugHeader() {
  return (
    <>
      <p className="mt-4 text-center text-base md:text-xl ">
        Han pasado más de 7 días desde que creaste el enlace y ha caducado
      </p>
      <Image
        alt=""
        width={550}
        height={550}
        src="/animations/session-expired.svg"
        className="my-14"
      ></Image>
    </>
  );
}
