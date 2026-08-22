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

export default function UrlsTable({ urls }: { urls: Url[] }) {
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
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((group) => (
          <TableRow key={group.id}>
            {group.headers.map((header) => (
              <TableHead className="text-white font-extrabold" key={header.id}>
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
            <TableRow key={url.id}>
              <TableCell className="text-white">{url.originalUrl}</TableCell>
              <TableCell className="text-white">{url.slug}</TableCell>
              <TableCell className="text-white">
                {url.createdAt.toLocaleDateString("es-ES")}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
