import Image from "next/image";
import { sora } from "@/components/ui/fonts";
import NotFoundSection from "@/components/NotFoundSection";

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
    return <NotFoundSection />;
  }
}
