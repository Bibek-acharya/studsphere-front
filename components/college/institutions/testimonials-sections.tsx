export default function TestimonialsSection() {
  const testimonials = [
    {
      rating: 5,
      quote:
        "StudSphere has revolutionized our admission intake. We've seen a 40% increase in high-quality applications compared to traditional marketing.",
      name: "Ramesh Shrestha",
      role: "Admission Head, KMC",
      initials: "RS",
    },
    {
      rating: 5,
      quote:
        "The dashboard analytics helped us understand what students really care about. It's not just a listing site; it's a data powerhouse.",
      name: "Anjali Poudel",
      role: "Director, Apex College",
      initials: "AP",
    },
    {
      rating: 5,
      quote:
        "Excellent support and very user-friendly interface. Our students find it very easy to connect with us through the StudSphere platform.",
      name: "Binod Bhatta",
      role: "Principal, St. Xavier's",
      initials: "BB",
    },
  ]

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white border border-slate-100 flex flex-col gap-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex text-blue-500 gap-1 text-xs">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-slate-600 italic leading-relaxed">&quot;{testimonial.quote}&quot;</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-sm">{testimonial.name}</h4>
                  <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
