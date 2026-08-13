import { Skeleton } from "@/components/ui/skeleton"

export function SectionSkeleton() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-24 md:px-8">
      <Skeleton className="mb-3 h-3 w-24" />
      <Skeleton className="mb-8 h-9 w-64" />
      <div className="grid gap-4 md:grid-cols-2">
        <Skeleton className="h-44 rounded-2xl" />
        <Skeleton className="h-44 rounded-2xl" />
      </div>
    </div>
  )
}
