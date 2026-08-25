import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonUrlsTable() {
  return (
    <div className="bg-zinc-950 md:w-auto border-zinc-800 border rounded-md p-8  ">
      {Array.from({ length: 10 }).map((_, index) => (
        <div className="flex w-full mt-10 gap-4" key={index}>
          <Skeleton className="h-5 w-2/4" />
          <Skeleton className="h-5 w-1/3" />
          <Skeleton className="h-5 w-1/3" />
        </div>
      ))}
    </div>
  );
}
