"use client"

import JobSearchResults from "@/components/jobs/job-search-results"
import type { JobListing } from "@/lib/jobs-data"

interface JobSearchSectionsProps {
  jobs: JobListing[]
  searchParams: {
    keywords?: string
    location?: string
    jobType?: string
  }
}

export function JobSearchPageSections({ jobs, searchParams }: JobSearchSectionsProps) {
  // Provide default values for required searchParams
  const normalizedSearchParams = {
    keywords: searchParams.keywords || '',
    location: searchParams.location || '',
    jobType: searchParams.jobType || '',
  }
  
  return <JobSearchResults jobs={jobs} searchParams={normalizedSearchParams} />
}
