import { cn } from '@/lib/utils'
import type { ReportStatus } from '@/lib/reports'

const styles: Record<ReportStatus, string> = {
  Pending: 'bg-brand text-brand-foreground',
  'In Review': 'bg-warning text-white',
  Fixed: 'bg-success text-white',
}

export function StatusBadge({ status, className }: { status: ReportStatus; className?: string }) {
  return (
    <span className={cn('rounded-md px-2 py-0.5 text-xs font-semibold', styles[status], className)}>
      {status}
    </span>
  )
}
