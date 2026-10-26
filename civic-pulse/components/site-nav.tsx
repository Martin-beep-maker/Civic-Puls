import { MapPin } from 'lucide-react'

export function SiteNav() {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between p-5">
      <a href="#" className="flex items-center gap-2 text-xl font-extrabold">
        <span
          aria-hidden="true"
          className="flex size-8 items-center justify-center rounded-lg bg-brand text-brand-foreground"
        >
          C
        </span>
        CivicPulse
      </a>
      <nav aria-label="Main" className="flex items-center gap-6 text-sm font-medium">
        <a href="#reports" className="hidden hover:text-brand md:inline">
          Reports
        </a>
        <a href="#learn" className="hidden hover:text-brand md:inline">
          Civic Learn
        </a>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-primary-foreground">
          <MapPin className="size-3.5" aria-hidden="true" />
          Migori County
        </span>
      </nav>
    </header>
  )
}
