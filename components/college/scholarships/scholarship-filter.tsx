"use client";

import { useState } from "react";

export default function ScholarshipFilters() {
  const [filters, setFilters] = useState({
    quickFilters: [] as string[],
    category: [] as string[],
    level: [] as string[],
    fieldOfStudy: [] as string[],
    fieldSearch: "",
    scholarshipType: [] as string[],
    amount: [] as string[],
    minAmount: "",
    maxAmount: "",
    benefits: [] as string[],
    location: "all",
    locationFilters: [] as string[],
    availability: [] as string[],
    deadline: [] as string[],
    providerType: [] as string[],
    providerSearch: "",
    applicationMode: [] as string[],
  });

  const toggleFilter = (category: keyof typeof filters, value: string) => {
    const current = filters[category];
    if (Array.isArray(current)) {
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      setFilters({ ...filters, [category]: updated });
    }
  };

  const resetFilters = () => {
    setFilters({
      quickFilters: [],
      category: [],
      level: [],
      fieldOfStudy: [],
      fieldSearch: "",
      scholarshipType: [],
      amount: [],
      minAmount: "",
      maxAmount: "",
      benefits: [],
      location: "all",
      locationFilters: [],
      availability: [],
      deadline: [],
      providerType: [],
      providerSearch: "",
      applicationMode: [],
    });
  };

  const FilterSection = ({
    title,
    children,
    defaultOpen = true,
  }: {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
  }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
      <div className="border-b border-gray-200 last:border-0">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between py-4 text-left hover:text-blue-600 transition"
        >
          <span className="font-semibold text-gray-900">{title}</span>
          <i
            className={`fa-solid fa-chevron-down text-sm transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          ></i>
        </button>
        {isOpen && <div className="pb-4 space-y-3">{children}</div>}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 sticky top-4">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-filter text-blue-600"></i>
          <h2 className="font-bold text-gray-900">Filters</h2>
        </div>
        <button
          onClick={resetFilters}
          className="text-sm text-gray-600 hover:text-blue-600 transition flex items-center gap-1"
        >
          <i className="fa-solid fa-rotate-right text-xs"></i>
          Reset
        </button>
      </div>

      <div className="p-4 space-y-1 max-h-[calc(100vh-200px)] overflow-y-auto">
        {/* Quick Filters */}
        <div className="pb-4 border-b border-gray-200">
          <p className="text-xs font-semibold text-gray-500 uppercase mb-3">
            QUICK FILTERS
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Verified", icon: "fa-circle-check", color: "green" },
              { label: "New", icon: "fa-bolt", color: "blue" },
              { label: "Closing", icon: "fa-clock", color: "red" },
            ].map((filter) => (
              <button
                key={filter.label}
                onClick={() => toggleFilter("quickFilters", filter.label)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition ${
                  filters.quickFilters.includes(filter.label)
                    ? `bg-${filter.color}-100 text-${filter.color}-700 border border-${filter.color}-300`
                    : "bg-gray-100 text-gray-700 border border-gray-200 hover:border-gray-300"
                }`}
              >
                <i className={`fa-solid ${filter.icon}`}></i>
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Scholarship Category */}
        <FilterSection title="Scholarship Category">
          {[
            "Merit-based",
            "Need-based",
            "Talent-based (sports, arts, leadership)",
            "Reserved/Quota",
            "Research/Innovation",
          ].map((cat) => (
            <label
              key={cat}
              className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition"
            >
              <input
                type="checkbox"
                checked={filters.category.includes(cat)}
                onChange={() => toggleFilter("category", cat)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-sm">{cat}</span>
            </label>
          ))}
        </FilterSection>

        {/* Academic Level */}
        <FilterSection title="Academic Level">
          {[
            "+ 2 (Higher secondary)",
            "Bachelor (Undergraduate)",
            "Master (Postgraduate)",
          ].map((level) => (
            <label
              key={level}
              className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition"
            >
              <input
                type="checkbox"
                checked={filters.level.includes(level)}
                onChange={() => toggleFilter("level", level)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-sm">{level}</span>
            </label>
          ))}
        </FilterSection>

        {/* Field of Study */}
        <FilterSection title="Field of study">
          <div className="relative mb-3">
            <i className="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
            <input
              type="text"
              placeholder="Filter Fields..."
              value={filters.fieldSearch}
              onChange={(e) =>
                setFilters({ ...filters, fieldSearch: e.target.value })
              }
              className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {[
            "Engineering",
            "IT / Computer Science",
            "Management / Business",
            "Medicine & Health",
          ].map((field) => (
            <label
              key={field}
              className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition"
            >
              <input
                type="checkbox"
                checked={filters.fieldOfStudy.includes(field)}
                onChange={() => toggleFilter("fieldOfStudy", field)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-sm">{field}</span>
            </label>
          ))}
        </FilterSection>

        {/* Scholarship Type */}
        <FilterSection title="Scholarship Type">
          {[
            "Admission Scholarship",
            "Entrance Exam Scholarship",
            "Regular/Annual Scholarship",
            "Competition/Contest Scholarship",
          ].map((type) => (
            <label
              key={type}
              className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition"
            >
              <input
                type="checkbox"
                checked={filters.scholarshipType.includes(type)}
                onChange={() => toggleFilter("scholarshipType", type)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-sm">{type}</span>
            </label>
          ))}
        </FilterSection>

        {/* Scholarship Amount */}
        <FilterSection title="Scholarship Amount">
          {[
            "Full Scholarship",
            "Partial Scholarship",
            "Percentage-based (25%, 50%, 75%, etc.)",
          ].map((amount) => (
            <label
              key={amount}
              className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition"
            >
              <input
                type="checkbox"
                checked={filters.amount.includes(amount)}
                onChange={() => toggleFilter("amount", amount)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-sm">{amount}</span>
            </label>
          ))}
          <div className="mt-3">
            <p className="text-xs font-semibold text-gray-700 mb-2">
              Fixed Amount Range (NPR):
            </p>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="number"
                placeholder="MIN ( 1000)"
                value={filters.minAmount}
                onChange={(e) =>
                  setFilters({ ...filters, minAmount: e.target.value })
                }
                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="number"
                placeholder="MAX ( 1000)"
                value={filters.maxAmount}
                onChange={(e) =>
                  setFilters({ ...filters, maxAmount: e.target.value })
                }
                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </FilterSection>

        {/* Scholarship Benefits */}
        <FilterSection title="Scholarship Benefits">
          {[
            "Available",
            "Limited Seats",
            "High Competition",
            "Low Competition / Easy to Get",
          ].map((benefit) => (
            <label
              key={benefit}
              className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition"
            >
              <input
                type="checkbox"
                checked={filters.benefits.includes(benefit)}
                onChange={() => toggleFilter("benefits", benefit)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-sm">{benefit}</span>
            </label>
          ))}
        </FilterSection>

        {/* Location */}
        <FilterSection title="Location">
          <select
            value={filters.location}
            onChange={(e) =>
              setFilters({ ...filters, location: e.target.value })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-3"
          >
            <option value="all">All Provinces</option>
            <option value="province1">Province 1</option>
            <option value="province2">Province 2</option>
            <option value="bagmati">Bagmati Province</option>
            <option value="gandaki">Gandaki Province</option>
            <option value="lumbini">Lumbini Province</option>
            <option value="karnali">Karnali Province</option>
            <option value="sudurpaschim">Sudurpaschim Province</option>
          </select>
          <label className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition">
            <input
              type="checkbox"
              checked={filters.locationFilters.includes("National Wide")}
              onChange={() => toggleFilter("locationFilters", "National Wide")}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
            <span className="text-sm">National Wide</span>
          </label>
        </FilterSection>

        {/* Scholarship Availability */}
        <FilterSection title="Scholarship Availability">
          {[
            "Available",
            "Limited Seats",
            "High Competition",
            "Low Competition / Easy to Get",
          ].map((avail) => (
            <label
              key={avail}
              className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition"
            >
              <input
                type="checkbox"
                checked={filters.availability.includes(avail)}
                onChange={() => toggleFilter("availability", avail)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-sm">{avail}</span>
            </label>
          ))}
        </FilterSection>

        {/* Deadline */}
        <FilterSection title="Deadline">
          {["Open", "Closing Soon", "Closed"].map((deadline) => (
            <label
              key={deadline}
              className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition"
            >
              <input
                type="checkbox"
                checked={filters.deadline.includes(deadline)}
                onChange={() => toggleFilter("deadline", deadline)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-sm">{deadline}</span>
            </label>
          ))}
        </FilterSection>

        {/* Provider Type */}
        <FilterSection title="Provider Type">
          <div className="relative mb-3">
            <i className="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
            <input
              type="text"
              placeholder="Filter Fields..."
              value={filters.providerSearch}
              onChange={(e) =>
                setFilters({ ...filters, providerSearch: e.target.value })
              }
              className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {[
            "College/University",
            "Government",
            "NGO/INGO",
            "Corporate/Company CSR",
            "Private Organization/Foundation",
          ].map((provider) => (
            <label
              key={provider}
              className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition"
            >
              <input
                type="checkbox"
                checked={filters.providerType.includes(provider)}
                onChange={() => toggleFilter("providerType", provider)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-sm">{provider}</span>
            </label>
          ))}
        </FilterSection>

        {/* Application Mode */}
        <FilterSection title="Application Mode">
          {[
            "Online Form",
            "Offline Form",
            "Email Submission",
            "Through College",
          ].map((mode) => (
            <label
              key={mode}
              className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition"
            >
              <input
                type="checkbox"
                checked={filters.applicationMode.includes(mode)}
                onChange={() => toggleFilter("applicationMode", mode)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-sm">{mode}</span>
            </label>
          ))}
        </FilterSection>
      </div>

      {/* Find Scholarship Button */}
      <div className="p-4 border-t border-gray-200">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition shadow-sm">
          Find Scholarship
        </button>
      </div>
    </div>
  );
}
