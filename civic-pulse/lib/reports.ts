export type ReportStatus = 'Pending' | 'In Review' | 'Fixed'

export const CATEGORIES = [
  'Roads',
  'Water',
  'Health Facility',
  'School',
  'Corruption',
  'Waste',
] as const

export const COUNTIES = ['Migori', 'Kisumu', 'Homa Bay', 'Nairobi'] as const

export type Category = (typeof CATEGORIES)[number]

export type Report = {
  id: string
  title: string
  category: Category
  status: ReportStatus
  upvotes: number
  location: string
  postedAt: string
  anonymous?: boolean
}

export const INITIAL_REPORTS: Report[] = [
  { id: 'MIG-2025-1204', title: 'Broken Bridge in Uriri', category: 'Roads', status: 'Pending', upvotes: 124, location: 'Migori - Uriri', postedAt: '2h ago' },
  { id: 'MIG-2025-1188', title: 'Water Crisis Suna West', category: 'Water', status: 'In Review', upvotes: 89, location: 'Migori - Suna', postedAt: '5h ago' },
  { id: 'MIG-2025-1102', title: 'Rongo Dispensary No Drugs', category: 'Health Facility', status: 'Fixed', upvotes: 210, location: 'Migori - Rongo', postedAt: '1d ago' },
  { id: 'MIG-2025-1097', title: 'School Desks Missing', category: 'School', status: 'Pending', upvotes: 45, location: 'Migori - Awendo', postedAt: '1d ago' },
  { id: 'MIG-2025-1063', title: 'Garbage in Migori Town', category: 'Waste', status: 'In Review', upvotes: 67, location: 'Migori - Central', postedAt: '2d ago' },
  { id: 'KSM-2025-0871', title: 'Bribery at Lands Office', category: 'Corruption', status: 'Pending', upvotes: 152, location: 'Kisumu', postedAt: '3d ago' },
]

export function generateReportNumber() {
  return String(Math.floor(1000 + Math.random() * 9000))
}
