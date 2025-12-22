import { Card } from "@/components/ui/card"
import { Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const relatedArticles = [
	{
		id: 1,
		category: "Scholarship",
		categoryColor: "bg-green-600 text-white",
		image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=200&fit=crop",
		title: "Merit-Based Scholarships Announced for 2026",
		description: "Full tuition waiver for top 50 candidates in entrance examination.",
		daysAgo: 90,
	},
	{
		id: 2,
		category: "Exam",
		categoryColor: "bg-orange-600 text-white",
		image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=200&fit=crop",
		title: "Merit-Based Scholarships Announced for 2026",
		description: "Full tuition waiver for top 50 candidates in entrance examination.",
		daysAgo: 90,
	},
	{
		id: 3,
		category: "Fee",
		categoryColor: "bg-yellow-600 text-white",
		image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop",
		title: "Merit-Based Scholarships Announced for 2026",
		description: "Full tuition waiver for top 50 candidates in entrance examination.",
		daysAgo: 90,
	},
]

export default function RelatedArticles() {
	return (
		<Card className="bg-white border border-blue-300 rounded-2xl overflow-hidden sticky top-4">
			<div className="p-6">
				<div className="flex items-center gap-2 mb-6">
					<div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
						<svg
							className="w-5 h-5 text-blue-600"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
							/>
						</svg>
					</div>
					<h3 className="text-xl font-bold text-black">Related Articles</h3>
				</div>

				<div className="space-y-6">
					{relatedArticles.map((article) => (
						<Link key={article.id} href={`/news/${article.id}`} className="block group">
							<Card className="overflow-hidden hover:shadow-md transition-all border border-gray-200 rounded-xl">
								<div className="relative">
									<Image
										src={article.image || "/placeholder.svg"}
										alt={article.title}
										width={400}
										height={128}
										className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
										style={{ objectFit: "cover" }}
										sizes="(max-width: 768px) 100vw, 400px"
									/>
									<span
										className={`absolute top-2 left-2 ${article.categoryColor} text-xs px-3 py-1 rounded-full font-medium`}
									>
										{article.category}
									</span>
									<div className="absolute top-2 right-2 flex items-center gap-1 bg-white/90 backdrop-blur-sm text-xs px-2 py-1 rounded-full text-gray-600">
										<Clock className="w-3 h-3" />
										<span>{article.daysAgo} days ago</span>
									</div>
								</div>
								<div className="p-4">
									<h4 className="text-sm font-bold text-black mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
										{article.title}
									</h4>
									<p className="text-xs text-gray-600 line-clamp-2">
										{article.description}
									</p>
								</div>
							</Card>
						</Link>
					))}
				</div>

				<Link href="/" className="block mt-6">
					<button className="w-full text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center justify-center gap-2 py-2">
						View all articles
						<svg
							className="w-4 h-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</button>
				</Link>
			</div>
		</Card>
	)
}
