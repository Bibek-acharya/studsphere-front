"use client";

import Link from "next/link";
import {
  Calendar,
  FileText,
  Clock,
  ArrowRight,
  Bell,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Sample exam data
const exams = [
  {
    id: "neb-class-12",
    title: "NEB Class 12 Annual Examination 2081",
    board: "NEB (National Examination Board)",
    badges: ["BOARD EXAM", "UPCOMING"],
    level: "+2 / Intermediate",
    type: "Board Exam",
    examDate: "Baishakh 14, 2082 (Apr 27, 2025)",
    formDeadline: "Magh 20, 2081 (Feb 3, 2025)",
    fee: "NPR 600 (Regular)",
    highlights: [
      "Official routine published",
      "Form filling active",
      "Admit cards by Chaitra end",
    ],
    description: "Annual final examination for Grade 12 students across Nepal.",
    status: "active",
  },
  {
    id: "ioe-entrance",
    title: "IOE Entrance Examination 2081",
    board: "Institute of Engineering, TU",
    badges: ["ENTRANCE", "POPULAR"],
    level: "Undergraduate (Bachelor)",
    type: "Entrance Exam",
    examDate: "Jestha 2082 (May/June 2025)",
    formDeadline: "Chaitra 2081 (Mar/Apr 2025)",
    fee: "NPR 2000",
    highlights: [
      "BE Computer, Civil, Arch",
      "140 MCQ Questions",
      "Pulchowk, Thapathali seats",
    ],
    description: "Entrance exam for BE programs at IOE constituent campuses.",
    status: "upcoming",
  },
  {
    id: "cee-medical",
    title: "CEE Medical Entrance 2081",
    board: "Institute of Medicine, TU",
    badges: ["ENTRANCE", "COMPETITIVE"],
    level: "Undergraduate (Bachelor)",
    type: "Entrance Exam",
    examDate: "Jestha 2082 (May/June 2025)",
    formDeadline: "Chaitra 2081 (Mar/Apr 2025)",
    fee: "NPR 2500",
    highlights: [
      "MBBS, BDS, BSc Nursing",
      "200 MCQ Questions",
      "IOM, BPKIHS, PAHS seats",
    ],
    description: "Common Entrance Examination for Medical and Health Sciences.",
    status: "upcoming",
  },
  {
    id: "ku-cat",
    title: "KU Common Admission Test (KU-CAT)",
    board: "Kathmandu University",
    badges: ["ENTRANCE", "VERIFIED"],
    level: "Undergraduate (Bachelor)",
    type: "Entrance Exam",
    examDate: "Jestha 2082 (May/June 2025)",
    formDeadline: "Baishakh 2082 (Apr/May 2025)",
    fee: "NPR 1500",
    highlights: [
      "Multiple programs",
      "Computer-based test",
      "Scholarship opportunities",
    ],
    description: "Common entrance for various Bachelor programs at KU.",
    status: "upcoming",
  },
  {
    id: "cmat",
    title: "CMAT (Common Management Admission Test)",
    board: "Faculty of Management, TU",
    badges: ["ENTRANCE", "POPULAR"],
    level: "Undergraduate (Bachelor)",
    type: "Entrance Exam",
    examDate: "Jestha 2082 (May/June 2025)",
    formDeadline: "Chaitra 2081 (Mar/Apr 2025)",
    fee: "NPR 1500",
    highlights: ["BBA, BHM programs", "Multiple test centers", "High demand"],
    description: "Entrance for management programs under TU affiliation.",
    status: "upcoming",
  },
  {
    id: "loksewa-officer",
    title: "Loksewa Officer Level Exam",
    board: "Public Service Commission",
    badges: ["COMPETITIVE", "GOVERNMENT"],
    level: "Postgraduate (Bachelor+)",
    type: "Competitive Exam",
    examDate: "TBA",
    formDeadline: "TBA",
    fee: "NPR 1000",
    highlights: ["Various ministries", "Written + Interview", "Job guarantee"],
    description: "Competitive examination for government officer positions.",
    status: "result-pending",
  },
];

export function ExamGrid() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700 border-green-200";
      case "upcoming":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "result-pending":
        return "bg-blue-100 text-blue-700 border-blue-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "Form Filling Active";
      case "upcoming":
        return "Upcoming";
      case "result-pending":
        return "Result Pending";
      default:
        return "Available";
    }
  };

  return (
    <div>
      {/* Active Filters */}
      <div className="mb-6 flex items-center gap-3 flex-wrap">
        <span className="text-sm text-gray-600">Active:</span>
        <Badge variant="secondary" className="rounded-full">
          Entrance Exam
          <button className="ml-2 hover:text-destructive">×</button>
        </Badge>
        <Button variant="link" className="text-blue-600 text-sm p-0 h-auto">
          Clear All
        </Button>
      </div>

      {/* Results Count */}
      <p className="text-sm text-gray-600 mb-6">
        Showing {exams.length} entrance exams and board exams
      </p>

      {/* Exam Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {exams.map((exam) => (
          <div
            key={exam.id}
            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200 group"
          >
            {/* Badges */}
            <div className="flex gap-2 mb-4 flex-wrap">
              {exam.badges.map((badge, index) => (
                <Badge
                  key={index}
                  className={
                    badge === "BOARD EXAM"
                      ? "bg-purple-100 text-purple-700 hover:bg-purple-100"
                      : badge === "ENTRANCE"
                      ? "bg-blue-100 text-blue-700 hover:bg-blue-100"
                      : badge === "UPCOMING"
                      ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
                      : badge === "POPULAR"
                      ? "bg-orange-100 text-orange-700 hover:bg-orange-100"
                      : badge === "COMPETITIVE"
                      ? "bg-red-100 text-red-700 hover:bg-red-100"
                      : badge === "GOVERNMENT"
                      ? "bg-green-100 text-green-700 hover:bg-green-100"
                      : "bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
                  }
                >
                  {badge}
                </Badge>
              ))}
            </div>

            {/* Title */}
            <Link href={`/colleges/exams/${exam.id}`}>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors cursor-pointer">
                {exam.title}
              </h3>
            </Link>
            <p className="text-sm text-gray-600 mb-4 flex items-center gap-1">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-100 text-slate-600 text-xs">
                <i className="fa-solid fa-building-columns"></i>
              </span>
              {exam.board}
            </p>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
              {exam.description}
            </p>

            {/* Exam Details Grid */}
            <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-100">
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                  <Calendar className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">EXAM DATE</p>
                  <p className="text-sm font-medium text-gray-900">
                    {exam.examDate}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">DEADLINE</p>
                  <p className="text-sm font-medium text-gray-900">
                    {exam.formDeadline}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">TYPE</p>
                  <p className="text-sm font-medium text-gray-900">
                    {exam.type}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                  <svg
                    className="w-4 h-4 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">EXAM FEE</p>
                  <p className="text-sm font-medium text-gray-900">
                    {exam.fee}
                  </p>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-gray-500 mb-2">
                KEY HIGHLIGHTS
              </p>
              <ul className="space-y-1.5">
                {exam.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="text-sm text-gray-600 flex items-start gap-2"
                  >
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Status Badge */}
            <div className="mb-4">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
                  exam.status
                )}`}
              >
                {getStatusText(exam.status)}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Link href={`/colleges/exams/${exam.id}`} className="flex-1">
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  size="sm"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <Button variant="outline" size="sm" className="shrink-0">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="shrink-0">
                <Download className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" size="lg" className="rounded-full">
          Load More Exams
        </Button>
      </div>
    </div>
  );
}
