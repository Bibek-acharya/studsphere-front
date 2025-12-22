"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Sample exam data (in production, fetch from API)
const examData: { [key: string]: any } = {
  "neb-class-12": {
    title: "NEB Class 12 Annual Examination 2081",
    shortTitle: "NEB Class 12",
    board: "National Examination Board",
    location: "Sanothimi, Bhaktapur",
    badges: ["National Board Exam", "Upcoming"],
    examDate: "Baishakh 14, 2082 (April 27, 2025)",
    formStart: "Magh 05, 2081 (Jan 18, 2025)",
    formEnd: "Magh 20, 2081 (Feb 3, 2025)",
    noticeDate: "Magh 02, 2081 (Jan 15, 2025)",
    overview:
      "The National Examination Board (NEB) Class 12 examination is the final gateway for secondary education in Nepal. Successfully clearing this exam is mandatory for students aspiring to pursue Bachelor's degrees in Nepal or abroad.",
    eligibility: [
      "Must have passed Class 11 internal and final examinations.",
      "Minimum 75% attendance in Class 12 academic year.",
      "Registration form submitted to NEB within deadline.",
    ],
    examPattern: {
      subjects: [
        "Compulsory English",
        "Nepali",
        "Social / Math",
        "+3 Major Subjects",
      ],
      duration: "3 Hours",
      assessment: "75% Theory",
    },
    applicationSteps: [
      {
        title: "Check Official Notice",
        description:
          "Ensure you meet the eligibility criteria mentioned in the latest NEB notice. Download the notice PDF above.",
      },
      {
        title: "Fill College Form",
        description:
          "Collect the exam form from your college administration. Fill details exactly as per your Grade 10/11 marksheets.",
      },
      {
        title: "Pay Exam Fee",
        description:
          "Regular Fee: Rs. 600 | Late Fee: Rs. 1200. Pay via ConnectIPS or Bank Voucher.",
      },
      {
        title: "Receive Admit Card",
        description:
          "Admit cards will be distributed 2 weeks before exams. Check all details carefully immediately upon receipt.",
      },
    ],
    quickSummary: {
      examName: "NEB Class 12",
      eligibility: "Passed Class 11",
      frequency: "Once a Year",
      website: "www.neb.gov.np",
    },
    notices: [
      {
        id: 1,
        title: "Routine Published: Grade 12 Annual Exam 2081",
        source: "NEB, Sanothimi",
        date: "Jan 15, 2025",
        official: true,
      },
      {
        id: 2,
        title: "Form Filling Notice for Regular/Partial Students",
        source: "NEB, Sanothimi",
        date: "Dec 20, 2024",
        official: false,
      },
    ],
    faqs: [
      {
        question: "Can I change my exam center?",
        answer:
          "Generally, exam centers are assigned by NEB and cannot be changed. However, in cases of medical emergencies or disability, you may apply to the Sanothimi office with valid proof at least 15 days before the exam.",
      },
      {
        question: "What is the minimum GPA required to pass?",
        answer:
          "According to the new grading system (Letter Grading Directive 2078), students must secure a minimum of 35% marks (Grade D) in theory and 40% in internal/practical assessments for each subject individually to be considered 'Passed'.",
      },
    ],
  },
  // Add more exams as needed
};

