"use client";

import { useState } from "react";
import Link from "next/link";

export default function ScholarshipHero() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  return (
    <section className="relative bg-linear-to-b from-blue-50 via-blue-100 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Top Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-white border-2 border-blue-600 rounded-full shadow-sm">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-bolt text-white text-sm"></i>
              </div>
              <span className="text-gray-900 font-semibold">
                Your way to success
              </span>
            </div>
          </div>

          {/* Main Heading with Border */}
          <div className="relative inline-block">
            <div className="border-4 border-blue-600 rounded-lg p-6 md:p-8 bg-white">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                Unlock Your Future
                <br />
                Scholarships in Nepal & Beyond
              </h1>
            </div>
            {/* Count Badge */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold text-lg shadow-lg">
                937 × 146
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto pt-4">
            Stop searching blindly. Update your profile and let our algorithm
            match you with the opportunities you deserve.
          </p>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-3 border border-gray-200">
              <div className="flex gap-3">
                <div className="flex-1 flex items-center gap-3 px-4">
                  <i className="fa-solid fa-search text-gray-400 text-xl"></i>
                  <input
                    type="text"
                    placeholder="Search scholarship name, college or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    className="w-full text-gray-800 text-lg focus:outline-none placeholder:text-gray-400"
                  />
                </div>
                <button
                  onClick={handleSearch}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition shadow-sm"
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Recent Visits */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-white">
            <span className="font-medium">Your recent visit :</span>
            <Link href="/colleges/bit" className="hover:underline transition">
              BIT Colleges
            </Link>
            <Link
              href="/colleges/predictor"
              className="hover:underline transition"
            >
              college Predictor
            </Link>
            <Link
              href="/colleges/scholarships"
              className="font-semibold hover:underline transition"
            >
              Scholarship
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
