"use client"

import type React from "react"

import { Megaphone, Search, PieChart } from "lucide-react"
import { useState } from "react"

export default function AdvertisingSection() {
  const [formData, setFormData] = useState({
    institutionName: "",
    email: "",
    budgetRange: "Rs. 10,000 - 25,000",
  })

  const features = [
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Homepage Feature",
      description: "Get prime placement on our homepage for maximum visibility.",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Search Priority",
      description: "Appear at the top of search results for relevant programs.",
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: "Performance Analytics",
      description: "Track clicks, impressions, and conversions in real-time.",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="advertise" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-linear-to-br from-blue-900 to-blue-700 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Features */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Premium Advertising Packages</h2>

              <p className="text-blue-100 text-lg mb-12 leading-relaxed">
                Stand out from the competition with featured placements, homepage visibility, and targeted campaigns
                that reach students actively searching for institutions like yours.
              </p>

              <div className="space-y-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/50 backdrop-blur-sm flex items-center justify-center flex-shrink-0 text-white">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-blue-100">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <div className="bg-blue-700/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
                <h3 className="text-2xl font-bold text-white mb-6">Request Advertising Details</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="institution-name"
                      className="block text-sm font-medium text-blue-100 mb-2 uppercase tracking-wide"
                    >
                      Institution Name
                    </label>
                    <input
                      id="institution-name"
                      type="text"
                      placeholder="Your institution name"
                      value={formData.institutionName}
                      onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-blue-600/30 border border-blue-400/30 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-blue-100 mb-2 uppercase tracking-wide"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="you@example.edu.np"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-blue-600/30 border border-blue-400/30 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-sm font-medium text-blue-100 mb-2 uppercase tracking-wide"
                      >
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-blue-600/30 border border-blue-400/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                      >
                        <option>Rs. 10,000 - 25,000</option>
                        <option>Rs. 25,000 - 50,000</option>
                        <option>Rs. 50,000 - 100,000</option>
                        <option>Rs. 100,000+</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-blue-600 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>Get Advertising Proposal</span>
                    <span>→</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
