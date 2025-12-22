export default function PricingSection() {
  const plans = [
    {
      name: "Basic Profile",
      description: "Establish your presence.",
      price: "Free",
      features: ["Standard Institution Profile", "Basic Contact Information", "Listed in Directory Search"],
      buttonText: "Get Started",
      buttonStyle: "border border-slate-200 text-slate-700 hover:bg-slate-50",
      popular: false,
    },
    {
      name: "Verified Partner",
      description: "Boost enrollment & trust.",
      price: "Rs. 4,999",
      priceUnit: "/year",
      features: [
        "Verified Institution Badge",
        "Unlimited Admission Listings",
        "Featured Search Placement",
        "Leads Analytics Dashboard",
      ],
      buttonText: "Join as Partner",
      buttonStyle: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Full recruitment suite.",
      price: "Custom",
      features: [
        "AI-Powered Student Matching",
        "Priority Campus Showcasing",
        "Dedicated Account Manager",
        "Custom CRM Integration",
      ],
      buttonText: "Talk to Sales",
      buttonStyle: "bg-white/10 text-white border border-white/20 hover:bg-white/20",
      popular: false,
      dark: true,
    },
  ]

  return (
    <section id="pricing" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">Pricing Plans</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Scalable Solutions for Every Institution</h2>
          <p className="text-slate-500 text-lg">Choose a plan that matches your recruitment goals.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl transition-all flex flex-col relative ${
                plan.popular
                  ? "border-2 border-blue-600 shadow-xl shadow-blue-600/10 scale-105 bg-white"
                  : plan.dark
                    ? "bg-slate-900 text-white"
                    : "bg-white border border-slate-200 shadow-sm hover:shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className={`font-bold text-xl mb-2 ${plan.dark ? "text-white" : "text-slate-900"}`}>{plan.name}</h3>
                <p className={`text-sm ${plan.dark ? "text-slate-400" : "text-slate-500"}`}>{plan.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  {plan.priceUnit && <span className="text-sm font-bold text-slate-400">Rs.</span>}
                  <span className={`text-4xl font-bold ${plan.dark ? "text-white" : "text-slate-900"}`}>
                    {plan.price.replace("Rs. ", "")}
                  </span>
                  {plan.priceUnit && (
                    <span className={plan.dark ? "text-slate-400" : "text-slate-400"}>{plan.priceUnit}</span>
                  )}
                </div>
              </div>
              <ul className="space-y-4 mb-8 grow">
                {plan.features.map((feature, featureIdx) => (
                  <li
                    key={featureIdx}
                    className={`flex items-center gap-3 text-sm ${plan.dark ? "text-slate-300" : "text-slate-600"}`}
                  >
                    <span className={plan.popular ? "text-blue-600" : plan.dark ? "text-blue-400" : "text-blue-500"}>
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-xl font-bold transition-all ${plan.buttonStyle}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
