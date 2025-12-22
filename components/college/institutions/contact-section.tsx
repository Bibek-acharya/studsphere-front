export default function ContactSection() {
  const contactInfo = [
    {
      icon: "📞",
      label: "Call Support",
      value: "+977-1-4XXXXXX, 98XXXXXXXX",
    },
    {
      icon: "✉️",
      label: "Email Us",
      value: "partner@studsphere.edu.np",
    },
    {
      icon: "📍",
      label: "Our Office",
      value: "Kathmandu, Nepal",
    },
  ]

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">Get in Touch</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Need help scaling your recruitment?</h2>
            <p className="text-slate-500 text-lg">
              Our institutional success team is here to help you set up your profile and maximize your visibility.
            </p>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-2xl group-hover:bg-blue-600 transition-all shadow-sm">
                  {info.icon}
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{info.label}</p>
                  <p className="text-slate-900 font-bold">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-sm">
          <form className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Designation</label>
                <input
                  type="text"
                  placeholder="Admission Officer"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us about your institution's goals..."
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all resize-none"
              ></textarea>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2">
              <span>Send Message</span>
              <span>✉</span>
            </button>
            <p className="text-center text-[11px] text-slate-400">
              By clicking send, you agree to our Terms and Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
