"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Sample entrance exam data (in production, fetch from API)
const entranceData: { [key: string]: any } = {
  "ioe-entrance": {
    title: "IOE Engineering Entrance Examination 2081",
    shortTitle: "IOE Entrance",
    board: "Institute of Engineering, Tribhuvan University",
    location: "Pulchowk, Lalitpur",
    badges: ["Engineering Entrance", "Upcoming"],
    examDate: "Shrawan 15, 2081 (July 30, 2024)",
    formStart: "Jestha 01, 2081 (May 14, 2024)",
    formEnd: "Jestha 20, 2081 (June 3, 2024)",
    noticeDate: "Baishakh 28, 2081 (May 11, 2024)",
    overview:
      "The IOE Entrance Examination is conducted annually for admission to BE/BArch programs at various constituent and affiliated campuses under Tribhuvan University. This highly competitive exam tests students' knowledge in Physics, Chemistry, Mathematics, and English.",
    eligibility: [
      "Must have passed +2 or equivalent with Physics, Chemistry, and Mathematics.",
      "Minimum GPA of 2.4 (45%) in aggregate and C grade in each subject.",
      "Must be below 27 years of age (31 for reserved categories).",
    ],
    examPattern: {
      subjects: [
        "Physics (30 marks)",
        "Chemistry (30 marks)",
        "Mathematics (30 marks)",
        "English (10 marks)",
      ],
      duration: "2 Hours",
      assessment: "100 MCQs",
    },
    applicationSteps: [
      {
        title: "Online Registration",
        description:
          "Visit the official IOE website and create an account with valid email and mobile number. Complete the registration form with accurate personal details.",
      },
      {
        title: "Fill Application Form",
        description:
          "Log in and fill the entrance application form. Upload scanned copies of required documents including citizenship, +2 marksheet, and passport-size photo.",
      },
      {
        title: "Pay Examination Fee",
        description:
          "Fee: Rs. 2,000 (General) | Rs. 1,000 (Reserved). Payment can be made through bank deposit, eSewa, or Khalti.",
      },
      {
        title: "Download Admit Card",
        description:
          "Admit cards will be available 1 week before the exam. Download and print 2 copies. Verify all details carefully.",
      },
    ],
    quickSummary: {
      examName: "IOE Entrance",
      eligibility: "+2 Science (PCM)",
      frequency: "Once a Year",
      website: "entrance.ioe.edu.np",
    },
    notices: [
      {
        id: 1,
        title: "IOE Entrance 2081 - Application Form Notice",
        source: "Institute of Engineering",
        date: "May 11, 2024",
        official: true,
      },
      {
        id: 2,
        title: "Syllabus and Model Questions Released",
        source: "IOE Dean Office",
        date: "May 5, 2024",
        official: true,
      },
    ],
    faqs: [
      {
        question: "How many times can I attempt the IOE entrance exam?",
        answer:
          "There is no restriction on the number of attempts. Students can appear for the entrance exam multiple times until they secure admission or exceed the age limit.",
      },
      {
        question: "Is negative marking applicable in IOE entrance?",
        answer:
          "No, there is no negative marking in the IOE entrance examination. Each correct answer carries 1 mark, and wrong answers do not deduct any marks.",
      },
      {
        question: "Can I choose my preferred engineering campus?",
        answer:
          "Yes, during counseling after the results, you can select your preferred campus and program based on your rank and seat availability.",
      },
    ],
  },
  // Add more entrance exams as needed
};