export default function ExamDetailPage() {
  const params = useParams();
  const examId = params.id as string;
  const exam = examData[examId] || examData["neb-class-12"];

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
    // Simple toast implementation
    alert(message);
  };

  const downloadPDF = (docName: string) => {
    showToast(`Downloading: ${docName}.pdf`, "success");
  };

  const downloadRoutine = () => {
    showToast("Downloading NEB Class 12 Routine...", "success");
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
                      National Examination Board
                    </h2>
                    <p className="text-sm font-semibold uppercase text-slate-600">
                      Sanothimi, Bhaktapur
                    </p>
                  </div>

                  <div className="text-right mb-8">
                    <p className="text-sm font-medium">Date: 2081/10/02</p>
                    <p className="text-sm font-medium">Ref No: 2081/82-Ex</p>
                  </div>

                  <div className="text-center mb-8">
                    <h1 className="text-xl font-bold underline decoration-2 underline-offset-4">
                      NOTICE REGARDING GRADE 12 ANNUAL EXAMINATION
                    </h1>
                  </div>

                  <div className="space-y-4 text-justify leading-relaxed text-sm md:text-base text-slate-800">
                    <p>
                      This is to notify all concerned students, parents, and
                      educational institutions that the annual examination for
                      Grade 12 (Regular/Partial/Grade Improvement) for the
                      academic year 2081 will commence from{" "}
                      <strong>Baishakh 14, 2082 (April 27, 2025)</strong>.
                    </p>

                    <p>
                      The examination will be conducted in the physical mode at
                      designated examination centers from{" "}
                      <strong>8:00 AM to 11:00 AM</strong>. Students are
                      requested to collect their admit cards from their
                      respective colleges by the end of Chaitra 2081.
                    </p>

                    <div className="my-8 border border-slate-300 p-4 bg-slate-50">
                      <h4 className="font-bold mb-2">
                        Important Instructions:
                      </h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          Mobile phones, smartwatches, and other electronic
                          devices are strictly prohibited inside the examination
                          hall.
                        </li>
                        <li>
                          Students must arrive at the examination center at
                          least 30 minutes before the scheduled time.
                        </li>
                        <li>Admit card is mandatory for entry.</li>
                      </ul>
                    </div>

                    <p>
                      For any discrepancies in the routine or admit card
                      details, please contact the NEB office or your college
                      administration immediately.
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
                        <p className="font-bold">Controller of Examinations</p>
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
              href="/colleges/exams"
              className="hover:text-blue-600 cursor-pointer transition"
            >
              Exams
            </Link>
            <i className="fa-solid fa-chevron-right text-[10px] mx-3 text-slate-300"></i>
            <span className="font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
              {exam.shortTitle}
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
                    <i className="fa-solid fa-certificate text-yellow-400"></i>
                    {exam.badges[0]}
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 backdrop-blur-md text-xs font-semibold text-green-300 shadow-sm animate-pulse">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    {exam.badges[1]}
                  </div>
                </div>

                {/* Title & Actions */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                  <div>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight drop-shadow-sm">
                      {exam.title.split(" ").slice(0, 2).join(" ")}{" "}
                      <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-200 via-white to-blue-200">
                        {exam.title.split(" ").slice(2).join(" ")}
                      </span>
                    </h1>
                    <p className="text-blue-100 text-lg max-w-3xl leading-relaxed font-light mt-3">
                      {exam.overview}
                    </p>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-3 shrink-0">
                    <button
                      onClick={() => openPdfViewer("Official Exam Notices")}
                      className="bg-white text-blue-900 hover:bg-blue-50 px-6 py-3 rounded-xl font-bold transition-all transform hover:-translate-y-0.5 shadow-lg shadow-blue-900/50 flex items-center gap-2"
                    >
                      <span>View Notices</span>
                      <i className="fa-solid fa-eye text-blue-600"></i>
                    </button>
                    <button
                      onClick={downloadRoutine}
                      className="bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2"
                    >
                      <i className="fa-solid fa-download"></i> Routine
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
                        Official Exam Notices
                      </h2>
                      <p className="text-xs text-slate-500">
                        Directly fetched from {exam.board}
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-green-50 text-green-700 border border-green-200">
                    <i className="fa-solid fa-shield-halved mr-1.5"></i>{" "}
                    Verified Sources
                  </span>
                </div>

                <div className="divide-y divide-slate-100">
                  {exam.notices.map((notice: any) => (
                    <div
                      key={notice.id}
                      className="p-5 hover:bg-slate-50 transition duration-200 group relative overflow-hidden"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform"></div>

                      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-5">
                        <div className="flex items-start gap-4">
                          <div className="h-12 w-12 bg-red-50 rounded-xl text-red-600 flex items-center justify-center shrink-0 border border-red-100 shadow-sm group-hover:scale-105 transition-transform">
                            <i className="fa-solid fa-file-pdf text-2xl"></i>
                          </div>
                          <div>
                            <h3
                              className="font-bold text-slate-800 text-lg group-hover:text-blue-600 transition-colors cursor-pointer"
                              onClick={() => openPdfViewer(notice.title)}
                            >
                              {notice.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 mt-2">
                              <span className="flex items-center gap-1">
                                <i className="fa-solid fa-building text-slate-400"></i>{" "}
                                {notice.source}
                              </span>
                              <span className="flex items-center gap-1">
                                <i className="fa-regular fa-calendar text-slate-400"></i>{" "}
                                {notice.date}
                              </span>
                              {notice.official && (
                                <span className="text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded-md border border-emerald-200 text-[10px] uppercase">
                                  Official
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-3 shrink-0 pl-16 sm:pl-0">
                          <button
                            onClick={() => openPdfViewer(notice.title)}
                            className="px-4 py-2 text-sm font-semibold text-slate-600 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition shadow-sm"
                          >
                            View
                          </button>
                          <button
                            onClick={() => downloadPDF(notice.title)}
                            className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition shadow-sm hover:shadow-md flex items-center gap-2"
                          >
                            <span>Download</span>{" "}
                            <i className="fa-solid fa-download"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Disclaimer */}
                <div className="bg-blue-50/50 p-4 border-t border-slate-100 flex items-start gap-3">
                  <i className="fa-solid fa-circle-info text-blue-500 mt-0.5"></i>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Disclaimer:</strong> Notices are collected from
                    official sources. StudSphere acts as an aggregator and does
                    not modify official documents. Always verify with your
                    college administration.
                  </p>
                </div>
              </section>

              {/* Exam Overview */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-10 -mt-10 z-0"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
                    Exam Overview
                  </h2>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 mb-4 leading-7">
                      {exam.overview}
                    </p>
                  </div>
                </div>
              </section>

              {/* Important Dates */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
                  Important Dates (2081)
                </h2>
                <div className="overflow-x-auto rounded-lg border border-slate-200">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
                      <tr>
                        <th className="px-6 py-4 font-bold tracking-wider">
                          Event
                        </th>
                        <th className="px-6 py-4 font-bold tracking-wider text-blue-700">
                          Date (B.S.)
                        </th>
                        <th className="px-6 py-4 font-bold tracking-wider text-slate-400">
                          Date (A.D.)
                        </th>
                        <th className="px-6 py-4 font-bold tracking-wider text-center">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                      <tr className="hover:bg-slate-50 transition">
                        <td className="px-6 py-4 font-medium text-slate-800">
                          Notice Published
                        </td>
                        <td className="px-6 py-4 font-medium text-slate-700">
                          Magh 02, 2081
                        </td>
                        <td className="px-6 py-4 text-slate-500">
                          Jan 15, 2025
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-600 rounded text-xs font-semibold">
                            Done
                          </span>
                        </td>
                      </tr>
                      <tr className="bg-green-50/30 hover:bg-green-50/60 transition">
                        <td className="px-6 py-4 font-medium text-slate-800 border-l-4 border-green-500 pl-5">
                          Form Submission Start
                        </td>
                        <td className="px-6 py-4 font-bold text-blue-700">
                          Magh 05, 2081
                        </td>
                        <td className="px-6 py-4 text-slate-500">
                          Jan 18, 2025
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="inline-block px-2.5 py-1 bg-green-100 text-green-700 rounded text-xs font-bold animate-pulse">
                            Active
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition">
                        <td className="px-6 py-4 font-medium text-slate-800">
                          Exam Date
                        </td>
                        <td className="px-6 py-4 font-medium text-slate-700">
                          Baishakh 14, 2082
                        </td>
                        <td className="px-6 py-4 text-slate-500">
                          Apr 27, 2025
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="inline-block px-2.5 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-semibold">
                            Upcoming
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Application Process */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
                  Application Process
                </h2>

                <div className="relative pl-4">
                  <div className="absolute left-[11px] top-2 bottom-4 w-0.5 bg-slate-200"></div>

                  <div className="space-y-8">
                    {exam.applicationSteps.map((step: any, index: number) => (
                      <div key={index} className="relative pl-10 group">
                        <div className="absolute left-0 top-1 h-6 w-6 rounded-full bg-blue-600 border-4 border-white shadow-md flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                          <span className="text-[8px] text-white font-bold">
                            {index + 1}
                          </span>
                        </div>
                        <h4 className="font-bold text-slate-900 text-base">
                          {step.title}
                        </h4>
                        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* FAQs */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {exam.faqs.map((faq: any, index: number) => (
                    <div
                      key={index}
                      className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 hover:shadow-md"
                    >
                      <button
                        className="w-full flex justify-between items-center p-5 text-left font-semibold text-slate-800 bg-slate-50 hover:bg-slate-100 focus:outline-none"
                        onClick={() => toggleFaq(index)}
                      >
                        <span>{faq.question}</span>
                        <i
                          className={`fa-solid fa-chevron-down text-slate-400 text-sm transition-transform duration-300 ${
                            openFaqs.includes(index) ? "rotate-180" : ""
                          }`}
                        ></i>
                      </button>
                      {openFaqs.includes(index) && (
                        <div className="p-5 text-sm text-slate-600 border-t border-slate-200 bg-white leading-relaxed">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              {/* Quick Summary */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h3 className="font-bold text-slate-900 text-lg mb-5 flex items-center gap-2">
                  <i className="fa-solid fa-list-check text-blue-500"></i> Quick
                  Summary
                </h3>

                <div className="space-y-3">
                  {Object.entries(exam.quickSummary).map(
                    ([key, value]: any) => (
                      <div
                        key={key}
                        className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex justify-between items-center"
                      >
                        <span className="text-xs text-slate-500 font-medium capitalize">
                          {key.replace(/([A-Z])/g, " $1")}
                        </span>
                        {key === "website" ? (
                          <a
                            href={`https://${value}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1"
                          >
                            {value}{" "}
                            <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                          </a>
                        ) : (
                          <span className="text-sm font-bold text-slate-800">
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
                  {exam.eligibility.map((item: string, index: number) => (
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
                      Subject Areas
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exam.examPattern.subjects.map(
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
                        {exam.examPattern.duration}
                      </p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg text-center">
                      <p className="text-xs text-slate-500">Assessment</p>
                      <p className="text-base font-bold text-slate-800">
                        {exam.examPattern.assessment}
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
                    Download the latest 2081 syllabus grid & model questions.
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
                Get instant notifications on your mobile for result
                publications, routine changes, and scholarship notices.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-blue-700 font-bold py-3.5 px-8 rounded-xl hover:bg-blue-50 transition shadow-lg flex items-center justify-center gap-2 hover:scale-105 transform duration-200">
                  Get Exam Alerts <i className="fa-regular fa-bell"></i>
                </button>
                <Link href="/colleges/exams">
                  <button className="bg-transparent border-2 border-white/30 text-white font-bold py-3.5 px-8 rounded-xl hover:bg-white/10 transition flex items-center justify-center gap-2">
                    View Similar Exams
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
