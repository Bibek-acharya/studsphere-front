"use client";

import Link from "next/link";
import { getAllScholarships } from "@/lib/scholarships-data";
import { useState } from "react";

export default function ScholarshipGrid() {
  const scholarships = getAllScholarships();
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  // Create duplicate scholarships for demo purposes to show various states
  const demoScholarships = scholarships.flatMap((scholarship) => [
    {
      ...scholarship,
      status: "open" as const,
      availability: "High Competition",
    },
    {
      ...scholarship,
      id: `${scholarship.id}-2`,
      status: "open" as const,
      availability: "Available Now",
    },
    {
      ...scholarship,
      id: `${scholarship.id}-3`,
      status: "closed" as const,
      availability: "Limited seats",
    },
    {
      ...scholarship,
      id: `${scholarship.id}-4`,
      status: "open" as const,
      availability: "Available Now",
    },
  ]);

  return (
    <div className="space-y-6">
      {/* Results count */}
      <div className="text-sm text-gray-600">
        Showing {demoScholarships.length} scholarships
      </div>

      {/* Scholarship Grid - 2 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {demoScholarships.map((scholarship, index) => {
          const isClosingSoon = index % 3 === 2;
          const isLimitedSeats = index % 4 === 2;
          const isAvailableNow = index % 4 === 1;
          const isHighCompetition = index % 4 === 0;

          return (
            <div
              key={scholarship.id + index}
              className="bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200"
            >
              <div className="p-5">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded">
                      Merit-Based
                    </span>
                    <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded border border-green-200">
                      100% off
                    </span>
                  </div>
                  <button
                    onClick={() => toggleFavorite(scholarship.id)}
                    className="text-gray-400 hover:text-red-500 transition"
                  >
                    <i
                      className={`${
                        favorites.includes(scholarship.id)
                          ? "fa-solid"
                          : "fa-regular"
                      } fa-heart text-lg`}
                    ></i>
                  </button>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  TU Merit Scholarship
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Tribhuvan University
                </p>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div>
                    <p className="text-gray-500 text-xs mb-0.5">Level</p>
                    <p className="font-semibold text-gray-900">Bachelors</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs mb-0.5">Field</p>
                    <p className="font-semibold text-gray-900">Engineering</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs mb-0.5">COVERS</p>
                    <p className="font-semibold text-gray-900">Full Tuition</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs mb-0.5">LOCATION</p>
                    <p className="font-semibold text-gray-900">Kathmandu</p>
                  </div>
                </div>

                {/* Benefits */}
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-200">
                  <span className="text-xs text-gray-500 font-semibold">
                    BENEFITS
                  </span>
                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center gap-1 px-2 py-1 bg-gray-50 rounded text-xs text-gray-700">
                      <i className="fa-solid fa-file-lines"></i>
                      <span>Exam Fee</span>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-gray-50 rounded text-xs text-gray-700">
                      <i className="fa-solid fa-file-lines"></i>
                      <span>Exam Fee</span>
                    </div>
                  </div>
                </div>

                {/* Status and Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 flex-wrap">
                    {isHighCompetition && (
                      <span className="flex items-center gap-1 px-2 py-1 bg-yellow-50 text-yellow-700 text-xs font-semibold rounded">
                        <i className="fa-solid fa-fire"></i>
                        High Competition
                      </span>
                    )}
                    {isAvailableNow && (
                      <span className="flex items-center gap-1 px-2 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded">
                        <i className="fa-solid fa-circle text-[6px]"></i>
                        Available Now
                      </span>
                    )}
                    {isLimitedSeats && (
                      <span className="flex items-center gap-1 px-2 py-1 bg-red-50 text-red-700 text-xs font-semibold rounded">
                        <i className="fa-solid fa-circle text-[6px]"></i>
                        Limited seats
                      </span>
                    )}
                    {isClosingSoon && (
                      <span className="text-red-600 text-xs font-bold uppercase">
                        CLOSING SOON
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-gray-600 text-xs">
                    <i className="fa-regular fa-calendar"></i>
                    <span>Oct 15, 2024</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <Link
                    href={`/colleges/scholarships/${scholarship.id}`}
                    className="px-4 py-2.5 border border-gray-300 text-gray-900 rounded-lg font-semibold text-sm text-center hover:bg-gray-50 transition"
                  >
                    Details
                  </Link>
                  <Link
                    href={`/colleges/scholarships/${scholarship.id}`}
                    className={`px-4 py-2.5 ${
                      scholarship.status === "closed"
                        ? "bg-gray-900 hover:bg-gray-800"
                        : "bg-blue-600 hover:bg-blue-700"
                    } text-white rounded-lg font-semibold text-sm text-center transition flex items-center justify-center gap-2`}
                  >
                    Apply Now
                    <i className="fa-solid fa-arrow-right text-xs"></i>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 pt-8">
        <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 transition">
          <i className="fa-solid fa-chevron-left text-xs"></i>
        </button>
        <button className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded font-semibold">
          1
        </button>
        <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 transition">
          2
        </button>
        <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 transition">
          3
        </button>
        <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 transition">
          <i className="fa-solid fa-chevron-right text-xs"></i>
        </button>
      </div>
    </div>
  );
}
