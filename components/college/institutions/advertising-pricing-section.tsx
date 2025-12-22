import { Eye, Home, Target } from "lucide-react"

export default function AdvertisingPricingSection() {
  const plans = [
    {
      icon: <Eye className="w-6 h-6 text-blue-600" />,
      title: "Featured Listing",
      description:
        'Get highlighted in search results and category pages with a "Featured" badge and priority placement.',
      price: "8,999",
    },
    {
      icon: <Home className="w-6 h-6 text-blue-600" />,
      title: "Homepage Spotlight",
      description: "Secure a dedicated banner or section on our homepage for maximum visibility to all visitors.",
      price: "14,999",
      featured: true,
    },
    {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      title: "Targeted Campaign",
      description: "Run ads targeted by location, academic interests, grade level, and career aspirations.",
      price: "19,999",
    },
  ]

  return (
    <section className="py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl transition-all hover:shadow-lg ${
                plan.featured
                  ? "bg-white border-2 border-blue-500 shadow-xl transform scale-105"
                  : "bg-white border border-gray-200"
              }`}
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">{plan.icon}</div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.title}</h3>

              <p className="text-gray-600 mb-6 min-h-20">{plan.description}</p>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gray-900">Rs. {plan.price}</span>
                <span className="text-gray-500">/month</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
