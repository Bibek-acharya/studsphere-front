"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  CheckCircle2,
  DollarSign,
  Home,
  Utensils,
  BookOpen,
  UserCheck,
  Briefcase,
  FileText,
  CreditCard,
  Image as ImageIcon,
  FileCheck,
  PenLine,
  Calendar,
  Building2,
  ArrowRight,
  Flag,
  X,
  CheckCircle,
} from "lucide-react";

export default function ScholarshipDetailsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-gray-50 text-gray-800 font-sans antialiased">
      {/* Hero Section */}
      <header className="relative bg-blue-600 text-white overflow-hidden min-h-125 flex items-center">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-20">
          <div className="flex flex-col items-center text-center mx-auto max-w-4xl space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-500/50 border border-blue-400 text-white text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
              </span>
              Scholarship Open
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Full Scholarship for <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-200 to-yellow-400">
                Deserving Students
              </span>
            </h1>

            <p className="max-w-2xl text-lg text-blue-100 leading-relaxed">
              Get financial support to continue your education without worrying
              about fees, accommodation, or meals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-xl font-bold text-lg shadow-xl shadow-blue-900/20 transition-all duration-200 transform hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Apply for Scholarship{" "}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <a
                href="#eligibility"
                className="px-8 py-4 bg-blue-700/50 hover:bg-blue-700 border border-blue-400 text-white rounded-xl font-semibold text-lg backdrop-blur-sm transition-all duration-200 flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" /> Check Eligibility
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 flex items-center justify-center gap-6 text-sm text-blue-100 border-t border-blue-500/30 w-full max-w-lg">
              <div className="flex -space-x-3">
                <Image
                  className="w-10 h-10 rounded-full border-2 border-blue-600 object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64"
                  alt="Student"
                  width={40}
                  height={40}
                />
                <Image
                  className="w-10 h-10 rounded-full border-2 border-blue-600 object-cover"
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64"
                  alt="Student"
                  width={40}
                  height={40}
                />
                <Image
                  className="w-10 h-10 rounded-full border-2 border-blue-600 object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64"
                  alt="Student"
                  width={40}
                  height={40}
                />
                <div className="w-10 h-10 rounded-full border-2 border-blue-600 bg-blue-800 flex items-center justify-center text-xs font-bold text-white">
                  5k+
                </div>
              </div>
              <p>
                Join <span className="text-white font-bold">5,000+</span>{" "}
                students supported across Nepal.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Overview Section */}
        <section
          id="overview"
          className="grid md:grid-cols-12 gap-8 items-center pt-8"
        >
          <div className="md:col-span-7">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl">
                <Search className="w-5 h-5" />
              </span>
              Scholarship Overview
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                This scholarship program is designed to support academically
                capable but financially disadvantaged students. The goal is to
                ensure that no talented student is deprived of education due to
                financial constraints.
              </p>
              <p>
                The scholarship focuses on{" "}
                <span className="font-semibold text-blue-600">
                  equal access to education
                </span>
                , especially for students from remote, marginalized, and
                underprivileged communities.
              </p>
            </div>
          </div>
          <div className="md:col-span-5 bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-inner">
            <h3 className="font-bold text-gray-900 mb-4 text-lg">
              Key Highlights
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                <span className="text-gray-700">
                  Supports remote & marginalized students
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                <span className="text-gray-700">
                  Merit and Need-based selection
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                <span className="text-gray-700">
                  Applicable for Science, Mgmt & Humanities
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Scholarship Benefits
            </h2>
            <p className="text-gray-600">What selected students will receive</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Benefit Cards */}
            <BenefitCard
              icon={<DollarSign className="w-6 h-6" />}
              title="100% Tuition Fee"
              description="Full coverage of college/university tuition fees for the entire duration."
              colorClass="blue"
            />
            <BenefitCard
              icon={<Home className="w-6 h-6" />}
              title="Hostel & Accommodation"
              description="Free lodging facilities or monthly stipend for accommodation."
              colorClass="orange"
            />
            <BenefitCard
              icon={<Utensils className="w-6 h-6" />}
              title="Daily Meals Support"
              description="Nutritious meals provided daily or a food allowance included."
              colorClass="green"
            />
            <BenefitCard
              icon={<BookOpen className="w-6 h-6" />}
              title="Study Materials"
              description="Books, stationery, and exam fees covered by the program."
              colorClass="purple"
            />
            <BenefitCard
              icon={<UserCheck className="w-6 h-6" />}
              title="Mentorship"
              description="Regular guidance from industry experts and career counseling."
              colorClass="pink"
            />
            <BenefitCard
              icon={<Briefcase className="w-6 h-6" />}
              title="Skill Development"
              description="Access to internships, workshops, and soft-skills training."
              colorClass="teal"
            />
          </div>
        </section>

        {/* Eligibility & Documents Grid */}
        <div className="grid md:grid-cols-2 gap-8" id="eligibility">
          {/* Eligibility */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-blue-600" /> Eligibility
              Criteria
            </h2>
            <ul className="space-y-4">
              <EligibilityItem text="Be a citizen of Nepal." />
              <EligibilityItem text="Have completed SEE / +2 / Bachelor (as applicable)." />
              <EligibilityItem text="Come from a financially disadvantaged background." />
              <EligibilityItem text="Show strong academic potential (GPA/Grades)." />
              <EligibilityItem text="Be willing to follow scholarship rules & guidelines." />
            </ul>
          </div>

          {/* Documents */}
          <div className="bg-gray-50 rounded-2xl border border-dashed border-gray-300 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <FileText className="w-6 h-6 text-orange-600" /> Required
              Documents
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <DocumentItem
                icon={<FileCheck className="w-5 h-5" />}
                text="Academic Certificates"
              />
              <DocumentItem
                icon={<CreditCard className="w-5 h-5" />}
                text="Citizenship Copy"
              />
              <DocumentItem
                icon={<ImageIcon className="w-5 h-5" />}
                text="Passport Photo"
              />
              <DocumentItem
                icon={<DollarSign className="w-5 h-5" />}
                text="Income Verification"
              />
              <div className="sm:col-span-2">
                <DocumentItem
                  icon={<PenLine className="w-5 h-5" />}
                  text="Motivation Letter / Personal Statement"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Selection Process Timeline */}
        <section id="process" className="py-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Selection Process
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

            <div className="space-y-8">
              <TimelineStep
                stepNumber={1}
                title="Online Application"
                description="Complete the digital form and upload scanned copies of required documents."
                side="right"
              />
              <TimelineStep
                stepNumber={2}
                title="Document Verification"
                description="Our team verifies the authenticity of your submitted academic and financial documents."
                side="left"
              />
              <TimelineStep
                stepNumber={3}
                title="Written Exam (If Applicable)"
                description="Depending on the course, you may need to sit for an aptitude or subject test."
                side="right"
              />
              <TimelineStep
                stepNumber={4}
                title="Interview"
                description="A personal interview to assess your motivation, goals, and background."
                side="left"
              />
              <TimelineStep
                stepNumber={5}
                title="Final Announcement"
                description="Successful candidates are notified and scholarship letters are issued."
                side="right"
                isLast={true}
              />
            </div>
          </div>
        </section>

        {/* Institutions & Important Dates */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-indigo-900 rounded-2xl p-8 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 opacity-10 text-9xl -mr-8 -mt-8 transition-transform group-hover:scale-110 duration-500">
              <Building2 className="w-32 h-32" />
            </div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">
              Available Institutions
            </h3>
            <p className="mb-6 text-indigo-200 relative z-10">
              This scholarship is applicable in collaboration with top-tier
              educational bodies.
            </p>
            <ul className="space-y-3 mb-8 relative z-10">
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-yellow-500" /> Government &
                Private Colleges
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-yellow-500" /> Universities
                across Nepal
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-yellow-500" /> Partner
                Hostels & Training Centers
              </li>
            </ul>
            <Link
              href="/colleges"
              className="inline-block bg-white text-indigo-900 px-6 py-2 rounded-lg font-bold hover:bg-indigo-50 transition relative z-10"
            >
              👉 View Partner Colleges
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              <Calendar className="w-6 h-6 text-blue-600 inline mr-2" />
              Important Dates
            </h3>
            <div className="space-y-4">
              <DateItem
                label="Application Opens"
                date="Jan 15, 2024"
                colorClass="green"
              />
              <DateItem
                label="Application Deadline"
                date="Feb 28, 2024"
                colorClass="red"
              />
              <DateItem
                label="Exam / Interview"
                date="March 10-15"
                colorClass="gray"
              />
              <DateItem
                label="Result Publication"
                date="March 20"
                colorClass="gray"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Apply Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>
          {/* Modal Content */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-2xl shadow-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                Start Application
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-600 mb-6">
              You are about to start your scholarship application for Session
              2024. Please ensure you have your documents ready.
            </p>
            <div className="space-y-3">
              <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition">
                Continue with Email
              </button>
              <button className="w-full py-3 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-bold transition flex items-center justify-center gap-2">
                <Image
                  src="https://www.google.com/favicon.ico"
                  className="w-4 h-4"
                  alt="Google"
                  width={16}
                  height={16}
                />{" "}
                Continue with Google
              </button>
            </div>
            <p className="text-xs text-center text-gray-500 mt-4">
              By continuing, you agree to our Terms & Conditions.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// Benefit Card Component
function BenefitCard({
  icon,
  title,
  description,
  colorClass,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  colorClass: string;
}) {
  const colors: Record<string, { bg: string; text: string; hover: string }> = {
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-600",
      hover: "group-hover:bg-blue-600",
    },
    orange: {
      bg: "bg-orange-100",
      text: "text-orange-600",
      hover: "group-hover:bg-orange-600",
    },
    green: {
      bg: "bg-green-100",
      text: "text-green-600",
      hover: "group-hover:bg-green-600",
    },
    purple: {
      bg: "bg-purple-100",
      text: "text-purple-600",
      hover: "group-hover:bg-purple-600",
    },
    pink: {
      bg: "bg-pink-100",
      text: "text-pink-600",
      hover: "group-hover:bg-pink-600",
    },
    teal: {
      bg: "bg-teal-100",
      text: "text-teal-600",
      hover: "group-hover:bg-teal-600",
    },
  };

  const color = colors[colorClass];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-100 transition duration-300 group">
      <div
        className={`w-12 h-12 ${color.bg} ${color.text} rounded-lg flex items-center justify-center text-xl mb-4 ${color.hover} group-hover:text-white transition`}
      >
        {icon}
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

// Eligibility Item Component
function EligibilityItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <div className="mt-1 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs shrink-0">
        <CheckCircle className="w-3 h-3" />
      </div>
      <span
        className="text-gray-700"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </li>
  );
}

