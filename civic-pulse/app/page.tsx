import { SiteNav } from '@/components/site-nav'
import { CivicApp } from '@/components/civic-app'
import { CivicLearn } from '@/components/civic-learn'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <CivicApp />
        <CivicLearn />
      </main>
      <footer className="py-10 text-center text-sm text-muted-foreground">
        Built for MKSU Hackfest 2025 - Governance Track | Team CivicPulse - Migori
      </footer>
    </>
  )
}
