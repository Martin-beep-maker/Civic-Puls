'use client'

import { ChevronUp, MapPin } from 'lucide-react'
import { StatusBadge } from '@/components/status-badge'
import { cn } from '@/lib/utils'
import type { Report } from '@/lib/reports'

export function ReportFeed({
  reports,
  upvoted,
  onUpvote,
}: {
  reports: Report[]
  upvoted: Set<string>
  onUpvote: (id: string) => void
}) {
  return (
    <section id="reports" className="mx-auto max-w-7xl scroll-mt-6 px-5 py-10">
      <h2 className="mb-6 text-3xl font-extrabold">Public Feed - Latest Reports</h2>
      <ul className="grid gap-5 md:grid-cols-3">
        {reports.map((r) => {
          const isUpvoted = upvoted.has(r.id)
          return (
            <li key={r.id} className="flex flex-col rounded-xl border bg-card p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="rounded-md bg-muted px-2 py-1 text-xs">{r.category}</span>
                <StatusBadge status={r.status} />
              </div>
              <h3 className="mt-3 font-bold">{r.title}</h3>
              <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="size-3" aria-hidden="true" />
                {r.location}
                {r.anonymous && ' • Anonymous'}
              </p>
              <div className="mt-auto flex items-center justify-between pt-4 text-sm">
                <button
                  type="button"
                  onClick={() => onUpvote(r.id)}
                  aria-pressed={isUpvoted}
                  aria-label={`${isUpvoted ? 'Remove upvote from' : 'Upvote'} ${r.title}`}
                  className={cn(
                    'flex items-center gap-1 rounded-lg border px-2.5 py-1 font-medium transition-colors',
                    isUpvoted ? 'border-primary bg-primary text-primary-foreground' : 'hover:bg-muted',
                  )}
                >
                  <ChevronUp className="size-4" aria-hidden="true" />
                  {r.upvotes} {r.upvotes === 1 ? 'upvote' : 'upvotes'}
                </button>
                <span className="text-muted-foreground">
                  #{r.id} • {r.postedAt}
                </span>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
