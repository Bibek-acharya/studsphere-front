"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import SearchResultsLayout from "@/components/search/SearchResultsLayout";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  Star,
  Building2,
  BookOpen,
} from "lucide-react";
import Link from "next/link";

// Mock data for demonstration
const generateMockResults = (query: string) => {
  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Tech Corp",
      location: "Remote",
      type: "Full-time",
      salary: "$80k-$120k",
      category: "jobs",
    },
    {
      id: 2,
      title: "Marketing Manager",
      company: "Brand Inc",
      location: "New York",
      type: "Full-time",
      salary: "$70k-$100k",
      category: "jobs",
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "Analytics Pro",
      location: "San Francisco",
      type: "Part-time",
      salary: "$60k-$90k",
      category: "jobs",
    },
  ];

  const colleges = [
    {
      id: 1,
      name: "Harvard University",
      location: "Cambridge, MA",
      rating: 4.8,
      programs: 150,
      type: "Private",
      category: "colleges",
    },
    {
      id: 2,
      name: "Stanford University",
      location: "Stanford, CA",
      rating: 4.9,
      programs: 200,
      type: "Private",
      category: "colleges",
    },
    {
      id: 3,
      name: "MIT",
      location: "Cambridge, MA",
      rating: 4.9,
      programs: 180,
      type: "Private",
      category: "colleges",
    },
  ];

  const events = [
    {
      id: 1,
      title: "Tech Conference 2025",
      date: "Jan 15, 2025",
      location: "San Francisco",
      type: "Conference",
      category: "events",
    },
    {
      id: 2,
      title: "Career Fair",
      date: "Feb 20, 2025",
      location: "New York",
      type: "Career",
      category: "events",
    },
    {
      id: 3,
      title: "Workshop: AI & ML",
      date: "Mar 10, 2025",
      location: "Online",
      type: "Workshop",
      category: "events",
    },
  ];

  return [...jobs, ...colleges, ...events];
};

export default function SearchResultsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({
    category: [],
    type: [],
    location: [],
  });

  const filters = [
    {
      id: "category",
      label: "Category",
      options: ["Jobs", "Colleges", "Events", "Scholarships"],
    },
    {
      id: "type",
      label: "Type",
      options: ["Full-time", "Part-time", "Remote", "On-site", "Hybrid"],
    },
    {
      id: "location",
      label: "Location",
      options: ["Remote", "New York", "San Francisco", "Cambridge", "Online"],
    },
  ];

  const allResults = generateMockResults(searchQuery);

  const filteredResults = allResults.filter((result) => {
    if (activeFilters.category.length > 0) {
      const categoryMatch = activeFilters.category.some(
        (cat) => result.category === cat.toLowerCase()
      );
      if (!categoryMatch) return false;
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
    setActiveFilters({ category: [], type: [], location: [] });
  };

  const handleSearch = () => {
    router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <SearchResultsLayout
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      onSearch={handleSearch}
      totalResults={filteredResults.length}
      filters={filters}
      activeFilters={activeFilters}
      onFilterToggle={handleFilterToggle}
      onClearFilters={handleClearFilters}
      categoryLabel="All"
    >
      <div className="space-y-4">
        {filteredResults.map((result) => (
          <div
            key={`${result.category}-${result.id}`}
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
          >
            {result.category === "jobs" && "company" in result && (
              <Link href={`/jobs/${result.id}`} className="block">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <Briefcase className="text-blue-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {result.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{result.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        {result.location}
                      </span>
                      <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full font-medium">
                        {result.type}
                      </span>
                      <span className="font-semibold text-gray-900">
                        {result.salary}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {result.category === "colleges" && "rating" in result && (
              <Link href={`/colleges/colleges/${result.id}`} className="block">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center shrink-0">
                    <GraduationCap className="text-purple-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {result.name}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-2">
                      <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        {result.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star
                          size={16}
                          className="text-yellow-500 fill-yellow-500"
                        />
                        {result.rating}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen size={16} />
                        {result.programs} Programs
                      </span>
                    </div>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                      {result.type}
                    </span>
                  </div>
                </div>
              </Link>
            )}

            {result.category === "events" && "date" in result && (
              <Link href={`/events/${result.id}`} className="block">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center shrink-0">
                    <Calendar className="text-orange-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {result.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar size={16} />
                        {result.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        {result.location}
                      </span>
                    </div>
                    <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-xs font-medium">
                      {result.type}
                    </span>
                  </div>
                </div>
              </Link>
            )}
          </div>
        ))}

        {filteredResults.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search size={64} className="mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              No results found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </SearchResultsLayout>
  );
}
