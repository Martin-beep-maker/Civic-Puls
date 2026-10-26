'use client'

import { useState } from 'react'
import { Bot, ChevronDown } from 'lucide-react'

const topics = [
  {
    title: 'What does an MCA do?',
    summary: 'MCA approves county budget, oversight, representation. 2 min read.',
    cta: 'Take Quiz',
    detail:
      'Members of County Assembly (MCAs) represent their ward, pass county laws, approve the county budget and oversee the executive. Quick check: who approves the county budget? Answer: the County Assembly.',
  },
  {
    title: 'How does the County Budget work?',
    summary: "Where Migori's billions go. Track every shilling.",
    cta: 'Learn',
    detail:
      'The county executive prepares the budget estimates, citizens give input through public participation, and the County Assembly approves them. The Controller of Budget then authorises withdrawals.',
  },
  {
    title: 'How to report to EACC?',
    summary: 'Steps to report corruption anonymously.',
    cta: 'Guide',
    detail:
      'You can report to the Ethics and Anti-Corruption Commission online, by SMS, by email or in person at any EACC office. Anonymous reports are accepted — include dates, places and names where possible.',
  },
]

export function CivicLearn() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="learn" className="mx-auto my-10 max-w-7xl scroll-mt-6 px-5">
      <div className="rounded-3xl border bg-card p-6 md:p-10">
        <h2 className="text-3xl font-extrabold">Civic Learn - Know Your Rights</h2>
        <div className="mt-6 grid items-start gap-4 md:grid-cols-3">
          {topics.map((t, i) => {
            const isOpen = open === i
            return (
              <article key={t.title} className="rounded-xl border p-5">
                <h3 className="font-bold">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.summary}</p>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`topic-${i}`}
                  className="mt-3 flex items-center gap-1 text-sm font-bold text-brand"
                >
                  {t.cta}
                  <ChevronDown className={`size-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                {isOpen && (
                  <p id={`topic-${i}`} className="mt-3 rounded-lg bg-muted p-3 text-sm leading-relaxed">
                    {t.detail}
                  </p>
                )}
              </article>
            )
          })}
        </div>
        <div className="mt-6 flex flex-col gap-3 rounded-xl bg-primary p-4 text-primary-foreground md:flex-row md:items-center md:justify-between">
          <span className="flex items-center gap-2">
            <Bot className="size-5" aria-hidden="true" />
            CivicBot: Ask &quot;What is public participation?&quot;
          </span>
          <label htmlFor="civicbot" className="sr-only">
            Ask CivicBot
          </label>
          <input
            id="civicbot"
            placeholder="Ask in English/Swahili..."
            className="w-full rounded-lg bg-white/10 p-2 text-sm placeholder:text-primary-foreground/60 outline-none focus-visible:ring-2 focus-visible:ring-white/50 md:w-72"
          />
        </div>
      </div>
    </section>
  )
}
