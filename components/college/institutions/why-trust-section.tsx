export default function WhyTrustSection() {
  const features = [
    {
      icon: "👥",
      title: "Targeted Recruitment",
      description:
        "Connect with students whose interests, grades, and career goals perfectly align with your specific academic programs.",
    },
    {
      icon: "⚡",
      title: "Instant Visibility",
      description:
        "Showcase your campus, infrastructure, and events to a curated audience of active applicants through a rich, digital profile.",
    },
    {
      icon: "🛡️",
      title: "Verified Trust",
      description:
        "Gain credibility with the StudSphere Verified Badge, proving to parents and students that your institution is top-tier.",
    },
  ]

  return (
    <section id="why-choose" className="py-24 bg-slate-50/50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
            Core Advantages
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Why Institutions Trust StudSphere</h2>
          <p className="text-slate-500 text-lg">
            The most effective way to grow your educational community and manage modern admissions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl border border-slate-100 bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-sm border border-slate-100 group-hover:bg-blue-600 group-hover:scale-110 transition-all">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
