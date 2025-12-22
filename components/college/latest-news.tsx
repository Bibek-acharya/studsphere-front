import { Card, CardContent } from "@/components/ui/card"
import { Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface NewsItem {
  id: string
  category: "Exam" | "Admission" | "Scholarship" | "Result"
  image: string
  title: string
  description: string
  daysAgo: number
  link: string
}

const newsItems: NewsItem[] = [
  {
    id: "1",
    category: "Exam",
    image: "/student-studying-at-desk-with-exam-schedule-board.jpg",
    title: "JEE Main 2025: Registration Process Extended.",
    description: "NTA extends JEE Main 2025 registration deadline due to high volume of applications.",
    daysAgo: 90,
    link: "#",
  },
  {
    id: "2",
    category: "Admission",
    image: "/college-admission-office-with-computer-kiosk.jpg",
    title: "JEE Main 2025: Registration Process Extended.",
    description: "NTA extends JEE Main 2025 registration deadline due to high volume of applications.",
    daysAgo: 90,
    link: "#",
  },
  {
    id: "3",
    category: "Scholarship",
    image: "/graduate-throwing-cap-in-air-against-blue-sky.jpg",
    title: "JEE Main 2025: Registration Process Extended.",
    description: "NTA extends JEE Main 2025 registration deadline due to high volume of applications.",
    daysAgo: 90,
    link: "#",
  },
  {
    id: "4",
    category: "Result",
    image: "/study-materials-with-calculator-and-graphs-on-desk.jpg",
    title: "JEE Main 2025: Registration Process Extended.",
    description: "NTA extends JEE Main 2025 registration deadline due to high volume of applications.",
    daysAgo: 90,
    link: "#",
  },
]

const categoryColors = {
  Exam: "bg-orange-100 text-orange-700",
  Admission: "bg-blue-100 text-blue-700",
  Scholarship: "bg-purple-100 text-purple-700",
  Result: "bg-green-100 text-green-700",
}

export function LatestNews() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">Latest News & Stories</h2>
          <p className="text-gray-600 text-lg">Your guide to the best academic opportunities in Nepal and beyond.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="p-5 pb-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-md text-sm font-medium ${categoryColors[item.category]}`}
                  >
                    {item.category}
                  </span>
                </div>

                <div className="relative h-48 w-full px-5">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>

                <div className="p-5 pt-4">
                  <h3 className="font-bold text-xl mb-3 leading-tight">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{item.daysAgo} Days ago</span>
                    </div>
                    <Link
                      href={item.link}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1"
                    >
                      View Details
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
