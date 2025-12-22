
import React from 'react';
import { ArrowLeft, Share2, Heart, Calendar, MapPin, Wallet, Building2, CheckCircle2, Info } from 'lucide-react';
import { Exam } from './types';
import { MOCK_EXAMS } from './Constant';

interface ExamDetailsProps {
  exam: Exam;
  onBack: () => void;
  onRelatedClick: (id: string) => void;
}

const ExamDetails: React.FC<ExamDetailsProps> = ({ exam, onBack, onRelatedClick }) => {
  // Show only 2 related exams as requested
  const relatedExams = MOCK_EXAMS.filter(e => e.id !== exam.id).slice(0, 2);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 w-full">
      {/* Breadcrumb & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-semibold transition-colors w-fit"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Search
        </button>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-white transition-all">
            <Share2 className="w-4 h-4" /> Share
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-white transition-all">
            <Heart className="w-4 h-4" /> Save
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-20">
        {/* Main Content Column */}
        <div className="lg:col-span-8">
          {/* Hero Section */}
          <div className="relative rounded-[2.5rem] overflow-hidden mb-10 h-[350px] md:h-[500px] shadow-2xl">
            <img 
              src={exam.imageUrl} 
              alt={exam.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-14 w-full">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="bg-blue-600 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                  Entrance Exam
                </span>
                <span className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider ${
                  exam.status === 'Ongoing' ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'
                }`}>
                  {exam.status}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">{exam.title}</h1>
              <div className="flex items-center gap-3 text-slate-200 text-lg font-medium">
                <Building2 className="w-6 h-6 text-blue-400" />
                <span>{exam.university} — {exam.faculty}</span>
              </div>
            </div>
          </div>

          {/* Details Content */}
          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10 md:p-16 shadow-sm">
            <section className="mb-14">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-8 flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                  <Info className="w-6 h-6 text-blue-600" />
                </div>
                About the Entrance
              </h2>
              <div className="space-y-6">
                <p className="text-slate-600 leading-relaxed text-xl">
                  {exam.description}
                </p>
                <p className="text-slate-600 leading-relaxed text-xl">
                  The evaluation process is rigorous and aims to select the brightest minds for the upcoming academic session. Candidates are advised to prepare thoroughly and follow all guidelines provided by the university administration.
                </p>
              </div>
            </section>

            <section className="mb-14">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-8 flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                </div>
                Eligibility Criteria
              </h2>
              <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8">
                <p className="text-slate-700 leading-relaxed text-lg font-semibold mb-6">
                  {exam.eligibility}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Valid identification card', 'Passport size photographs', 'Transcript of previous degree', 'Character Certificate'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-slate-600 bg-white p-4 rounded-xl border border-slate-100">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Application Process</h2>
              <div className="grid grid-cols-1 gap-8">
                {[
                  { step: '01', title: 'Online Registration', desc: 'Create an account on the university portal and verify your email address to begin your application journey.' },
                  { step: '02', title: 'Document Upload', desc: 'Upload scanned copies of all required documents in JPEG or PDF format, ensuring they meet the specified size limits.' },
                  { step: '03', title: 'Fee Payment', desc: 'Securely pay the application fee via integrated online payment gateways or by uploading a bank voucher.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-8 group">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-50 text-blue-600 rounded-[1.25rem] flex items-center justify-center font-black text-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-500 text-lg leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="lg:col-span-4 space-y-10">
          {/* Quick Info Card */}
          <div className="bg-[#0F172A] rounded-[2.5rem] p-10 text-white shadow-2xl shadow-blue-900/10">
            <h3 className="text-2xl font-bold mb-10">Exam Quick Info</h3>
            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-slate-400 tracking-widest mb-1">Exam Date</p>
                  <p className="text-lg font-bold">{exam.examDate}</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-slate-400 tracking-widest mb-1">Center</p>
                  <p className="text-lg font-bold">{exam.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-slate-400 tracking-widest mb-1">Fee</p>
                  <p className="text-lg font-bold">{exam.applicationFee}</p>
                </div>
              </div>
            </div>

            <button className="w-full mt-12 bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 rounded-[1.5rem] text-lg transition-all shadow-xl shadow-blue-600/30 active:scale-95">
              Apply for Exam
            </button>
            <p className="text-center mt-6 text-sm text-slate-400 font-medium italic">
              * Deadline ends in 4 days
            </p>
          </div>

          {/* Related Entrances - Now showing 2 cards as requested */}
          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-8">Related Entrances</h3>
            <div className="space-y-8">
              {relatedExams.map((related) => (
                <div 
                  key={related.id} 
                  className="flex flex-col gap-4 group cursor-pointer"
                  onClick={() => onRelatedClick(related.id)}
                >
                  <div className="w-full h-40 rounded-[1.5rem] overflow-hidden shadow-sm">
                    <img src={related.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{related.title}</h4>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-3">{related.university}</p>
                    <span className="inline-flex items-center text-sm font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                      View Details
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamDetails;