export default function EntranceDetailPage() {
  const params = useParams();
  const entranceId = params.id as string;
  const entrance = entranceData[entranceId] || entranceData["ioe-entrance"];

  const [pdfModalOpen, setPdfModalOpen] = useState(false);
  const [pdfTitle, setPdfTitle] = useState("");
  const [pdfLoading, setPdfLoading] = useState(false);
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);

  const openPdfViewer = (title: string) => {
    setPdfTitle(title);
    setPdfModalOpen(true);
    setPdfLoading(true);
    setTimeout(() => setPdfLoading(false), 1000);
  };

  const closePdfViewer = () => {
    setPdfModalOpen(false);
  };

  const showToast = (message: string, type: "success" | "info" = "success") => {
    alert(message);
  };

  const downloadPDF = (docName: string) => {
    showToast(`Downloading: ${docName}.pdf`, "success");
  };

  const downloadRoutine = () => {
    showToast("Downloading entrance routine...", "success");
  };

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <>
      {/* Font Awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      <div className="bg-slate-50 text-slate-800 antialiased selection:bg-blue-600 selection:text-white min-h-screen">
        {/* PDF Viewer Modal */}
        {pdfModalOpen && (
          <div
            className="fixed inset-0 z-100 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 md:p-8"
            onClick={closePdfViewer}
          >
            <div
              className="bg-white w-full max-w-5xl h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex justify-between items-center shrink-0">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-red-100 rounded text-red-600 flex items-center justify-center">
                    <i className="fa-solid fa-file-pdf"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm md:text-base">
                      {pdfTitle}
                    </h3>
                    <p className="text-xs text-slate-500">
                      Official Document Preview
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="p-2 text-slate-500 hover:text-blue-600 hover:bg-slate-200 rounded transition"
                    title="Print"
                  >
                    <i className="fa-solid fa-print"></i>
                  </button>
                  <button
                    className="p-2 text-slate-500 hover:text-blue-600 hover:bg-slate-200 rounded transition"
                    title="Download"
                  >
                    <i className="fa-solid fa-download"></i>
                  </button>
                  <button
                    onClick={closePdfViewer}
                    className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded transition ml-2"
                    title="Close"
                  >
                    <i className="fa-solid fa-xmark text-lg"></i>
                  </button>
                </div>
              </div>

              {/* PDF Content Area */}
              <div className="flex-1 bg-slate-500 overflow-y-auto p-4 md:p-8 flex justify-center relative">
                {/* Loading Spinner */}
                {pdfLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                    <div className="flex flex-col items-center gap-3">
                      <i className="fa-solid fa-circle-notch fa-spin text-blue-600 text-3xl"></i>
                      <p className="text-slate-500 text-sm font-medium">
                        Loading Document...
                      </p>
                    </div>
                  </div>
                )}

                {/* Simulated PDF Page */}
                <div className="bg-white w-full max-w-3xl min-h-[1000px] shadow-lg p-8 md:p-12 relative">
                  {/* Watermark */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                    <i className="fa-solid fa-stamp text-[400px]"></i>
                  </div>

                  {/* Content Mockup */}
                  <div className="border-b-2 border-slate-800 pb-4 mb-8 text-center">
                    <div className="flex justify-center mb-4 text-blue-900">
                      <i className="fa-solid fa-building-columns text-5xl"></i>
                    </div>
                    <h2 className="text-2xl font-bold uppercase text-slate-900">
                      {entrance.board}
                    </h2>
                    <p className="text-sm font-semibold uppercase text-slate-600">
                      {entrance.location}
                    </p>
                  </div>

                  <div className="text-right mb-8">
                    <p className="text-sm font-medium">Date: 2081/01/28</p>
                    <p className="text-sm font-medium">Ref No: 2081-IOE-ENT</p>
                  </div>

                  <div className="text-center mb-8">
                    <h1 className="text-xl font-bold underline decoration-2 underline-offset-4">
                      NOTICE REGARDING ENTRANCE EXAMINATION
                    </h1>
                  </div>

                  <div className="space-y-4 text-justify leading-relaxed text-sm md:text-base text-slate-800">
                    <p>
                      This is to notify all concerned students and educational
                      institutions that the entrance examination for BE/BArch
                      programs for the academic year 2081 will be conducted on{" "}
                      <strong>{entrance.examDate}</strong>.
                    </p>

                    <p>
                      The examination will be held in the physical mode at
                      designated examination centers. Students are requested to
                      download their admit cards from the official portal at
                      least 3 days before the examination date.
                    </p>

                    <div className="my-8 border border-slate-300 p-4 bg-slate-50">
                      <h4 className="font-bold mb-2">
                        Important Instructions:
                      </h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          Bring your admit card and valid ID card to the exam
                          center.
                        </li>
                        <li>
                          Mobile phones and electronic devices are strictly
                          prohibited.
                        </li>
                        <li>
                          Arrive at least 30 minutes before the scheduled time.
                        </li>
                        <li>
                          Use of unfair means will result in disqualification.
                        </li>
                      </ul>
                    </div>

                    <p>
                      For any queries or discrepancies, please contact the Dean
                      Office or visit our official website.
                    </p>
                  </div>

                  <div className="mt-16 flex justify-end">
                    <div className="text-center">
                      <div className="h-16 w-32 mx-auto mb-2 flex items-end justify-center">
                        <span className="text-2xl text-blue-900 transform -rotate-12 italic">
                          Signature
                        </span>
                      </div>
                      <div className="border-t border-slate-800 pt-2 w-48">
                        <p className="font-bold">Dean, IOE</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="max-w-6xl mx-auto pb-20">
          {/* Breadcrumb */}
          <div className="px-4 py-6 text-sm text-slate-500 flex items-center">
            <Link
              href="/"
              className="hover:text-blue-600 cursor-pointer transition"
            >
              Home
            </Link>
            <i className="fa-solid fa-chevron-right text-[10px] mx-3 text-slate-300"></i>
            <Link
              href="/colleges/entrance"
              className="hover:text-blue-600 cursor-pointer transition"
            >
              Entrance Exams
            </Link>
            <i className="fa-solid fa-chevron-right text-[10px] mx-3 text-slate-300"></i>
            <span className="font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
              {entrance.shortTitle}
            </span>
          </div>

          {/* Hero Section */}
          <section className="relative bg-blue-900 rounded-none md:rounded-3xl shadow-2xl overflow-hidden mx-0 md:mx-4 mb-10 group">
            {/* Animated Background */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-600 blur-3xl opacity-30 mix-blend-screen animate-blob"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-purple-600 blur-3xl opacity-20 mix-blend-screen"></div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] mask-[linear-gradient(to_bottom,white,transparent)]"></div>

            {/* Content */}
            <div className="relative z-10 p-8 md:p-10 flex flex-col justify-center w-full">
              <div className="w-full space-y-4">
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-semibold text-blue-100 shadow-sm">
                    <i className="fa-solid fa-graduation-cap text-yellow-400"></i>
                    {entrance.badges[0]}
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 backdrop-blur-md text-xs font-semibold text-green-300 shadow-sm animate-pulse">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    {entrance.badges[1]}
                  </div>
                </div>

                {/* Title & Actions */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                  <div>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight drop-shadow-sm">
                      {entrance.title.split(" ").slice(0, 3).join(" ")}{" "}
                      <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-200 via-white to-blue-200">
                        {entrance.title.split(" ").slice(3).join(" ")}
                      </span>
                    </h1>
                    <p className="text-blue-100 text-lg max-w-3xl leading-relaxed font-light mt-3">
                      {entrance.overview}
                    </p>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-3 shrink-0">
                    <button
                      onClick={() => openPdfViewer("Official Entrance Notices")}
                      className="bg-white text-blue-900 hover:bg-blue-50 px-6 py-3 rounded-xl font-bold transition-all transform hover:-translate-y-0.5 shadow-lg shadow-blue-900/50 flex items-center gap-2"
                    >
                      <span>View Notices</span>
                      <i className="fa-solid fa-eye text-blue-600"></i>
                    </button>
                    <button
                      onClick={downloadRoutine}
                      className="bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2"
                    >
                      <i className="fa-solid fa-download"></i> Syllabus
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 md:px-4">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-8">
              {/* Official Notices */}
              <section
                id="official-notices"
                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden scroll-mt-24"
              >
                <div className="bg-slate-50 p-5 border-b border-slate-200 flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <i className="fa-solid fa-bullhorn text-blue-600"></i>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">
                        Official Entrance Notices
                      </h2>
                      <p className="text-xs text-slate-500">
                        Latest updates from {entrance.board}
                      </p>
                    </div>
                  </div>
                  <button className="text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-700 transition px-4 py-2 rounded-lg hover:bg-blue-50">
                    View All Notices
                  </button>
                </div>

                <div className="p-6 space-y-4">
                  {entrance.notices.map((notice: any) => (
                    <div
                      key={notice.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/30 transition cursor-pointer group"
                    >
                      <div className="flex-1">
                        <div className="flex items-start gap-3">
                          {notice.official && (
                            <div className="shrink-0 mt-0.5">
                              <i className="fa-solid fa-badge-check text-green-500 text-lg"></i>
                            </div>
                          )}
                          <div>
                            <h4 className="font-bold text-slate-900 group-hover:text-blue-700 transition">
                              {notice.title}
                            </h4>
                            <p className="text-xs text-slate-500 mt-1">
                              <i className="fa-solid fa-building mr-1.5"></i>
                              {notice.source} • {notice.date}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <button
                          onClick={() => openPdfViewer(notice.title)}
                          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition flex items-center gap-1.5"
                        >
                          <i className="fa-regular fa-eye"></i> View
                        </button>
                        <button
                          onClick={() => downloadPDF(notice.title)}
                          className="px-4 py-2 border border-slate-300 hover:border-blue-500 hover:bg-blue-50 text-slate-700 hover:text-blue-700 text-xs font-bold rounded-lg transition"
                        >
                          <i className="fa-solid fa-download"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Important Dates */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h3 className="font-bold text-slate-900 text-lg mb-5 flex items-center gap-2">
                  <i className="fa-solid fa-calendar-days text-blue-500"></i>{" "}
                  Important Dates
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Notice Published", date: entrance.noticeDate },
                    { label: "Form Opens", date: entrance.formStart },
                    { label: "Form Closes", date: entrance.formEnd },
                    { label: "Examination Date", date: entrance.examDate },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100"
                    >
                      <span className="text-sm text-slate-600 font-medium">
                        {item.label}
                      </span>
                      <span className="text-sm font-bold text-slate-900">
                        {item.date}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Application Steps */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h3 className="font-bold text-slate-900 text-lg mb-5 flex items-center gap-2">
                  <i className="fa-solid fa-list-check text-blue-500"></i> How
                  to Apply
                </h3>
                <div className="space-y-6">
                  {entrance.applicationSteps.map((step: any, index: number) => (
                    <div key={index} className="flex gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-lg">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 mb-1">
                          {step.title}
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQs */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h3 className="font-bold text-slate-900 text-lg mb-5 flex items-center gap-2">
                  <i className="fa-solid fa-circle-question text-blue-500"></i>{" "}
                  Frequently Asked Questions
                </h3>
                <div className="space-y-3">
                  {entrance.faqs.map((faq: any, index: number) => (
                    <div
                      key={index}
                      className="border border-slate-200 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex justify-between items-center p-4 text-left hover:bg-slate-50 transition"
                      >
                        <span className="font-semibold text-slate-900 pr-4">
                          {faq.question}
                        </span>
                        <i
                          className={`fa-solid fa-chevron-down text-slate-400 transition-transform ${
                            openFaqs.includes(index) ? "rotate-180" : ""
                          }`}
                        ></i>
                      </button>
                      {openFaqs.includes(index) && (
                        <div className="p-4 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Quick Summary */}
              <section className="bg-slate-900 text-white rounded-2xl shadow-lg p-6">
                <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                  <i className="fa-solid fa-info-circle"></i> Quick Summary
                </h3>
                <div className="space-y-4">
                  {Object.entries(entrance.quickSummary).map(
                    ([key, value]: [string, any], index) => (
                      <div
                        key={key}
                        className="p-3 bg-white/10 rounded-lg border border-white/10 flex justify-between items-center"
                      >
                        <span className="text-xs text-slate-300 font-medium capitalize">
                          {key.replace(/([A-Z])/g, " $1")}
                        </span>
                        {key === "website" ? (
                          <a
                            href={`https://${value}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-bold text-blue-300 hover:text-blue-200 hover:underline flex items-center gap-1"
                          >
                            {value}{" "}
                            <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                          </a>
                        ) : (
                          <span className="text-sm font-bold text-white">
                            {value}
                          </span>
                        )}
                      </div>
                    )
                  )}
                </div>
              </section>

              {/* Eligibility */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h3 className="font-bold text-slate-900 text-lg mb-5 flex items-center gap-2">
                  <i className="fa-solid fa-user-check text-blue-500"></i>{" "}
                  Eligibility
                </h3>
                <ul className="space-y-4">
                  {entrance.eligibility.map((item: string, index: number) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-slate-600"
                    >
                      <i className="fa-solid fa-circle-check text-green-500 mt-0.5 text-base"></i>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Exam Pattern */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h3 className="font-bold text-slate-900 text-lg mb-5 flex items-center gap-2">
                  <i className="fa-solid fa-puzzle-piece text-blue-500"></i>{" "}
                  Exam Pattern
                </h3>
                <div className="space-y-5">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Subject Distribution
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {entrance.examPattern.subjects.map(
                        (subject: string, index: number) => (
                          <span
                            key={index}
                            className="text-xs bg-slate-100 text-slate-700 font-medium px-2.5 py-1.5 rounded-md border border-slate-200"
                          >
                            {subject}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-3 rounded-lg text-center">
                      <p className="text-xs text-slate-500">Duration</p>
                      <p className="text-base font-bold text-slate-800">
                        {entrance.examPattern.duration}
                      </p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg text-center">
                      <p className="text-xs text-slate-500">Questions</p>
                      <p className="text-base font-bold text-slate-800">
                        {entrance.examPattern.assessment}
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Syllabus CTA */}
              <section className="relative bg-slate-900 rounded-2xl shadow-lg p-6 overflow-hidden group text-center md:text-left">
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-500 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition duration-500"></div>

                <div className="relative z-10">
                  <div className="inline-block p-3 rounded-full bg-white/10 text-white mb-3">
                    <i className="fa-solid fa-book-open text-xl"></i>
                  </div>
                  <h3 className="font-bold text-white text-lg mb-1">
                    Need Syllabus?
                  </h3>
                  <p className="text-sm text-slate-300 mb-5 leading-relaxed">
                    Download the latest syllabus & model questions.
                  </p>
                  <button className="w-full bg-white text-slate-900 font-bold text-sm py-3 rounded-xl hover:bg-blue-50 transition flex items-center justify-center gap-2 shadow-lg">
                    View Syllabus PDF{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </section>
            </div>
          </div>

          {/* CTA Section */}
          <section className="mt-12 mx-4 relative bg-linear-to-r from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-center shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-30"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6 backdrop-blur-sm border border-white/20">
                <i className="fa-solid fa-bell text-2xl text-yellow-300"></i>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Don&apos;t Miss Important Dates
              </h2>
              <p className="text-blue-100 mb-8 max-w-xl mx-auto text-lg">
                Get instant notifications on your mobile for entrance updates,
                admit card releases, and result publications.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-blue-700 font-bold py-3.5 px-8 rounded-xl hover:bg-blue-50 transition shadow-lg flex items-center justify-center gap-2 hover:scale-105 transform duration-200">
                  Get Entrance Alerts <i className="fa-regular fa-bell"></i>
                </button>
                <Link href="/colleges/entrance">
                  <button className="bg-transparent border-2 border-white/30 text-white font-bold py-3.5 px-8 rounded-xl hover:bg-white/10 transition flex items-center justify-center gap-2">
                    View Similar Entrances
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>

      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.4s ease-out;
        }
      `}</style>
    </>
  );
}
