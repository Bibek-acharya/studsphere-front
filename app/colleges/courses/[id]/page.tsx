"use client";

import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Code2,
  Globe,
  Database,
  Network,
  Cloud,
  Cpu,
  Clock,
  GraduationCap,
  Building2,
  MapPin,
  CheckCircle2,
  Briefcase,
  Users,
  ChevronDown,
  Download,

} from "lucide-react";

interface CourseDetailsPageProps {
  params: {
    id: string;
  };
}

export default function CourseDetailsPage({ params }: CourseDetailsPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Sample course data - in a real app, fetch based on params.id
  const course = {
    id: params.id,
    title: "Bachelor in Information Technology",
    shortTitle: "BIT",
    description:
      "Build a strong foundation in software development, networking, databases, and modern IT systems. A comprehensive program designed to prepare you for a successful global tech career.",
    duration: "4 Years (8 Semesters)",
    level: "Bachelor",
    faculty: "Science / Management",
    location: "Available in Nepal",
    govtFee: "NPR XXX,XXX",
    privateFee: "NPR X,XXX,XXX",
  };

  const learningTopics = [
    {
      icon: Code2,
      title: "Programming",
      subtitle: "C, C++, Java, Python",
      color: "blue",
    },
    {
      icon: Globe,
      title: "Web Development",
      subtitle: "HTML, CSS, JS, React",
      color: "teal",
    },
    {
      icon: Database,
      title: "Database Mgmt",
      subtitle: "SQL, NoSQL, Normalization",
      color: "indigo",
    },
    {
      icon: Network,
      title: "Networks & Security",
      subtitle: "Protocols, Cyber Security",
      color: "purple",
    },
    {
      icon: Cloud,
      title: "Cloud & Emerging Tech",
      subtitle: "AWS, IoT, AI Basics",
      color: "orange",
    },
    {
      icon: Cpu,
      title: "Software Engineering",
      subtitle: "SDLC, Agile, Testing",
      color: "pink",
    },
  ];

  const courseStructure = [
    {
      title: "Semester 1–2",
      description:
        "Fundamentals of IT, Programming Basics, Mathematics, Communication Skills.",
    },
    {
      title: "Semester 3–4",
      description:
        "Object-Oriented Programming, Data Structures, DBMS, Web Technologies.",
    },
    {
      title: "Semester 5–6",
      description:
        "Software Engineering, Networking, Operating Systems, Electives.",
    },
    {
      title: "Semester 7–8",
      description: "Advanced Electives, Internship, Final Year Project.",
      isLast: true,
    },
  ];

  const universities = [
    { name: "Tribhuvan University", abbr: "TU" },
    { name: "Pokhara University", abbr: "PU" },
    { name: "Purbanchal University", abbr: "PU" },
    { name: "Kathmandu University", abbr: "KU" },
  ];

  const eligibilityCriteria = [
    "Completed +2 (Science or Management)",
    "Minimum GPA as per university rules",
    "Mathematics preferred (varies by university)",
  ];

  const careerOptions = [
    "Software Developer",
    "Web Developer",
    "System Analyst",
    "Network Admin",
    "Database Admin",
    "Startup Founder",
  ];

  const faqs = [
    {
      question: "Is BIT good for the future?",
      answer:
        "Yes, IT is one of the fastest-growing fields with global demand. Graduates can explore careers internationally in various tech sectors.",
    },
    {
      question: "Can management students apply?",
      answer:
        "Yes, many universities accept management students, though some may require a minimum grade in specific subjects.",
    },
    {
      question: "Is internship compulsory?",
      answer:
        "Yes, most universities include a mandatory internship component in the final semesters to ensure students are job-ready.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen">
      {/* Hero Section */}
      <header className="relative bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50/50"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-teal-50 rounded-full blur-3xl opacity-50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              Admissions Open for 2025
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Bachelor in{" "}
              <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {course.title}
              </span>{" "}
              ({course.shortTitle})
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {course.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/30 transform hover:-translate-y-0.5">
                Apply Now <ArrowRight className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-3.5 rounded-xl font-semibold hover:bg-slate-50 transition hover:border-slate-300">
                <Download className="w-4 h-4" /> Download Syllabus
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column (Content) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <section id="overview" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-blue-600" /> About the Course
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600">
                <p className="mb-4">
                  The Bachelor in Information Technology (BIT) program is
                  designed to develop skilled IT professionals with practical
                  and theoretical knowledge. The course focuses on programming,
                  system analysis, networking, databases, and emerging
                  technologies.
                </p>
                <p>
                  Students gain hands-on experience through projects, labs, and
                  internships, making them industry-ready after graduation. It
                  bridges the gap between traditional computer science theory
                  and modern practical application.
                </p>
              </div>
            </section>

            {/* What You Will Learn */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                What You Will Learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {learningTopics.map((topic, index) => {
                  const Icon = topic.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-start gap-3"
                    >
                      <div
                        className={`bg-${topic.color}-50 p-2 rounded-lg text-${topic.color}-600`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {topic.title}
                        </h3>
                        <p className="text-sm text-slate-500 mt-1">
                          {topic.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Course Structure */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Course Structure
              </h2>
              <div className="space-y-4">
                {courseStructure.map((item, index) => (
                  <div key={index} className="flex group">
                    <div className="flex flex-col items-center mr-4">
                      <div
                        className={`w-3 h-3 ${
                          item.isLast ? "bg-teal-500" : "bg-blue-600"
                        } rounded-full mt-2 group-hover:scale-125 transition`}
                      ></div>
                      {!item.isLast && (
                        <div className="w-0.5 bg-slate-200 h-full"></div>
                      )}
                    </div>
                    <div className={item.isLast ? "pb-2" : "pb-8"}>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Universities */}
            <section className="bg-blue-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Universities Offering This Course
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {universities.map((uni, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm"
                  >
                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-400">
                      {uni.abbr}
                    </div>
                    <span className="font-medium text-slate-700">
                      {uni.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <a
                  href="#"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  👉 View All Colleges Offering This Course
                </a>
              </div>
            </section>

            {/* Eligibility & Careers Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Eligibility */}
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  Eligibility Criteria
                </h2>
                <ul className="space-y-3">
                  {eligibilityCriteria.map((criteria, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-slate-600">{criteria}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Careers */}
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  Career Opportunities
                </h2>
                <div className="flex flex-wrap gap-2">
                  {careerOptions.map((career, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                    >
                      {career}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {/* Internship */}
            <section className="bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-4">
                  Internship & Practical Exposure
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex gap-3">
                    <div className="bg-white/10 p-2 rounded-lg h-fit">
                      <Briefcase className="w-5 h-5 text-blue-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Mandatory Internship</h4>
                      <p className="text-sm text-slate-400 mt-1">
                        Gain industry experience before you graduate.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-white/10 p-2 rounded-lg h-fit">
                      <Users className="w-5 h-5 text-blue-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Industry Collaboration</h4>
                      <p className="text-sm text-slate-400 mt-1">
                        Work on real-world case studies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQs */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-slate-50 transition"
                    >
                      <span className="font-semibold text-slate-800">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                          openFaq === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`bg-slate-50 border-t border-slate-100 transition-all duration-300 ease-in-out ${
                        openFaq === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      } overflow-hidden`}
                    >
                      <div className="px-6 py-4 text-slate-600">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column (Sticky Sidebar) */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-24 space-y-6">
              {/* Highlights Card */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xl shadow-slate-200/50">
                <h3 className="text-lg font-bold text-slate-900 mb-4 pb-4 border-b border-slate-100">
                  Key Highlights
                </h3>

                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-semibold uppercase">
                        Duration
                      </p>
                      <p className="text-slate-800 font-medium">
                        {course.duration}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-semibold uppercase">
                        Degree Level
                      </p>
                      <p className="text-slate-800 font-medium">
                        {course.level}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-semibold uppercase">
                        Faculty
                      </p>
                      <p className="text-slate-800 font-medium">
                        {course.faculty}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-semibold uppercase">
                        Location
                      </p>
                      <p className="text-slate-800 font-medium">
                        {course.location}
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8">
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition mb-3">
                    Apply Now
                  </button>
                  <button className="w-full bg-white text-blue-600 border border-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                    Download Brochure
                  </button>
                </div>
              </div>

              {/* Fee Structure Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Fee Structure (Approx.)
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-slate-500">
                      Government Colleges
                    </p>
                    <p className="text-lg font-bold text-slate-800">
                      {course.govtFee}
                    </p>
                  </div>
                  <div className="h-px bg-slate-200"></div>
                  <div>
                    <p className="text-sm text-slate-500">Private Colleges</p>
                    <p className="text-lg font-bold text-slate-800">
                      {course.privateFee}
                    </p>
                  </div>
                  <p className="text-xs text-slate-400 mt-2">
                    *Fees vary by university and college
                  </p>
                </div>
              </div>

              {/* Why Choose Card */}
              <div className="bg-linear-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-lg">
                <h3 className="text-lg font-bold mb-4">Why Choose BIT?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-300" /> High
                    demand in job market
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-300" /> Global
                    career opportunities
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-300" /> Tech
                    enthusiast friendly
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-300" />{" "}
                    Foundation for Masters
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>

    
    </div>
  );
}
