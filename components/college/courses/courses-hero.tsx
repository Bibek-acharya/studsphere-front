import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function CoursesHero() {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/background.png)" }}>
      <div className="absolute inset-0 bg-linear-to-br from-blue-400/30 via-blue-500/20 to-purple-400/30" />

      <div className="relative container mx-auto max-w-5xl text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/90 backdrop-blur-sm rounded-full border border-blue-200">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-700">Your way to success</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 text-balance">
          Unlock Your Future
          <br />
          Coureses  in Nepal & Beyond
        </h1>

        <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto text-balance">
          Stop searching blindly. Update your profile and let our algorithm match you with the courses with  you
          deserve.
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-3 max-w-3xl mx-auto">
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search scholarship name, college or keywords..."
                className="pl-12 h-14 border-0 bg-transparent focus-visible:ring-0"
              />
            </div>
            <Button className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-xl">Search</Button>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap text-sm">
          <span className="text-gray-600">Your recent visit :</span>
          <a href="#" className="text-blue-600 hover:underline">
            BIT Colleges
          </a>
          <a href="#" className="text-blue-600 hover:underline">
            college Predictor
          </a>
          <a href="#" className="text-blue-600 hover:underline">
            Scholarship
          </a>
        </div>
      </div>
    </section>
  )
}
