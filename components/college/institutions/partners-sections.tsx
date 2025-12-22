export default function PartnersSection() {
  const partners = [
    { icon: "🎓", name: "KMC Network" },
    { icon: "🔬", name: "Apex College" },
    { icon: "⚛️", name: "St. Xavier's" },
    { icon: "📖", name: "Little Angels'" },
    { icon: "👨‍🏫", name: "Trinity Int'l" },
  ]

  return (
    <section id="partners" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <h2 className="text-center text-slate-400 font-bold text-xs uppercase tracking-[0.2em]">
          Partnered with Industry Leaders
        </h2>
      </div>
      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-[scroll_30s_linear_infinite] gap-12 items-center">
          {[...partners, ...partners].map((partner, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-default"
            >
              <span className="text-3xl">{partner.icon}</span>
              <span className="font-bold text-xl tracking-tight whitespace-nowrap">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
