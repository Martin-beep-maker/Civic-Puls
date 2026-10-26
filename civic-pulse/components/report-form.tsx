'use client'

import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { CATEGORIES, COUNTIES, type Category, type Report } from '@/lib/reports'

const fieldClass =
  'w-full rounded-xl border border-input bg-card p-3 outline-none focus-visible:ring-2 focus-visible:ring-ring'

export function ReportForm({
  reportNumber,
  onSubmit,
}: {
  reportNumber: string
  onSubmit: (report: Omit<Report, 'id' | 'status' | 'upvotes' | 'postedAt'>) => string
}) {
  const [error, setError] = useState('')
  const [filedId, setFiledId] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const title = String(data.get('title') ?? '').trim()
    if (!title) {
      setError('Please add a title for your report.')
      return
    }
    const county = String(data.get('county'))
    const id = onSubmit({
      title: title.slice(0, 120),
      category: data.get('category') as Category,
      location: county,
      anonymous: data.get('anonymous') === 'on',
    })
    setError('')
    setFiledId(id)
    form.reset()
  }

  return (
    <section id="report" className="mx-auto max-w-3xl scroll-mt-6 px-5 py-10">
      <div className="rounded-2xl border bg-card p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-bold">Report an Issue</h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Your report becomes public and trackable. ID: #MIG-2025-{reportNumber}
        </p>
        <form onSubmit={handleSubmit} className="grid gap-4" noValidate>
          <div>
            <label htmlFor="title" className="sr-only">
              Title
            </label>
            <input
              id="title"
              name="title"
              maxLength={120}
              placeholder="Title e.g. Broken borehole in God Jope"
              aria-invalid={!!error}
              aria-describedby={error ? 'title-error' : undefined}
              className={fieldClass}
            />
            {error && (
              <p id="title-error" className="mt-1.5 text-sm text-brand">
                {error}
              </p>
            )}
          </div>
          <div className="grid grid-cols-2 gap-3">
            <label className="sr-only" htmlFor="category">
              Category
            </label>
            <select id="category" name="category" className={fieldClass}>
              {CATEGORIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <label className="sr-only" htmlFor="county">
              County
            </label>
            <select id="county" name="county" className={fieldClass}>
              {COUNTIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
          <label htmlFor="description" className="sr-only">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            maxLength={1000}
            placeholder="Describe issue..."
            className={`${fieldClass} h-24 resize-y`}
          />
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" name="anonymous" className="size-4 accent-primary" />
            Post as Anonymous
          </label>
          <button
            type="submit"
            className="rounded-xl bg-brand py-3 font-bold text-brand-foreground transition-opacity hover:opacity-90"
          >
            Submit Public Report
          </button>
          <p role="status" aria-live="polite" className="text-sm">
            {filedId && (
              <span className="flex items-center gap-2 rounded-lg bg-success/10 p-3 font-medium text-success">
                <CheckCircle2 className="size-4" aria-hidden="true" />
                Report filed! ID #{filedId} is now in the public feed.
              </span>
            )}
          </p>
        </form>
      </div>
    </section>
  )
}
