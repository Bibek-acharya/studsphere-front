import { CoursesHero } from "@/components/college/courses/courses-hero"
import { CourseFilters } from "@/components/college/courses/course-filters"
import { CourseGrid } from "@/components/college/courses/course-grid"

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      <CoursesHero />
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-6">
          <aside className="w-80 shrink-0">
            <CourseFilters />
          </aside>
          <main className="flex-1">
            <CourseGrid />
          </main>
        </div>
      </div>
    </div>
  )
}
