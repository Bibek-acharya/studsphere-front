"use client";

import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import SearchResultsLayout from "@/components/search/SearchResultsLayout";
import { MapPin, Star, BookOpen, Building2, Users } from "lucide-react";
import Link from "next/link";

// Mock college data
const mockColleges = [
  {
    id: 1,
    name: "Pulchowk Engineering Campus",
    location: "Pulchowk, Lalitpur",
    type: "Public",
    rating: 4.8,
    programs: 12,
    students: "2,500+",
    university: "Tribhuvan University",
    established: 1972,
  },
  {
    id: 2,
    name: "KIST College",
    location: "Kamalpokhari, Kathmandu",
    type: "Private",
    rating: 4.5,
    programs: 8,
    students: "1,500+",
    university: "Tribhuvan University",
    established: 1998,
  },
  {
    id: 3,
    name: "Kathmandu Engineering College",
    location: "Kalimati, Kathmandu",
    type: "Private",
    rating: 4.4,
    programs: 10,
    students: "1,200+",
    university: "Tribhuvan University",
    established: 2000,
  },
  {
    id: 4,
    name: "Nepal College of Information Technology",
    location: "Balkumari, Lalitpur",
    type: "Private",
    rating: 4.6,
    programs: 6,
    students: "1,800+",
    university: "Pokhara University",
    established: 2001,
  },
  {
    id: 5,
    name: "Apex College",
    location: "Mid-Baneshwor, Kathmandu",
    type: "Private",
    rating: 4.5,
    programs: 5,
    students: "2,200+",
    university: "Tribhuvan University",
    established: 1997,
  },
  {
    id: 6,
    name: "Peoples Campus",
    location: "Koteshwor, Kathmandu",
    type: "Public",
    rating: 4.3,
    programs: 15,
    students: "3,000+",
    university: "Tribhuvan University",
    established: 1965,
  },
];

export default function CollegeSearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({
    type: [],
    university: [],
    location: [],
    rating: [],
  });

  const filters = [
    {
      id: "type",
      label: "College Type",
      options: ["Public", "Private"],
    },
    {
      id: "university",
      label: "University",
      options: [
        "Tribhuvan University",
        "Pokhara University",
        "Kathmandu University",
        "Purbanchal University",
      ],
    },
    {
      id: "location",
      label: "Location",
      options: ["Kathmandu", "Lalitpur", "Bhaktapur", "Pokhara", "Biratnagar"],
    },
    {
      id: "rating",
      label: "Rating",
      options: ["4.5+", "4.0+", "3.5+", "3.0+"],
    },
  ];

  const filteredColleges = mockColleges.filter((college) => {
    // Search query filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        college.name.toLowerCase().includes(query) ||
        college.location.toLowerCase().includes(query) ||
        college.university.toLowerCase().includes(query);
      if (!matchesSearch) return false;
    }

    // Type filter
    if (activeFilters.type.length > 0) {
      if (!activeFilters.type.includes(college.type)) return false;
    }

    // University filter
    if (activeFilters.university.length > 0) {
      if (!activeFilters.university.includes(college.university)) return false;
    }

    // Location filter
    if (activeFilters.location.length > 0) {
      const matchesLocation = activeFilters.location.some((loc) =>
        college.location.includes(loc)
      );
      if (!matchesLocation) return false;
    }

    // Rating filter
    if (activeFilters.rating.length > 0) {
      const minRating = Math.min(
        ...activeFilters.rating.map((r) => parseFloat(r))
      );
      if (college.rating < minRating) return false;
    }

    return true;
  });

  const handleFilterToggle = (filterId: string, value: string) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterId]: prev[filterId]?.includes(value)
        ? prev[filterId].filter((v) => v !== value)
        : [...(prev[filterId] || []), value],
    }));
  };

  const handleClearFilters = () => {
    setActiveFilters({ type: [], university: [], location: [], rating: [] });
  };

  const handleSearch = () => {
    router.push(`/colleges/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <SearchResultsLayout
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      onSearch={handleSearch}
      totalResults={filteredColleges.length}
      filters={filters}
      activeFilters={activeFilters}
      onFilterToggle={handleFilterToggle}
      onClearFilters={handleClearFilters}
      categoryLabel="Colleges"
    >
      <div className="space-y-4">
        {filteredColleges.map((college) => (
          <Link
            key={college.id}
            href={`/colleges/colleges/${college.id}`}
            className="block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-200 transition-all"
          >
            <div className="flex items-start gap-4">
              {/* College Logo/Icon */}
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 border-2 border-blue-100">
                <Building2 className="text-blue-600" size={28} />
              </div>

              {/* College Info */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1 hover:text-blue-600 transition-colors">
                      {college.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {college.university}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      college.type === "Public"
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-orange-50 text-orange-700 border border-orange-200"
                    }`}
                  >
                    {college.type}
                  </span>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={16} className="text-gray-400" />
                    {college.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Star
                      size={16}
                      className="text-yellow-500 fill-yellow-500"
                    />
                    <span className="font-semibold text-gray-900">
                      {college.rating}
                    </span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <BookOpen size={16} className="text-gray-400" />
                    {college.programs} Programs
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users size={16} className="text-gray-400" />
                    {college.students} Students
                  </span>
                </div>

                {/* Additional Info */}
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-gray-500">
                    Established:{" "}
                    <span className="font-semibold text-gray-900">
                      {college.established}
                    </span>
                  </span>
                  <span className="text-blue-600 font-medium hover:underline">
                    View Details →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}

        {filteredColleges.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
            <div className="text-gray-400 mb-4">
              <Building2 size={64} className="mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              No colleges found
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search or filters to find more results
            </p>
            <button
              onClick={handleClearFilters}
              className="text-blue-600 font-medium hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </SearchResultsLayout>
  );
}
