import { HeroSection } from "@/components/college/findcollege/hero-section"
import { FilterSection } from "@/components/college/findcollege/filter-section"
import { CollegeGrid } from "@/components/college/findcollege/college-grit"

export default function FindCollegePage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-6">
          <aside className="w-80 shrink-0">
            <FilterSection />
          </aside>
          <main className="flex-1">
            <CollegeGrid />
          </main>
        </div>
      </div>
    </div>
  )
}
