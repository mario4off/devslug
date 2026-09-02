import { SkeletonUrlsTable } from "@/components/SkeletonUrlsTable";
import UrlsTable from "@/components/UrlsTable";
import { verifySession } from "@/lib/dal";
import { getUrlsByUserId } from "@/repositories/url.repository";
import { Suspense } from "react";

export default async function Page() {
  const user = await verifySession();

  const urlsPromise = (async () => {
    await new Promise((resolve) => setTimeout(resolve, 1_000));

    return getUrlsByUserId(user?.id);
  })();

  return (
    <section className="mx-2 mt-2">
      <div className="my-8">
        <Suspense fallback={<SkeletonUrlsTable />}>
          <UrlsTable urlsPromise={urlsPromise} />
        </Suspense>
      </div>
    </section>
  );
}
