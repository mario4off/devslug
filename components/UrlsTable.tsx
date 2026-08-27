"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Url } from "@/lib/generated/prisma/client";

import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Search,
} from "lucide-react";

import {
  rowSortingFeature,
  createSortedRowModel,
  sortFn_alphanumeric,
  sortFn_text,
  useTable,
  tableFeatures,
  rowPaginationFeature,
  createPaginatedRowModel,
  createColumnHelper,
} from "@tanstack/react-table";
import { use } from "react";

const features = tableFeatures({
  rowSortingFeature,
  rowPaginationFeature,
  sortedRowModel: createSortedRowModel(),
  paginatedRowModel: createPaginatedRowModel(),
  sortFns: {
    alphanumeric: sortFn_alphanumeric,
    text: sortFn_text,
  },
});

const columnHelper = createColumnHelper<typeof features, Url>();
const columns = columnHelper.columns([
  columnHelper.accessor("originalUrl", {
    header: "URL Original",
    cell: (info) => (
      <p className="truncate" title={info.getValue()}>
        {info.getValue()}
      </p>
    ),
  }),
  columnHelper.accessor("slug", {
    header: "Slug",
    cell: (info) => (
      <p
        className="rounded bg-teal-500/10 w-fit px-2 py-1 text-sm text-teal-400"
        title={info.getValue()}
      >
        {info.getValue()}
      </p>
    ),
  }),
  columnHelper.accessor("createdAt", {
    header: "Fecha de Creación",
    cell: (info) => (
      <code className=" px-2 py-1 text-sm">
        {info.getValue().toLocaleDateString("es-ES")}
      </code>
    ),
  }),
]);

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
    enableSortingRemoval: false,
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 10,
      },
    },
  });

  return (
    <div className="bg-zinc-950  border-zinc-800 border rounded-md p-8  ">
      <h2>Mis URLs</h2>
      <p className=" text-xs text-zinc-400 sm:hidden">
        Desliza la tabla para ver más →
      </p>
      <Table className="mt-5">
        <TableHeader>
          {table.getHeaderGroups().map((group) => (
            <TableRow key={group.id}>
              {group.headers.map((header) => {
                const sorted = header.column.getIsSorted();
                const SortIcon =
                  sorted === "asc"
                    ? ArrowUp
                    : sorted == "desc"
                      ? ArrowDown
                      : ArrowUpDown;

                return (
                  <TableHead
                    className="bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-zinc-400"
                    key={header.id}
                  >
                    {header.isPlaceholder ? null : (
                      <button
                        type="button"
                        className="flex w-full items-center gap-2 text-left hover:text-white transition duration-200 ease-in-out"
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        <table.FlexRender header={header} />
                        <SortIcon className="" />
                      </button>
                    )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length === 0 ? (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No tienes URLs acortadas todavía.
              </TableCell>
            </TableRow>
          ) : (
            table.getRowModel().rows.map((row) => (
              <TableRow className="h-12 border-white/10" key={row.id}>
                {row.getAllCells().map((cell) => (
                  <TableCell
                    className=" max-w-[250px] px-4 py-3 text-zinc-300"
                    key={cell.id}
                  >
                    <table.FlexRender cell={cell} />
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      <div className="px-8 mt-7 flex gap-6 justify-center text-sm md:text-base">
        <button
          className="flex items-center ga-2 disabled:opacity-40"
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronsLeft color="#ffff" />
          <span className=" sr-only">Ir a la primera página</span>
        </button>
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
        <button
          className=" flex items-center gap-2 disabled:opacity-40"
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}
        >
          <span className="sr-only">Ir a la última página</span>
          <ChevronsRight color="#ffff" />
        </button>
      </div>
    </div>
  );
}
