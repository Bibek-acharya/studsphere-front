"use client";

import { Menu, X, Bell, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCollegeContext } from "./college-context";

const CollegeNavbar = () => {
  const { heroSectionRef } = useCollegeContext();
  const [isScholarshipOpen, setIsScholarshipOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo - Responsive sizing - Only show when scrolled */}
          <div
            className={`shrink-0 transition-all duration-300 ease-in-out overflow-hidden ${
              isScrolled ? "w-[180px] opacity-100" : "w-0 opacity-0"
            }`}
          >
            <Link
              href="/"
              className="flex items-center gap-2 h-full whitespace-nowrap"
            >
              <Image
                src="/logo.svg"
                alt="Studsphere"
                width={180}
                height={50}
                className="h-10 sm:h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div
            className={`hidden md:flex items-center gap-6 lg:gap-8 transition-all duration-300 ${
              isScrolled ? "flex-1 justify-center" : "flex-1 justify-start"
            }`}
          >
            {/* Explore dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsExploreOpen(!isExploreOpen)}
                onBlur={() => setTimeout(() => setIsExploreOpen(false), 200)}
                className="text-gray-700 hover:text-gray-900 font-medium text-sm flex items-center gap-1 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                Explore tools and Academics
                <ChevronDown className="w-4 h-4" />
              </button>
              {isExploreOpen && (
                <div
                  className="absolute left-0 mt-2 w-[540px] bg-white border border-gray-200 rounded-2xl shadow-xl z-50 flex p-6 gap-8"
                  onMouseDown={(e) => e.preventDefault()}
                >
                  {/* OUR TOOLSET */}
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 mb-4 text-[16px]">
                      OUR TOOLSET
                    </div>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/colleges/findcollege"
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 group"
                        >
                          <span className="bg-blue-100 p-2 rounded-lg">
                            <Image
                              src="/college.png"
                              alt="Find College"
                              width={28}
                              height={28}
                            />
                          </span>
                          <span>
                            <span className="font-bold text-[15px] text-gray-900">
                              Find College
                            </span>
                            <div className="text-xs text-gray-500">
                              Discover Your Perfect College
                            </div>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/colleges/courses"
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 group"
                        >
                          <span className="bg-blue-100 p-2 rounded-lg">
                            <Image
                              src="/course.png"
                              alt="Course Finder"
                              width={28}
                              height={28}
                            />
                          </span>
                          <span>
                            <span className="font-bold text-[15px] text-blue-600 group-hover:underline">
                              Course Finder
                            </span>
                            <div className="text-xs text-gray-500">
                              Discover Your Perfect College
                            </div>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/colleges/compare"
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 group"
                        >
                          <span className="bg-yellow-100 p-2 rounded-lg">
                            <Image
                              src="/compare.png"
                              alt="Compare College"
                              width={28}
                              height={28}
                            />
                          </span>
                          <span>
                            <span className="font-bold text-[15px] text-gray-900">
                              Compare college
                            </span>
                            <div className="text-xs text-gray-500">
                              Compare Colleges Side-by-Side
                            </div>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/colleges/exams"
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 group"
                        >
                          <span className="bg-yellow-100 p-2 rounded-lg">
                            <Image
                              src="/exams.png"
                              alt="Exams"
                              width={28}
                              height={28}
                            />
                          </span>
                          <span>
                            <span className="font-bold text-[15px] text-gray-900">
                              Exams
                            </span>
                            <div className="text-xs text-gray-500">
                              Discover Your Perfect College
                            </div>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/colleges/predictor"
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 group"
                        >
                          <span className="bg-pink-100 p-2 rounded-lg">
                            <Image
                              src="/predict.png"
                              alt="College Predictors"
                              width={28}
                              height={28}
                            />
                          </span>
                          <span>
                            <span className="font-bold text-[15px] text-gray-900">
                              college predictors
                            </span>
                            <div className="text-xs text-gray-500">
                              Discover Your Perfect College
                            </div>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* Explore Academics */}
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 mb-4 text-[16px]">
                      Explore Academics
                    </div>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/colleges/universities"
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 group"
                        >
                          <span className="bg-green-100 p-2 rounded-lg">
                            <Image
                              src="/uni.png"
                              alt="Universities"
                              width={28}
                              height={28}
                            />
                          </span>
                          <span>
                            <span className="font-bold text-[15px] text-gray-900">
                              Universities
                            </span>
                            <div className="text-xs text-gray-500">
                              Discover Your Perfect College
                            </div>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/colleges/rankings"
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 group"
                        >
                          <span className="bg-yellow-100 p-2 rounded-lg">
                            <Image
                              src="/ranking.png"
                              alt="Rankings"
                              width={28}
                              height={28}
                            />
                          </span>
                          <span>
                            <span className="font-bold text-[15px] text-gray-900">
                              Rankings
                            </span>
                            <div className="text-xs text-gray-500">
                              Discover Your Perfect College
                            </div>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/colleges/admissions"
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 group"
                        >
                          <span className="bg-red-100 p-2 rounded-lg">
                            <Image
                              src="/admission.png"
                              alt="Admissions"
                              width={28}
                              height={28}
                            />
                          </span>
                          <span>
                            <span className="font-bold text-[15px] text-gray-900">
                              Admissions
                            </span>
                            <div className="text-xs text-gray-500">
                              Discover Your Perfect College
                            </div>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/colleges/entrance"
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 group"
                        >
                          <span className="bg-blue-100 p-2 rounded-lg">
                            <Image
                              src="/entrance.png"
                              alt="Entrance"
                              width={28}
                              height={28}
                            />
                          </span>
                          <span>
                            <span className="font-bold text-[15px] text-gray-900">
                              Entrance
                            </span>
                            <div className="text-xs text-gray-500">
                              Discover Your Perfect College
                            </div>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/colleges/forum"
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 group"
                        >
                          <span className="bg-yellow-100 p-2 rounded-lg">
                            <Image
                              src="/campus.png"
                              alt="Campus Forum"
                              width={28}
                              height={28}
                            />
                          </span>
                          <span>
                            <span className="font-bold text-[15px] text-gray-900">
                              Campus Forum
                            </span>
                            <div className="text-xs text-gray-500">
                              Discover Your Perfect College
                            </div>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setIsScholarshipOpen(true)}
              onMouseLeave={() => setIsScholarshipOpen(false)}
            >
              <button
                className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1 px-2 py-1 rounded-lg focus:outline-none"
                type="button"
              >
                Scholarship
                <ChevronDown className="w-4 h-4" />
              </button>
              {isScholarshipOpen && (
                <div
                  className="absolute left-0 mt-2 w-[320px] bg-white border border-gray-200 rounded-2xl shadow-xl z-50 p-4"
                  onMouseDown={(e) => e.preventDefault()}
                >
                  <div className="font-semibold text-gray-900 mb-4 text-[16px]">
                    Scholarship Options
                  </div>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/colleges/scholarships"
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 group"
                      >
                        <span className="bg-gray-100 p-2 rounded-lg">
                          <Image
                            src="/finder.png"
                            alt="Scholarship Finder"
                            width={28}
                            height={28}
                          />
                        </span>
                        <span>
                          <span className="font-bold text-[15px] text-gray-900">
                            Scholarship Finder
                          </span>
                          <div className="text-xs text-gray-500">
                            Find scholarships that match you
                          </div>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          if (heroSectionRef?.current) {
                            heroSectionRef.current.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                          }
                          setIsScholarshipOpen(false);
                        }}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 group w-full text-left"
                      >
                        <span className="bg-blue-100 p-2 rounded-lg">
                          <Image
                            src="/featured.png"
                            alt="Apply for Scholarship"
                            width={28}
                            height={28}
                          />
                        </span>
                        <span>
                          <span className="font-bold text-[15px] text-gray-900">
                            Apply for Scholarship
                          </span>
                          <div className="text-xs text-gray-500">
                            Start your application process
                          </div>
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <Link
              href="/colleges/resources"
              className="text-gray-700 hover:text-gray-900 font-medium text-sm"
            >
              Study Resources
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsMoreOpen(true)}
              onMouseLeave={() => setIsMoreOpen(false)}
            >
              <button
                className="text-gray-700 hover:text-gray-900 font-medium text-sm flex items-center gap-1 px-2 py-1 rounded-lg focus:outline-none"
                type="button"
              >
                More
                <ChevronDown className="w-4 h-4" />
              </button>
              {isMoreOpen && (
                <div
                  className="absolute left-0 mt-2 w-[220px] bg-white border border-gray-200 rounded-2xl shadow-xl z-50 p-2"
                  onMouseDown={(e) => e.preventDefault()}
                >
                  <ul className="space-y-1">
                    <li>
                      <Link
                        href="/blog/news"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-800 font-medium"
                      >
                        <span className="bg-blue-100 p-2 rounded-lg">
                          <Image
                            src="/news.png"
                            alt="News"
                            width={30}
                            height={30}
                          />
                        </span>
                        News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-800 font-medium"
                      >
                        <span className="bg-pink-100 p-2 rounded-lg">
                          <Image
                            src="/blog.png"
                            alt="Blogs"
                            width={30}
                            height={30}
                          />
                        </span>
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/colleges/events"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-800 font-medium"
                      >
                        <span className="bg-yellow-100 p-2 rounded-lg">
                          <Image
                            src="/events.png"
                            alt="Events"
                            width={30}
                            height={30}
                          />
                        </span>
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-800 font-medium"
                      >
                        <span className="bg-green-100 p-2 rounded-lg">
                          <Image
                            src="/contact.png"
                            alt="Contact Us"
                            width={30}
                            height={30}
                          />
                        </span>
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Right Actions - Responsive */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4 shrink-0">
            {/* Notification Bell */}
            <button className="relative p-2 hover:bg-gray-100 rounded-lg">
              <Bell className="w-5 h-5 text-gray-700" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>

            {/* Profile Avatar */}
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-green-500">
              <Image
                src="/images/avatar-placeholder.jpg"
                alt="Profile"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Institutions Zone Button */}
            <Link
              href="/colleges/institutions"
              className="text-gray-700 font-medium text-sm hover:text-gray-900 flex items-center gap-1"
            >
              Institutions Zone
              <span>›</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation - Improved responsive layout */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-gray-200 pt-4">
            <div className="space-y-2">
              <p className="text-gray-500 text-sm font-medium">Explore</p>
              <Link
                href="/"
                className="block text-gray-700 hover:text-gray-900 font-medium text-sm pl-2"
              >
                Studsphere for Students
              </Link>
            </div>

            {/* Mobile: Scholarship Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsScholarshipOpen(!isScholarshipOpen)}
                className="block w-full text-left text-blue-600 hover:text-blue-700 font-medium text-base py-2"
              >
                Scholarship <ChevronDown className="inline w-4 h-4 ml-1" />
              </button>
              {isScholarshipOpen && (
                <div className="bg-white border border-gray-200 rounded-2xl shadow-xl z-50 p-2 mt-1">
                  <ul className="space-y-1">
                    <li>
                      <Link
                        href="/colleges/scholarships/finder"
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50"
                      >
                        <span className="bg-gray-100 p-2 rounded-lg">
                          <Image
                            src="/images/icons/scholarship-finder.svg"
                            alt="Scholarship Finder"
                            width={24}
                            height={24}
                          />
                        </span>
                        <span>
                          <span className="font-bold text-[15px] text-gray-900">
                            Scholarship Finder
                          </span>
                          <div className="text-xs text-gray-500">
                            Compare Colleges Side-by-Side
                          </div>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/colleges/scholarships/featured"
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50"
                      >
                        <span className="bg-blue-100 p-2 rounded-lg">
                          <Image
                            src="/images/icons/featured-scholarship.svg"
                            alt="Featured Scholarship"
                            width={24}
                            height={24}
                          />
                        </span>
                        <span>
                          <span className="font-bold text-[15px] text-gray-900">
                            Featured Scholarship
                          </span>
                          <div className="text-xs text-gray-500">
                            Discover Your Perfect College
                          </div>
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <Link
              href="/colleges/resources"
              className="block text-gray-700 hover:text-gray-900 font-medium"
            >
              Study Resources
            </Link>

            {/* Mobile: More Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className="block w-full text-left text-gray-700 hover:text-gray-900 font-medium text-base py-2"
              >
                More <ChevronDown className="inline w-4 h-4 ml-1" />
              </button>
              {isMoreOpen && (
                <div className="bg-white border border-gray-200 rounded-2xl shadow-xl z-50 p-2 mt-1">
                  <ul className="space-y-1">
                    <li>
                      <Link
                        href="/blog/news"
                        className="block px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-800 font-medium"
                      >
                        News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog"
                        className="block px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-800 font-medium"
                      >
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/events"
                        className="block px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-800 font-medium"
                      >
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="block px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-800 font-medium"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                <Bell className="w-5 h-5 text-gray-700" />
                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-green-500">
                <Image
                  src="/images/avatar-placeholder.jpg"
                  alt="Profile"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <Link
              href="/colleges/institutions"
              className="block text-gray-700 hover:text-gray-900 font-medium"
            >
              Institutions Zone ›
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default CollegeNavbar;
