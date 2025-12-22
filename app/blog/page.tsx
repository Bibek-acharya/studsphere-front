import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Clock } from "lucide-react"
import Image from "next/image"

export default function NewsPage() {
  const categories = [
    { name: "All News", active: true },
    { name: "Admission", active: false },
    { name: "Scholarship", active: false },
    { name: "Exams", active: false },
    { name: "Notice", active: false },
    { name: "Events", active: false },
    { name: "Achievements", active: false },
    { name: "Others", active: false },
  ]

  const newsItems = [
    {
      category: "Exam",
      categoryColor: "bg-orange-100 text-orange-700",
      image: "/student-writing-exam-on-paper.jpg",
      title: "JEE Main 2025: Registration Process Extended.",
      description: "NTA extends JEE Main 2025 registration deadline due to high volume of applications.",
      daysAgo: 90,
    },
    {
      category: "Admission",
      categoryColor: "bg-blue-100 text-blue-700",
      image: "/university-campus-with-green-lawn.jpg",
      title: "JEE Main 2025: Registration Process Extended.",
      description: "NTA extends JEE Main 2025 registration deadline due to high volume of applications.",
      daysAgo: 90,
    },
    {
      category: "Scholarship",
      categoryColor: "bg-green-100 text-green-700",
      image: "/university-campus-with-green-lawn.jpg",
      title: "JEE Main 2025: Registration Process Extended.",
      description: "NTA extends JEE Main 2025 registration deadline due to high volume of applications.",
      daysAgo: 90,
    },
    {
      category: "Exam",
      categoryColor: "bg-orange-100 text-orange-700",
      image: "/student-writing-exam-on-paper.jpg",
      title: "JEE Main 2025: Registration Process Extended.",
      description: "NTA extends JEE Main 2025 registration deadline due to high volume of applications.",
      daysAgo: 90,
    },
    {
      category: "Admission",
      categoryColor: "bg-blue-100 text-blue-700",
      image: "/university-campus-with-green-lawn.jpg",
      title: "JEE Main 2025: Registration Process Extended.",
      description: "NTA extends JEE Main 2025 registration deadline due to high volume of applications.",
      daysAgo: 90,
    },
    {
      category: "Scholarship",
      categoryColor: "bg-green-100 text-green-700",
      image: "/university-campus-with-green-lawn.jpg",
      title: "JEE Main 2025: Registration Process Extended.",
      description: "NTA extends JEE Main 2025 registration deadline due to high volume of applications.",
      daysAgo: 90,
    },
    {
      category: "Exam",
      categoryColor: "bg-orange-100 text-orange-700",
      image: "/student-writing-exam-on-paper.jpg",
      title: "JEE Main 2025: Registration Process Extended.",
      description: "NTA extends JEE Main 2025 registration deadline due to high volume of applications.",
      daysAgo: 90,
    },
    {
      category: "Admission",
      categoryColor: "bg-blue-100 text-blue-700",
      image: "/university-campus-with-green-lawn.jpg",
      title: "JEE Main 2025: Registration Process Extended.",
      description: "NTA extends JEE Main 2025 registration deadline due to high volume of applications.",
      daysAgo: 90,
    },
    {
      category: "Scholarship",
      categoryColor: "bg-green-100 text-green-700",
      image: "/university-campus-with-green-lawn.jpg",
      title: "JEE Main 2025: Registration Process Extended.",
      description: "NTA extends JEE Main 2025 registration deadline due to high volume of applications.",
      daysAgo: 90,
    },
  ]

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Latest News & Stories</h1>
          <p className="text-blue-600 underline text-sm mb-8">
            Stay updated with the latest announcements, success stories, and
            <br />
            important updates from Tribhuvan University. All the information you need,
            <br />
            in one place.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative mb-12">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search scholarship name,college or keywords..."
                className="w-full pl-12 pr-32 py-6 text-base border-gray-200 rounded-lg"
              />
              <Button className="absolute right-2 px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-md">
                Search
              </Button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="mb-8">
            <h3 className="text-left text-lg font-semibold mb-4 text-black">Browse by category</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant={category.active ? "default" : "outline"}
                  className={
                    category.active
                      ? "bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 rounded-full px-5"
                  }
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Story */}
          <div className="text-left mb-8">
            <h3 className="text-lg font-semibold mb-4 text-black">Featured Story of the Week</h3>
            <Card className="relative overflow-hidden rounded-2xl shadow-lg border-none">
              <div className="relative h-80">
                <Image
                  src="/images/screenshot-202025-12-16-20at-2011.png"
                  alt="Featured Story"
                  fill
                  className="w-full h-full object-cover"
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 700px"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full font-medium">Featured</span>
                    <div className="flex items-center gap-1 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>90 days ago</span>
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Merit-Based Scholarships Announced for 2026</h2>
                  <p className="text-sm text-gray-200 mb-4">
                    Full tuition waiver for top 50 candidates in entrance examination.
                  </p>
                  <Button className="bg-white text-black hover:bg-gray-100 rounded-md">Read Full Story</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* News Listing Section */}
      <section className="w-full py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-black">Latest News & stories</h2>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Sort by:</span>
              <select className="border border-gray-300 rounded-md px-3 py-1.5 bg-white">
                <option>Newest First</option>
                <option>Oldest First</option>
              </select>
            </div>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {newsItems.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow border border-gray-200 rounded-xl"
              >
                <div className="relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={600}
                    height={192}
                    className="w-full h-48 object-cover"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 350px"
                  />
                  <span
                    className={`absolute top-3 left-3 text-xs px-3 py-1 rounded-full font-medium ${item.categoryColor}`}
                  >
                    {item.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{item.daysAgo} Days ago</span>
                    </div>
                    <a
                      href="/blog/news/1"
                      className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 text-sm font-medium p-0 h-auto"
                    >
                      View Details →
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2">
            <Button variant="outline" size="icon" className="w-8 h-8 rounded-md border-gray-300 bg-transparent">
              ‹
            </Button>
            <Button className="w-8 h-8 rounded-md bg-blue-600 text-white hover:bg-blue-700">1</Button>
            <Button
              variant="outline"
              className="w-8 h-8 rounded-md border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
            >
              2
            </Button>
            <Button
              variant="outline"
              className="w-8 h-8 rounded-md border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
            >
              3
            </Button>
            <Button variant="outline" size="icon" className="w-8 h-8 rounded-md border-gray-300 bg-transparent">
              ›
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
