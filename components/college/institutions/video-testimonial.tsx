"use client"

import { useState } from "react"

export default function VideoTestimonialSection() {
  const [showModal, setShowModal] = useState(false)

  const stats = [
    {
      icon: "▶️",
      title: "40% Increase in Applications",
      description: "KMC achieved a 40% boost in high-quality applications within 6 months of joining StudSphere.",
    },
    {
      icon: "▶️",
      title: "Reduced Recruitment Costs",
      description: "Apex College saved 60% on traditional marketing costs while reaching more qualified students.",
    },
    {
      icon: "▶️",
      title: "Enhanced Student Engagement",
      description: "St. Xavier's increased student inquiries by 75% through interactive campus showcases.",
    },
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">Video Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">See What Partners are Saying</h2>
          <p className="text-slate-500 text-lg">
            Hear directly from our partners about their experience with StudSphere.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">Real Success Stories</h3>
            <p className="text-slate-600 leading-relaxed">
              Our partners share how StudSphere transformed their student recruitment and admissions process. Watch
              these testimonials to understand the real impact of our platform.
            </p>

            <div className="space-y-4 pt-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    {stat.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{stat.title}</h4>
                    <p className="text-slate-500 text-xs mt-1">{stat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative h-96 bg-slate-900">
              <div className="absolute inset-0 bg-linear-to-r from-blue-900/70 to-blue-900/70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setShowModal(true)}
                  className="w-20 h-20 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all hover:scale-110 shadow-xl"
                >
                  <span className="text-blue-600 text-2xl ml-1">▶</span>
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-black/70 to-transparent">
                <h4 className="text-white font-bold text-lg">&quot;StudSphere transformed our admissions process&quot;</h4>
                <p className="text-blue-100 text-sm mt-2">Ramesh Shrestha, Admission Head at KMC</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-white text-2xl hover:text-blue-400 z-10"
            >
              ✕
            </button>
            <div className="aspect-video bg-slate-800 flex items-center justify-center">
              <p className="text-white">Video Player Placeholder</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
