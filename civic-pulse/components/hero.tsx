import { Construction, Droplets, Hospital } from 'lucide-react'
import { StatusBadge } from '@/components/status-badge'
import type { ReportStatus } from '@/lib/reports'

const highlights: { icon: typeof Construction; label: string; status: ReportStatus; tone: string }[] = [
  { icon: Construction, label: 'Broken Bridge - Uriri', status: 'Pending', tone: 'bg-brand/5' },
  { icon: Droplets, label: 'Water Shortage - Suna', status: 'In Review', tone: 'bg-warning/10' },
  { icon: Hospital, label: 'Clinic Fixed - Rongo', status: 'Fixed', tone: 'bg-success/10' },
]

export function Hero({ reportCount }: { reportCount: number }) {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 md:grid-cols-2">
      <div>
        <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-bold text-success">
          MKSU HACKFEST 2025 • GOVERNANCE TRACK
        </span>
        <h1 className="mt-4 text-balance text-4xl font-extrabold leading-[1.1] md:text-5xl">
          Fix Your County.
          <br />
          <span className="text-brand">Track Every Shilling.</span>
        </h1>
        <p className="mt-4 text-pretty text-lg text-muted-foreground">
          Report broken roads, water, health facilities in Migori. Track county response. Learn your
          rights. Public, transparent, upvotable.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#report"
            className="rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Report Now
          </a>
          <a
            href="#reports"
            className="rounded-xl border bg-card px-6 py-3 font-bold transition-colors hover:bg-muted"
          >
            View Reports ({reportCount.toLocaleString()})
          </a>
        </div>
        <dl className="mt-8 flex gap-8 text-sm">
          {[
            [reportCount.toLocaleString(), 'Reports Filed'],
            ['89%', 'Response'],
            ['12', 'Counties'],
          ].map(([value, label]) => (
            <div key={label} className="flex flex-col-reverse">
              <dt className="text-muted-foreground">{label}</dt>
              <dd className="text-xl font-bold">{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="rounded-3xl border bg-card p-4 shadow-xl">
        <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-xl bg-primary text-center text-primary-foreground">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:32px_32px]"
          />
          <span aria-hidden="true" className="absolute left-20 top-20 size-3 animate-ping rounded-full bg-brand" />
          <span aria-hidden="true" className="absolute bottom-20 right-32 size-3 animate-ping rounded-full bg-success" />
          <span aria-hidden="true" className="absolute right-16 top-14 size-3 animate-ping rounded-full bg-warning" />
          <p className="relative font-bold">
            LIVE MAP • MIGORI, KISUMU, KISII
            <span className="mt-1 block text-xs font-normal opacity-70">● 3 new reports in last hour</span>
          </p>
        </div>
        <ul className="mt-4 flex flex-col gap-2">
          {highlights.map(({ icon: Icon, label, status, tone }) => (
            <li key={label} className={`flex items-center justify-between rounded-lg p-3 text-sm ${tone}`}>
              <span className="flex items-center gap-2">
                <Icon className="size-4" aria-hidden="true" />
                {label}
              </span>
              <StatusBadge status={status} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
