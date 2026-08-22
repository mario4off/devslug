import { auth } from "@/auth";
import { SkeletonUrlsTable } from "@/components/SkeletonUrlsTable";
import UrlsTable from "@/components/UrlsTable";
import { getUrlsByUserId } from "@/services/url.service";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function SignInPage() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/sign-in");
  }
  const userId = session?.user?.id;
  const urlsPromise = (async () => {
    await new Promise((resolve) => setTimeout(resolve, 10_000));

    return getUrlsByUserId(userId);
  })();

  return (
    <section className="mx-2">
      <header>
        <h1>Hola, {session?.user?.name}</h1>
      </header>
      <div className="my-12">
        <h2>Mis URLs</h2>
        <Suspense fallback={<SkeletonUrlsTable />}>
          <UrlsTable urlsPromise={urlsPromise} />
        </Suspense>
      </div>
    </section>
  );
}
