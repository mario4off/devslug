import { ExpiredSlugHeader } from "@/components/expired-slug-header";
import { NotFoundFooter } from "@/components/not-found-footer";
import NotFoundHeader from "@/components/not-found-header";
import { sora } from "@/components/ui/fonts";

export default async function NotFound({
  searchParams,
}: {
  searchParams: Promise<{ reason?: string }>;
}) {
  const { reason } = await searchParams;

  console.log("Esta es la razon del not-found: ", reason);

  let headerContent!: React.ReactNode;

  if (reason === "expired") {
    headerContent = <ExpiredSlugHeader />;
  } else {
    headerContent = <NotFoundHeader />;
  }

  return (
    <section>
      <header className="flex flex-col items-center">
        <h1 className={`${sora.className} text-center`}>
          No encontramos este enlace
        </h1>{" "}
        {headerContent}
      </header>

      <NotFoundFooter />
    </section>
  );
}
