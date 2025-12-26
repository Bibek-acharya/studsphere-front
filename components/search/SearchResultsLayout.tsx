"use client";

import React from "react";
import { Search, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import Link from "next/link";

interface FilterOption {
  id: string;
  label: string;
  options: string[];
}

interface SearchResultsLayoutProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSearch: () => void;
  totalResults: number;
  filters: FilterOption[];
  activeFilters: Record<string, string[]>;
  onFilterToggle: (filterId: string, value: string) => void;
  onClearFilters: () => void;
  children: React.ReactNode;
  categoryLabel: string;
}

export default function SearchResultsLayout({
  searchQuery,
  onSearchChange,
  onSearch,
  totalResults,
  filters,
  activeFilters,
  onFilterToggle,
  onClearFilters,
  children,
  categoryLabel,
}: SearchResultsLayoutProps) {
  const [showFilters, setShowFilters] = React.useState(true);
  const [expandedFilters, setExpandedFilters] = React.useState<string[]>(
    filters.map((f) => f.id)
  );

  const toggleFilterExpansion = (filterId: string) => {
    setExpandedFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((id) => id !== filterId)
        : [...prev, filterId]
    );
  };

  const activeFilterCount = Object.values(activeFilters).flat().length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Breadcrumb */}
          <div className="mb-4">
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">
                {categoryLabel} Search Results
              </span>
            </nav>
          </div>

          {/* Search Bar */}
          <div className="relative flex items-center bg-gray-50 border border-gray-300 rounded-2xl p-2 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all">
            <div className="pl-4 pr-3 text-gray-400">
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder={`Search ${categoryLabel.toLowerCase()}...`}
              className="w-full py-2.5 outline-none text-gray-700 bg-transparent"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && onSearch()}
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange("")}
                className="p-2 text-gray-400 hover:text-gray-600"
              >
                <X size={18} />
              </button>
            )}
            <button
              onClick={onSearch}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-2.5 rounded-xl transition-colors whitespace-nowrap ml-2"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside
            className={`${
              showFilters ? "w-72" : "w-0"
            } shrink-0 transition-all duration-300 overflow-hidden`}
          >
            <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-32">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-900">Filters</h2>
                {activeFilterCount > 0 && (
                  <button
                    onClick={onClearFilters}
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Clear All
                  </button>
                )}
              </div>

              <div className="space-y-6">
                {filters.map((filter) => (
                  <div
                    key={filter.id}
                    className="border-b border-gray-100 pb-4 last:border-0"
                  >
                    <button
                      onClick={() => toggleFilterExpansion(filter.id)}
                      className="flex items-center justify-between w-full text-left mb-3"
                    >
                      <h3 className="font-semibold text-gray-900 text-sm">
                        {filter.label}
                      </h3>
                      <ChevronDown
                        size={18}
                        className={`text-gray-400 transition-transform ${
                          expandedFilters.includes(filter.id)
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>
                    {expandedFilters.includes(filter.id) && (
                      <div className="space-y-2">
                        {filter.options.map((option) => (
                          <label
                            key={option}
                            className="flex items-center gap-3 cursor-pointer group"
                          >
                            <input
                              type="checkbox"
                              checked={
                                activeFilters[filter.id]?.includes(option) ||
                                false
                              }
                              onChange={() => onFilterToggle(filter.id, option)}
                              className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
                            />
                            <span className="text-sm text-gray-600 group-hover:text-gray-900">
                              {option}
                            </span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Results Area */}
          <main className="flex-1 min-w-0">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-1">
                  Search Results
                </h1>
                <p className="text-gray-600">
                  Found{" "}
                  <span className="font-semibold text-gray-900">
                    {totalResults}
                  </span>{" "}
                  {categoryLabel.toLowerCase()}{" "}
                  {searchQuery && `for "${searchQuery}"`}
                </p>
              </div>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <SlidersHorizontal size={18} />
                <span className="font-medium">
                  {showFilters ? "Hide" : "Show"} Filters
                </span>
                {activeFilterCount > 0 && (
                  <span className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {activeFilterCount}
                  </span>
                )}
              </button>
            </div>

            {/* Active Filters Pills */}
            {activeFilterCount > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {Object.entries(activeFilters).map(([filterId, values]) =>
                  values.map((value) => (
                    <div
                      key={`${filterId}-${value}`}
                      className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-sm font-medium border border-blue-200"
                    >
                      <span>{value}</span>
                      <button
                        onClick={() => onFilterToggle(filterId, value)}
                        className="hover:text-blue-900"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* Results Content */}
            <div>{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
