
import React, { useState } from 'react';
import { College } from './types';
import CollegeCard from './CollegeCard';

interface AdmissionDetailsProps {
  college: College;
  relatedColleges: College[];
  onBack: () => void;
  onViewDetails: (college: College) => void;
}

const AdmissionDetails: React.FC<AdmissionDetailsProps> = ({ college, relatedColleges, onBack, onViewDetails }) => {
  const [activeTab, setActiveTab] = useState<'grade11' | 'bachelor' | 'master'>('bachelor');
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-gray-50 text-gray-800 antialiased pb-12">
      <main className="max-w-5xl mx-auto px-4 py-6 md:px-6 lg:px-8">
        
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-blue-600 font-bold text-sm hover:underline mb-4 transition-all"
        >
          <i className="fa-solid fa-arrow-left"></i>
          Back to Search Results
        </button>

        {/* 1. HERO SECTION */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
          <div className="relative h-32 md:h-48 bg-linear-to-r from-slate-900 to-blue-700">
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
          
          <div className="px-6 pb-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between relative z-10">
              {/* College Logo & Title */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-5 mb-6 md:mb-0">
                <div className="w-24 h-24 -mt-12 bg-white rounded-xl shadow-md p-2 flex items-center justify-center border border-gray-100 overflow-hidden">
                  <img src={college.logo} alt="Logo" className="w-full h-full object-contain" />
                </div>
                <div className="text-center md:text-left pt-1">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight uppercase tracking-wide">
                    {college.name}
                  </h1>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-green-200">
                      Admissions Open 2025
                    </span>
                    <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded-full border border-gray-200">
                      <i className="fa-solid fa-location-dot mr-1 text-blue-500"></i> {college.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons (Desktop) */}
              <div className="hidden md:flex gap-3 mt-1">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition shadow-sm"
                >
                  Contact Admission
                </button>
                <button 
                  onClick={() => setShowModal(true)}
                  className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition shadow-md shadow-blue-500/20"
                >
                  Apply Now
                </button>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-gray-600 text-center md:text-left max-w-3xl leading-relaxed">
                {college.description}
              </p>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <p className="text-xs text-blue-600 uppercase font-semibold tracking-wider mb-1">Status</p>
                <p className="font-bold text-gray-900"><span className="text-green-600">●</span> Open</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider mb-1">Affiliation</p>
                <p className="font-bold text-gray-900">{college.university} Affiliated</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider mb-1">Programs</p>
                <p className="font-bold text-gray-900 text-sm">Bachelor, Master</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider mb-1">Est.</p>
                <p className="font-bold text-gray-900">2001 AD</p>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* LEFT COLUMN (Main Content) */}
          <div className="lg:col-span-2 space-y-6">

            {/* 2. ADMISSION OVERVIEW */}
            <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-1 h-6 bg-blue-500 rounded-full mr-3"></span>
                Admission Overview
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {college.name} follows a comprehensive admission procedure ensuring a fair selection of candidates. 
                Admission is primarily based on academic merit from previous levels and performance in the colleges entrance 
                examination. We look for students who are not just academically sound but also enthusiastic about co-curricular activities.
              </p>
            </section>

            {/* 3. COURSES OFFERED */}
            <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-1 h-6 bg-blue-500 rounded-full mr-3"></span>
                Courses Open for Admission
              </h2>
              
              <div className="space-y-4">
                {/* Bachelor Group */}
                <div className="border border-gray-200 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide bg-gray-50 -mx-4 -mt-4 p-3 rounded-t-xl border-b border-gray-200">Bachelor Programs</h3>
                  <div className="flex flex-wrap gap-2">
                    {college.programs.filter(p => p.level === 'Bachelor').map((prog, i) => (
                      <span key={i} className={`px-3 py-1 rounded-full text-sm font-medium border ${prog.status === 'Ongoing' ? 'bg-blue-50 text-blue-700 border-blue-100' : 'bg-gray-50 text-gray-500 border-gray-100'}`}>
                        {prog.name} {prog.status === 'Closed' && '(Closed)'}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Facilities Group */}
                <div className="border border-gray-200 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide bg-gray-50 -mx-4 -mt-4 p-3 rounded-t-xl border-b border-gray-200">Campus Facilities</h3>
                  <div className="flex flex-wrap gap-2">
                    {college.facilities.map((f, i) => (
                      <span key={i} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-100">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 4. ELIGIBILITY CRITERIA (Tabs) */}
            <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-1 h-6 bg-blue-500 rounded-full mr-3"></span>
                Eligibility Criteria
              </h2>
              
              {/* Tabs */}
              <div className="flex border-b border-gray-200 mb-4 overflow-x-auto scrollbar-hide">
                <button 
                  onClick={() => setActiveTab('grade11')} 
                  className={`px-4 py-2 text-sm font-medium whitespace-nowrap border-b-2 transition-all ${activeTab === 'grade11' ? 'text-blue-600 border-blue-600' : 'text-gray-500 border-transparent hover:text-gray-700'}`}
                >
                  Grade 11
                </button>
                <button 
                  onClick={() => setActiveTab('bachelor')} 
                  className={`px-4 py-2 text-sm font-medium whitespace-nowrap border-b-2 transition-all ${activeTab === 'bachelor' ? 'text-blue-600 border-blue-600' : 'text-gray-500 border-transparent hover:text-gray-700'}`}
                >
                  Bachelor
                </button>
                <button 
                  onClick={() => setActiveTab('master')} 
                  className={`px-4 py-2 text-sm font-medium whitespace-nowrap border-b-2 transition-all ${activeTab === 'master' ? 'text-blue-600 border-blue-600' : 'text-gray-500 border-transparent hover:text-gray-700'}`}
                >
                  Master
                </button>
              </div>

              <div className="animation-pop">
                {activeTab === 'grade11' && (
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
                      <p className="text-sm text-gray-600"><strong className="text-gray-800">Science:</strong> Min GPA 2.8 in SEE with C+ in Math & Science.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
                      <p className="text-sm text-gray-600"><strong className="text-gray-800">Management:</strong> Min GPA 2.0 in SEE.</p>
                    </div>
                  </div>
                )}
                {activeTab === 'bachelor' && (
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
                      <p className="text-sm text-gray-600">Must have completed +2 or equivalent with minimum D+ in all subjects.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
                      <p className="text-sm text-gray-600">Must pass the entrance exam conducted by the university.</p>
                    </div>
                  </div>
                )}
                {activeTab === 'master' && (
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
                      <p className="text-sm text-gray-600">Bachelor degree in related discipline from a recognized university.</p>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* 5. ADMISSION PROCESS (Steps) */}
            <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-1 h-6 bg-blue-500 rounded-full mr-3"></span>
                How to Apply
              </h2>
              
              <div className="relative pl-2">
                {/* Step 1 */}
                <div className="flex gap-4 mb-8 step-item relative step-line">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-blue-100 border-2 border-blue-500 flex items-center justify-center z-10">
                    <span className="text-blue-700 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm md:text-base">Fill Application Form</h4>
                    <p className="text-xs md:text-sm text-gray-600 mt-1">Submit online via the Apply Now button or visit the college reception desk.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4 mb-8 step-item relative step-line">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-blue-100 border-2 border-blue-500 flex items-center justify-center z-10">
                    <span className="text-blue-700 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm md:text-base">Entrance Examination</h4>
                    <p className="text-xs md:text-sm text-gray-600 mt-1">Appear for the written entrance test scheduled on provided dates.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4 mb-8 step-item relative step-line">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-blue-100 border-2 border-blue-500 flex items-center justify-center z-10">
                    <span className="text-blue-700 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm md:text-base">Admission Confirmation</h4>
                    <p className="text-xs md:text-sm text-gray-600 mt-1">Submit documents and pay the admission fee to secure your seat.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Related Admissions Section */}
            <section className="mt-12">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-black">Related Admissions</h2>
                <button onClick={onBack} className="text-blue-600 text-sm font-bold hover:underline">View All Colleges</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedColleges.map((relCollege) => (
                  <CollegeCard 
                    key={relCollege.id} 
                    college={relCollege} 
                    onViewDetails={onViewDetails} 
                  />
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN (Sidebar Info) */}
          <div className="space-y-6">

            {/* 9. IMPORTANT DATES */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 lg:sticky lg:top-20">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <i className="fa-regular fa-calendar-check text-blue-600 mr-2"></i> Important Dates
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Application Opens</span>
                  <span className="text-sm font-semibold text-gray-900">July 15, 2025</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Entrance Exam</span>
                  <span className="text-sm font-semibold text-orange-600">Aug 10, 2025</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Classes Start</span>
                  <span className="text-sm font-semibold text-gray-900">Sep 01, 2025</span>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-100">
                <button 
                  onClick={() => setShowModal(true)}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 transition transform hover:-translate-y-0.5 text-sm"
                >
                  Apply for Admission
                </button>
              </div>
            </div>

            {/* 6. REQUIRED DOCUMENTS */}
            <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center text-sm">
                <i className="fa-solid fa-file-lines text-blue-600 mr-2"></i> Documents Required
              </h3>
              <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside marker:text-blue-400 font-medium">
                <li>2 PP Size Photos</li>
                <li>SLC/SEE Marksheet & Character</li>
                <li>Transcript (for Bachelor)</li>
                <li>Citizenship Copy</li>
                <li>Migration Certificate</li>
              </ul>
            </div>

            {/* 8. SCHOLARSHIPS */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center text-sm">
                <i className="fa-solid fa-award text-amber-500 mr-2"></i> Scholarship Schemes
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <p className="text-xs font-bold text-gray-900 uppercase">Merit Based</p>
                  <p className="text-xs text-gray-600 mt-1">Up to 100% tuition waiver for high achievers.</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <p className="text-xs font-bold text-gray-900 uppercase">Need Based</p>
                  <p className="text-xs text-gray-600 mt-1">Financial aid for underprivileged students.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 11. CONTACT & SUPPORT SECTION */}
        <section id="contact" className="mt-12 bg-gray-900 rounded-2xl p-6 md:p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">Need Admission Help?</h2>
              <p className="text-gray-400 text-sm mb-6">Our admission counselors are available 10 AM - 4 PM (Sun-Fri).</p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-blue-400">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Phone</p>
                    <p className="font-medium text-sm">{college.phoneNumber}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-blue-400">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Email</p>
                    <p className="font-medium text-sm">{college.contactEmail}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
              <p className="text-gray-300 text-sm mb-4">Visit our official website for more details</p>
              <a href={`https://${college.website}`} target="_blank" rel="noreferrer" className="inline-block w-full py-3 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition">
                Visit Official Website
              </a>
              <button className="mt-3 w-full py-3 bg-transparent border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-800 transition text-sm">
                Compare with Other Colleges
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* FIXED MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 flex gap-3 md:hidden z-50 shadow-lg">
        <button className="flex-1 py-3 bg-white text-gray-700 font-semibold border border-gray-300 rounded-lg text-sm">
          Call Now
        </button>
        <button 
          onClick={() => setShowModal(true)}
          className="flex-1 py-3 bg-blue-600 text-white font-bold rounded-lg text-sm shadow-md"
        >
          Apply Now
        </button>
      </div>

      {/* APPLY MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-60 flex items-center justify-center px-4 backdrop-blur-sm transition-all">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 relative animation-pop">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
            
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="fa-solid fa-user-plus text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Start Application</h3>
              <p className="text-sm text-gray-500">UniMatch Fast-Track Admission</p>
            </div>
            
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Application Started! Redirecting to form...'); setShowModal(false); }}>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Select Program Level</label>
                <select className="w-full border-gray-300 rounded-lg p-2.5 text-sm bg-gray-50 border focus:ring-2 focus:ring-blue-500 focus:outline-none">
                  {college.programs.map((p, i) => (
                    <option key={i}>{p.name} ({p.level})</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Your Mobile Number</label>
                <input type="tel" placeholder="98XXXXXXXX" className="w-full border-gray-300 rounded-lg p-2.5 text-sm bg-gray-50 border focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
              </div>
              
              <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg transition">
                Proceed to Form
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdmissionDetails;
