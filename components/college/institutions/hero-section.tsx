"use client"

import { useState } from "react"

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<"register" | "login">("register")

  return (
    <main className="relative min-h-screen pt-32 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-white to-blue-100/50"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-400/20 rounded-full mix-blend-multiply filter blur-[80px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/15 rounded-full mix-blend-multiply filter blur-[80px] animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 self-center lg:self-start bg-white/80 border border-blue-200/60 backdrop-blur-sm rounded-full pl-1 pr-4 py-1 shadow-sm hover:border-blue-300 transition-colors">
              <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                New
              </span>
              <span className="text-xs font-medium text-slate-600">Admissions 2025 Dashboard is live</span>
            </div>

            <div className="space-y-5">
              <h1 className="font-bold text-4xl sm:text-5xl lg:text-[3.5rem] text-slate-900 leading-[1.1] tracking-tight">
                Connect with <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-blue-600 to-blue-600">
                  Ambitious Minds
                </span>
              </h1>
              <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                StudSphere is the premier digital ecosystem for institutions to manage admissions, showcase campus life,
                and recruit top-tier students effortlessly.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
              {[
                { icon: "📈", title: "Real-time Data", desc: "Track applicant demographics instantly." },
                { icon: "🎯", title: "Precise Targeting", desc: "Reach students by interest & grade." },
                { icon: "✓", title: "Verified Profile", desc: "Gain the official trusted badge." },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white/50 backdrop-blur-sm p-4 rounded-xl flex items-start gap-3.5 group hover:bg-white/90 hover:shadow-md hover:-translate-y-1 transition-all border border-slate-100"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">{feature.title}</h3>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-5 pt-2 border-t border-blue-100/50 mt-2">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[9px] font-bold text-slate-600 shadow-sm">
                  S
                </div>
                <div className="w-7 h-7 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center text-[9px] font-bold text-slate-600 shadow-sm">
                  K
                </div>
                <div className="w-7 h-7 rounded-full border-2 border-white bg-slate-400 flex items-center justify-center text-[9px] font-bold text-slate-600 shadow-sm">
                  U
                </div>
              </div>
              <p className="text-xs font-medium text-slate-500">
                Trusted by <span className="text-slate-900 font-bold">2,000+</span> top institutions in Nepal.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Form */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100/80 overflow-hidden relative z-20">
              <div className="bg-slate-50/50 border-b border-slate-100 p-2">
                <div className="grid grid-cols-2 gap-1 p-1 bg-slate-100 rounded-xl border border-slate-200/50">
                  <button
                    onClick={() => setActiveTab("register")}
                    className={`py-2 text-sm font-bold rounded-lg transition-all ${
                      activeTab === "register"
                        ? "bg-white text-slate-900 shadow-sm border border-slate-200/50"
                        : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    Register
                  </button>
                  <button
                    onClick={() => setActiveTab("login")}
                    className={`py-2 text-sm font-bold rounded-lg transition-all ${
                      activeTab === "login"
                        ? "bg-white text-slate-900 shadow-sm border border-slate-200/50"
                        : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    Login
                  </button>
                </div>
              </div>

              <div className="p-6 md:p-8">
                {activeTab === "register" ? (
                  <div className="space-y-5">
                    <div>
                      <h2 className="font-bold text-xl text-slate-900">Create Partner Account</h2>
                      <p className="text-sm text-slate-500 mt-1">Join the network in less than 2 minutes.</p>
                    </div>
                    <form className="space-y-4">
                      <div className="space-y-1.5">
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Institution Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Kathmandu Model College"
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium focus:outline-none focus:bg-white focus:border-blue-500 transition-all"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            Phone
                          </label>
                          <input
                            type="tel"
                            placeholder="98XXXXXXXX"
                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium focus:outline-none focus:bg-white focus:border-blue-500"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            Type
                          </label>
                          <select className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium">
                            <option>College</option>
                            <option>School</option>
                            <option>Institute</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Official Email
                        </label>
                        <input
                          type="email"
                          placeholder="admin@example.edu.np"
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium focus:outline-none focus:bg-white focus:border-blue-500"
                        />
                      </div>
                      <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-lg shadow-lg shadow-slate-900/10 transition-all flex items-center justify-center gap-2">
                        <span>Create Account</span>
                        <span>→</span>
                      </button>
                    </form>
                  </div>
                ) : (
                  <div className="space-y-5">
                    <div>
                      <h2 className="font-bold text-xl text-slate-900">Welcome Back</h2>
                      <p className="text-sm text-slate-500 mt-1">Login to your partner dashboard.</p>
                    </div>
                    <form className="space-y-4">
                      <div className="space-y-1.5">
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="your@email.edu.np"
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium focus:outline-none focus:bg-white focus:border-blue-500"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Password
                        </label>
                        <input
                          type="password"
                          placeholder="••••••••"
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium focus:outline-none focus:bg-white focus:border-blue-500"
                        />
                      </div>
                      <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-lg shadow-lg shadow-slate-900/10 transition-all">
                        Sign In
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
