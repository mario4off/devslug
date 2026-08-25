"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Url } from "@/lib/generated/prisma/client";

import {
  useTable,
  tableFeatures,
  rowPaginationFeature,
  createPaginatedRowModel,
} from "@tanstack/react-table";
import { use } from "react";

const features = tableFeatures({
  rowPaginationFeature,
  paginatedRowModel: createPaginatedRowModel(),
});

const columns = [
  {
    accessorKey: "originalUrl",
    header: "URL Original",
  },
  {
    accessorKey: "slug",
    header: "Slug",
  },
  {
    accessorKey: "createdAt",
    header: "Fecha de Creación",
  },
];

export default function UrlsTable({
  urlsPromise,
}: {
  urlsPromise: Promise<Url[]>;
}) {
  const urls = use(urlsPromise);
  const table = useTable({
    features,
    columns,
    data: urls,

    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 10,
      },
    },
  });

  return (
    <div className="bg-zinc-950 md:w-auto border-zinc-800 border rounded-md p-8  ">
      <h2>Mis URLs</h2>
      <Table className="mt-5">
        <TableHeader>
          {table.getHeaderGroups().map((group) => (
            <TableRow key={group.id}>
              {group.headers.map((header) => (
                <TableHead
                  className="bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-zinc-400"
                  key={header.id}
                >
                  {header.isPlaceholder ? null : (
                    <table.FlexRender header={header} />
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => {
            const url = row.original;

            return (
              <TableRow className="h-12 border-white/10" key={url.id}>
                <TableCell className="max-w-[250px] px-4 py-3 text-zinc-300">
                  <p className="truncate" title={url.originalUrl}>
                    {url.originalUrl}
                  </p>
                </TableCell>
                <TableCell className="px-4 py-3">
                  <code className="rounded bg-teal-500/10 px-2 py-1 text-sm text-teal-400">
                    {url.slug}
                  </code>
                </TableCell>
                <TableCell className="px-4 py-3 text-zinc-400">
                  {url.createdAt.toLocaleDateString("es-ES")}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <div className="px-8 mt-6 flex flex-col items-center justify-between ">
        <div className="flex gap-12">
          <button
            className="text-white disabled:opacity-40"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Anterior
          </button>
          <p className="text-zinc-400">
            Página {table.state.pagination.pageIndex + 1} de{" "}
            {table.getPageCount()}
          </p>
          <button
            className="text-white disabled:opacity-40"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}
