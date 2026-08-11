import Image from "next/image";
import { sora } from "@/components/ui/fonts";

export default async function NotFound({
  searchParams,
}: {
  searchParams: Promise<{ reason?: string }>;
}) {
  const { reason } = await searchParams;

  console.log("Esta es la razon del not-found: ", reason);

  if (reason === "expired") {
    return (
      <section>
        <h1 className={`${sora.className} `}>La URL ha caducado</h1>
      </section>
    );
  } else {
    return (
      <section className="flex flex-col items-center">
        <h1 className={`${sora.className} `}>No encontramos este enlace</h1>
        <Image
          alt=""
          width={500}
          height={500}
          src="/animations/404-animation.svg"
        ></Image>
      </section>
    );
  }
}
