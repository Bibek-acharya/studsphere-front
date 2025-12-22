
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart } from "lucide-react"
import Image from "next/image"

interface ExamCard {
  id: string
  status: "ongoing" | "closed"
  title: string
  university: string
  faculty: string
  examDate: string
  nepaliDate: string
  imageUrl: string
}

const examCards: ExamCard[] = [
  {
    id: "1",
    status: "ongoing",
    title: "BICTE Entrance Exam",
    university: "Tribhuvan University",
    faculty: "Faculty of Education",
    examDate: "Oct 01, 2026",
    nepaliDate: "Asoj 01, 2082",
    imageUrl: "/images/rectangle-205183.png",
  },
  {
    id: "2",
    status: "closed",
    title: "BICTE Entrance Exam",
    university: "Tribhuvan University",
    faculty: "Faculty of Education",
    examDate: "Oct 01, 2026",
    nepaliDate: "Asoj 01, 2082",
    imageUrl: "/images/rectangle-205185.png",
  },
  {
    id: "3",
    status: "ongoing",
    title: "BICTE Entrance Exam",
    university: "Tribhuvan University",
    faculty: "Faculty of Education",
    examDate: "Oct 01, 2026",
    nepaliDate: "Asoj 01, 2082",
    imageUrl: "/images/rectangle-205187.png",
  },
]

export function ExamAnnouncements() {
  return (
    <section className="w-full py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">Find All Exam Announcements Easily.</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Your guide to the best academic opportunities in Nepal and beyond.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examCards.map((exam) => (
            <Card
              key={exam.id}
              className="overflow-hidden flex flex-col bg-white border-gray-200 hover:shadow-lg transition-shadow"
            >
              {/* Card Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image src={exam.imageUrl || "/placeholder.svg"} alt={exam.title} fill className="object-cover" />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Status Badge */}
                <div className="mb-4">
                  {exam.status === "ongoing" ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium">
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                      Ongoing
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 text-sm font-medium">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      Closed
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4">{exam.title}</h3>

                {/* University Info */}
                <div className="flex items-start gap-2 mb-6 text-sm text-muted-foreground">
                  <svg
                    className="w-5 h-5 text-blue-600 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <div>
                    <span className="font-medium text-foreground">{exam.university}</span>
                    <span className="mx-1">|</span>
                    <span>{exam.faculty}</span>
                  </div>
                </div>

                {/* Dates */}
                <div className="flex justify-between mb-6 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-1">Exam Date</p>
                    <p className="font-semibold text-foreground">{exam.examDate}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-foreground mb-1">Nepali Date</p>
                    <p className="font-semibold text-foreground">{exam.nepaliDate}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 mt-auto">
                  <Button variant="outline" className="flex-1 border-gray-300 hover:bg-gray-50 bg-transparent">
                    Details
                  </Button>
                  <Button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white">
                    Apply Now
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 border-gray-300 hover:bg-gray-50 bg-transparent"
                  >
                    <Heart className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