// Document Item Component
function DocumentItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-200">
      <div className="text-gray-400">{icon}</div>
      <span className="text-sm font-medium text-gray-700">{text}</span>
    </div>
  );
}

// Timeline Step Component
function TimelineStep({
  stepNumber,
  title,
  description,
  side,
  isLast = false,
}: {
  stepNumber: number;
  title: string;
  description: string;
  side: "left" | "right";
  isLast?: boolean;
}) {
  return (
    <div
      className={`mb-8 flex ${
        side === "left" ? "md:flex-row-reverse" : ""
      } justify-between items-center w-full`}
    >
      <div className="order-1 w-5/12 hidden md:block"></div>
      <div
        className={`z-20 flex items-center order-1 ${
          isLast ? "bg-green-500" : "bg-blue-600"
        } shadow-xl w-10 h-10 rounded-full border-4 border-white`}
      >
        <h1 className="mx-auto font-semibold text-lg text-white">
          {isLast ? <Flag className="w-5 h-5" /> : stepNumber}
        </h1>
      </div>
      <div
        className={`order-1 bg-white rounded-lg shadow-md w-full md:w-5/12 px-6 py-4 border-l-4 ${
          isLast ? "border-green-500 bg-green-50" : "border-blue-600"
        } ml-10 md:ml-0 ${
          side === "left" ? "md:text-right" : ""
        } hover:shadow-lg transition`}
      >
        <h3 className="mb-1 font-bold text-gray-800 text-lg">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

// Date Item Component
function DateItem({
  label,
  date,
  colorClass,
}: {
  label: string;
  date: string;
  colorClass: string;
}) {
  const colors: Record<string, { bg: string; text: string }> = {
    green: { bg: "bg-green-50", text: "text-green-600" },
    red: { bg: "bg-red-50", text: "text-red-600" },
    gray: { bg: "", text: "text-gray-800" },
  };

  const color = colors[colorClass];

  return (
    <div className="flex items-center justify-between border-b border-gray-100 pb-3">
      <span className="text-gray-600 font-medium">{label}</span>
      <span
        className={`font-bold ${color.text} ${
          color.bg ? `${color.bg} px-3 py-1 rounded-full` : ""
        } text-sm`}
      >
        {date}
      </span>
    </div>
  );
}
