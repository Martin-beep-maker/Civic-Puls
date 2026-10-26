'use client'

import { useState } from 'react'
import { Hero } from '@/components/hero'
import { ReportForm } from '@/components/report-form'
import { ReportFeed } from '@/components/report-feed'
import { INITIAL_REPORTS, generateReportNumber, type Report } from '@/lib/reports'

const BASE_REPORT_COUNT = 1243 - INITIAL_REPORTS.length

const PREFIX: Record<string, string> = { Migori: 'MIG', Kisumu: 'KSM', 'Homa Bay': 'HMB', Nairobi: 'NRB' }

export function CivicApp() {
  const [reports, setReports] = useState<Report[]>(INITIAL_REPORTS)
  const [upvoted, setUpvoted] = useState<Set<string>>(new Set())
  const [nextNumber, setNextNumber] = useState('0412')

  function addReport(input: Omit<Report, 'id' | 'status' | 'upvotes' | 'postedAt'>) {
    const id = `${PREFIX[input.location] ?? 'MIG'}-2025-${nextNumber}`
    setReports((prev) => [{ ...input, id, status: 'Pending', upvotes: 1, postedAt: 'Just now' }, ...prev])
    setUpvoted((prev) => new Set(prev).add(id))
    setNextNumber(generateReportNumber())
    return id
  }

  function toggleUpvote(id: string) {
    const wasUpvoted = upvoted.has(id)
    setUpvoted((prev) => {
      const next = new Set(prev)
      if (wasUpvoted) next.delete(id)
      else next.add(id)
      return next
    })
    setReports((prev) => prev.map((r) => (r.id === id ? { ...r, upvotes: r.upvotes + (wasUpvoted ? -1 : 1) } : r)))
  }

  return (
    <>
      <Hero reportCount={BASE_REPORT_COUNT + reports.length} />
      <ReportForm reportNumber={nextNumber} onSubmit={addReport} />
      <ReportFeed reports={reports} upvoted={upvoted} onUpvote={toggleUpvote} />
    </>
  )
}
