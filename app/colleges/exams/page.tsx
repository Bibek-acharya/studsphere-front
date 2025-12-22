import { ExamsHero } from "@/components/college/exams/exams-hero";
import { ExamFilters } from "@/components/college/exams/exam-filters";
import { ExamGrid } from "@/components/college/exams/exam-grid";

export default function ExamsPage() {
  return (
    <div className="min-h-screen">
      <ExamsHero />
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-6">
          <aside className="w-80 shrink-0 hidden lg:block">
            <ExamFilters />
          </aside>
          <main className="flex-1">
            <ExamGrid />
          </main>
        </div>
      </div>
    </div>
  );
}
