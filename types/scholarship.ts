export interface Benefit {
  icon: string
  title: string
  description: string
  color: 'blue' | 'orange' | 'green' | 'purple' | 'pink' | 'teal'
}

export interface EligibilityCriteria {
  text: string
}

export interface RequiredDocument {
  icon: string
  label: string
}

export interface SelectionStep {
  stepNumber: number
  title: string
  description: string
  isFinal?: boolean
}

export interface ImportantDate {
  label: string
  date: string
  type: 'success' | 'danger' | 'default'
}

export interface Scholarship {
  id: string
  title: string
  subtitle: string
  status: 'open' | 'closed' | 'upcoming'
  shortDescription: string
  overview: {
    description: string[]
    highlights: string[]
  }
  benefits: Benefit[]
  eligibility: EligibilityCriteria[]
  requiredDocuments: RequiredDocument[]
  selectionProcess: SelectionStep[]
  institutions: {
    title: string
    description: string
    list: string[]
  }
  importantDates: ImportantDate[]
  studentsSupported: number
  imageUrl?: string
}
