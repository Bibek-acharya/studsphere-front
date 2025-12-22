import { Card } from "@/components/ui/card"
import { Clock, Eye, Calendar, User } from "lucide-react"
import RelatedArticles from "@/components/blog/related-article"
import ShareButtons from "@/components/blog/share-button"
import CommentsSection from "@/components/blog/comments-section"
import Image from "next/image"

// Mock data - in production this would come from a database
const newsData = {
  "1": {
    id: "1",
    category: "Admission",
    categoryColor: "bg-blue-600 text-white",
    title: "Counseling Registration Deadline Extended for 2026 Admissions",
    image: "/images/screenshot-202025-12-16-20at-2011.png",
    publishedBy: "Central Admission Committee",
    publishedDate: "90 days ago",
    lastUpdate: "Today",
    views: 200,
    content: `Due to exceptional demand and numerous requests from applicants, the Central Admissions Committee (CAC) has officially extended the counseling registration deadline for the 2026 academic session. This is the final opportunity for prospective students to secure their seats.`,
    tags: ["Admission", "Deadline", "2025", "registration"],
  },
}

export default async function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const article = newsData[id as keyof typeof newsData]

  if (!article) {
    return <div>Article not found</div>
  }

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="p-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <span
                    className={`${article.categoryColor} text-sm px-4 py-1.5 rounded-full font-medium flex items-center gap-1.5`}
                  >
                    <div className="w-2 h-2 bg-white rounded-full" />
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{article.publishedDate}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                    <Eye className="w-4 h-4" />
                    <span>{article.views} views</span>
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">{article.title}</h1>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-6 mb-8 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <User className="w-4 h-4" />
                    <span className="font-medium">Published by:</span>
                    <span className="font-semibold text-black">{article.publishedBy}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">Latest Update:</span>
                    <span className="font-semibold text-black">{article.lastUpdate}</span>
                  </div>
                </div>

                {/* Featured Image */}
                <div className="mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=400&fit=crop"
                    alt={article.title}
                    width={800}
                    height={400}
                    className="w-full h-auto"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority
                  />
                </div>

                {/* Content */}
                <div className="prose max-w-none mb-8">
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
                    <p className="text-gray-800 leading-relaxed">{article.content}</p>
                  </div>

                  <h2 className="text-2xl font-bold text-black mb-4">Revised Schedule</h2>
                  <p className="text-gray-700 mb-4">
                    The previous deadline for counseling registration was set for December 10th, 2024. The new revised
                    schedule is as follows:
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="text-gray-800">
                      <strong>New Registration Deadline:</strong> December 20th, 2024 (5:00 PM NST)
                    </li>
                    <li className="text-gray-800">
                      <strong>Choice Filling Deadline:</strong> December 20th, 2024
                    </li>
                    <li className="text-gray-800">
                      <strong>Seat Allotment (Round 1):</strong> December 25th, 2024
                    </li>
                    <li className="text-gray-800">
                      <strong>Fee Payment & Document Verification:</strong> December 26th - 28th, 2024
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold text-black mb-4">Instructions for Applicants</h2>
                  <p className="text-gray-700 mb-4">All registered candidates must follow these steps:</p>

                  <ol className="space-y-3 mb-8 list-decimal pl-6">
                    <li className="text-gray-800">Log in to the admission portal using your credentials</li>
                    <li className="text-gray-800">Verify and update your personal information if needed</li>
                    <li className="text-gray-800">Complete the choice filling process carefully</li>
                    <li className="text-gray-800">Submit the application before the deadline</li>
                    <li className="text-gray-800">Keep your documents ready for verification</li>
                  </ol>
                </div>

                {/* Tags */}
                <div className="mb-8 pb-8 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-black mb-3">Tags:</h3>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 text-sm px-4 py-1.5 rounded-full hover:bg-gray-200 cursor-pointer transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="mb-8 pb-8 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-black mb-4">Share this announcement:</h3>
                  <ShareButtons />
                </div>

                {/* Comments Section */}
                <CommentsSection />
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <RelatedArticles />
          </div>
        </div>
      </div>
    </div>
  )
}
