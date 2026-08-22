import { auth } from "@/auth";
import UrlsTable from "@/components/UrlsTable";
import { getUrlsByUserId } from "@/services/url.service";

import {
  useTable,
  tableFeatures,
  rowPaginationFeature,
  createPaginatedRowModel,
} from "@tanstack/react-table";
import { Suspense } from "react";

export default async function SignInPage() {
  const features = tableFeatures({
    rowPaginationFeature,
    paginatedRowModel: createPaginatedRowModel(),
  });

  const session = await auth();

  const userId = session?.user?.id;

  const urls = userId ? await getUrlsByUserId(userId) : [];

  return (
    <section className="mx-2">
      <header>
        <h1>Hola, {session?.user?.name}</h1>
      </header>
      <div className="my-12">
        <h2>Mis URLs</h2>
        <UrlsTable urls={urls} />
      </div>
    </section>
  );
}
