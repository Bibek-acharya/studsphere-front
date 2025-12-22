import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="top-0 w-full z-50 bg-white/85 backdrop-blur-md border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20">
              S
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">StudSphere</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-semibold">
            <Link href="#why-choose" className="text-slate-600 hover:text-blue-600 transition-colors">
              Why StudSphere
            </Link>
            <Link href="#partners" className="text-slate-600 hover:text-blue-600 transition-colors">
              Partners
            </Link>
            <Link href="#pricing" className="text-slate-600 hover:text-blue-600 transition-colors">
              Pricing
            </Link>
            <Link href="#advertise" className="text-slate-600 hover:text-blue-600 transition-colors">
              Advertise
            </Link>
            <Link href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>
          <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-slate-800 transition-all">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}
