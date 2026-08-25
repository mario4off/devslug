import { SkeletonUrlsTable } from "@/components/SkeletonUrlsTable";
import UrlsTable from "@/components/UrlsTable";
import { verifySession } from "@/lib/dal";
import { getUrlsByUserId } from "@/repositories/url.repository";
import { Suspense } from "react";

export default async function SignInPage() {
  const user = await verifySession();

  const urlsPromise = (async () => {
    await new Promise((resolve) => setTimeout(resolve, 5_000));

    return getUrlsByUserId(user?.id);
  })();

  return (
    <section className="mx-2">
      <header>
        <h1>Hola, {user.name}</h1>
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
