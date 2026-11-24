import { NotFoundFooter } from "@/components/not-found-footer";
import { sora } from "@/components/ui/fonts";

export default function StatusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <header className="flex flex-col  items-center">
        <h1 className={`${sora.className} mt-10  text-center`}>
          No encontramos este enlace
        </h1>
        {children}
      </header>

      <NotFoundFooter />
    </section>
  );
}
