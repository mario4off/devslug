"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

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
  columnFilteringFeature,
  columnSizingFeature,
  globalFilteringFeature,
  createFilteredRowModel,
  filterFn_includesString,
} from "@tanstack/react-table";
import { use, useState } from "react";
import Image from "next/image";
import { actions } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const features = tableFeatures({
  rowSortingFeature,
  rowPaginationFeature,
  columnFilteringFeature,
  globalFilteringFeature,
  columnSizingFeature,
  filteredRowModel: createFilteredRowModel(),
  sortedRowModel: createSortedRowModel(),
  paginatedRowModel: createPaginatedRowModel(),
  sortFns: {
    alphanumeric: sortFn_alphanumeric,
    text: sortFn_text,
  },
  filterFns: { includesString: filterFn_includesString },
});

const columnHelper = createColumnHelper<typeof features, Url>();

export default function UrlsTable({
  urlsPromise,
}: {
  urlsPromise: Promise<Url[]>;
}) {
  const columns = columnHelper.columns([
    columnHelper.accessor("originalUrl", {
      header: "URL Original",
      size: 10,
      cell: (info) => (
        <Tooltip>
          <TooltipTrigger asChild>
            <p className="truncate text-zinc-300" title={info.getValue()}>
              {info.getValue()}
            </p>
          </TooltipTrigger>
          <TooltipContent className="bg-zinc-900 px-3 py-2 border rounded-md  border-zinc-800">
            <p title={info.getValue()}>{info.getValue()}</p>
          </TooltipContent>
        </Tooltip>
      ),
    }),
    columnHelper.accessor("slug", {
      header: "Slug",
      size: 80,
      cell: (info) => (
        <code
          className="rounded bg-teal-500/10 w-fit px-2 py-1 text-sm text-teal-400"
          title={info.getValue()}
        >
          {info.getValue()}
        </code>
      ),
    }),
    columnHelper.accessor((row) => row.createdAt.toLocaleDateString("es-ES"), {
      header: "Fecha de Creación",
      size: 80,
      cell: (info) => (
        <p className=" px-2 py-1 text-sm text-zinc-300">{info.getValue()}</p>
      ),
    }),
    columnHelper.display({
      id: "actions",
      size: 25,
      cell: ({ row }) => (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button
              type="button"
              className="rounded-md transition-colors hover:bg-zinc-900 p-2"
            >
              <Image
                className="min-w-5 "
                src="/icons/delete.svg"
                height={20}
                width={20}
                alt="delete"
              />
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-zinc-950 border-zinc-800">
            <AlertDialogHeader>
              <AlertDialogTitle>¿Eliminar esta URL?</AlertDialogTitle>
              <AlertDialogDescription>
                Esta acción no se puede deshacer.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction
                onClick={async () => handleDelete(row.original.id)}
              >
                Continuar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      ),
    }),
  ]);
  const initialUrls = use(urlsPromise);
  const [urls, setUrls] = useState(initialUrls);
  const table = useTable({
    features,
    columns,
    data: urls,
    globalFilterFn: "includesString",
    enableSortingRemoval: false,
    autoResetPageIndex: false,
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 10,
      },
    },
  });

  async function handleDelete(urlId: number) {
    await actions.url.deleteUrlAction(urlId);
    if (table.getRowModel().rows.length === 1) {
      table.previousPage();
    }
    setUrls((currentUrls) => currentUrls.filter((url) => url.id !== urlId));
  }

  return (
    <div className="bg-zinc-950  border-zinc-800 border rounded-md p-6 px-8  ">
      <div className="flex flex-col gap-3 sm:flex-row justify-between">
        <h2 className="text-4xl font-semibold">Mis URLs</h2>
        <p className=" text-xs text-zinc-400 sm:hidden">
          Desliza la tabla para ver más →
        </p>
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-zinc-500"></Search>
          <input
            value={table.state.globalFilter ?? ""}
            type="search"
            className={`w-full sm-auto px-10 p-2 rounded-md border bg-zinc-950 text-white outline-none transition-colors ${
              table.state.globalFilter
                ? "border-zinc-200"
                : "border-zinc-800 hover:border-zinc-200"
            }`}
            onChange={(e) => table.setGlobalFilter(String(e.target.value))}
            placeholder="Buscar..."
          />
        </div>
      </div>
      <Table className="mt-5">
        <TableHeader>
          {table.getHeaderGroups().map((group) => (
            <TableRow key={group.id}>
              {group.headers.map((header) => {
                const canSort = header.column.getCanSort();
                const sorted = header.column.getIsSorted();
                const SortIcon =
                  sorted === "asc"
                    ? ArrowUp
                    : sorted == "desc"
                      ? ArrowDown
                      : ArrowUpDown;

                return (
                  <TableHead
                    className="bg-white/5 px-4 py-3 text-xs font-semibold uppercase -wide text-zinc-400"
                    key={header.id}
                  >
                    {header.isPlaceholder ? null : (
                      <button
                        type="button"
                        className="flex w-full items-center gap-2 text-left hover:text-white transition duration-200 ease-in-out"
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        <table.FlexRender header={header} />

                        {canSort && <SortIcon className="shrink-0" />}
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
              <TableRow className="h-12  border-white/10" key={row.id}>
                {row.getAllCells().map((cell) => (
                  <TableCell
                    style={{ width: `${cell.column.getSize()}px` }}
                    className="max-w-[300px] md:max-w-[700px] px-4 py-3 text-zinc-300"
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
          <ChevronsLeft color="white" />
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
          <ChevronsRight color="white" />
        </button>
      </div>
    </div>
  );
}
