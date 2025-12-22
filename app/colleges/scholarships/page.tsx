import { Suspense } from "react";
import ScholarshipHero from "@/components/college/scholarships/scholarship-hero";
import ScholarshipFilters from "@/components/college/scholarships/scholarship-filter";
import ScholarshipGrid from "@/components/college/scholarships/scholarship-grid";

export const metadata = {
  title: "Scholarships in Nepal & Beyond | Studsphere",
  description:
    "Unlock your future with scholarships in Nepal and around the world. Find and apply for the best opportunities.",
};

export default function ScholarshipsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ScholarshipHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-80 shrink-0">
            <Suspense
              fallback={
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="animate-pulse space-y-4">
                    <div className="h-6 bg-gray-200 rounded"></div>
                    <div className="h-10 bg-gray-200 rounded"></div>
                    <div className="h-10 bg-gray-200 rounded"></div>
                  </div>
                </div>
              }
            >
              <ScholarshipFilters />
            </Suspense>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <Suspense
              fallback={
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="bg-white rounded-lg border border-gray-200 p-5"
                    >
                      <div className="animate-pulse space-y-4">
                        <div className="flex gap-2">
                          <div className="h-6 bg-gray-200 rounded w-20"></div>
                          <div className="h-6 bg-gray-200 rounded w-16"></div>
                        </div>
                        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="h-10 bg-gray-200 rounded"></div>
                          <div className="h-10 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              }
            >
              <ScholarshipGrid />
            </Suspense>
          </main>
        </div>
      </div>
    </div>
  );
}
