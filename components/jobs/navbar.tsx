"use client"

import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { JobsDropdownModal } from "@/components/jobs-dropdown-modal"
import { CompaniesDropdownModal } from "@/components/companies-dropdown-modal"
import { ResumeToolsDropdownModal } from "@/components/resume-tools-dropdown-modal"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isEmployerPage = pathname?.startsWith('/jobs/employer')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo - Responsive sizing - Only show when scrolled */}
          <div className={`shrink-0 transition-all duration-300 ease-in-out overflow-hidden ${
            isScrolled ? "w-[180px] opacity-100" : "w-0 opacity-0"
          }`}>
            <Link href="/" className="flex items-center gap-2 h-full whitespace-nowrap">
              <Image
                src="/logo.svg"
                alt="Studsphere Education"
                width={180}
                height={50}
                className="h-10 sm:h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center gap-6 lg:gap-8 transition-all duration-300 ${
            isScrolled ? "flex-1 justify-center" : "flex-1 justify-start"
          }`}>
            <JobsDropdownModal />
            <CompaniesDropdownModal />
            <Link href="/jobs/mentor" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
              Mentorship
            </Link>
            <ResumeToolsDropdownModal />
          </div>

          {/* Right Actions - Responsive */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3 shrink-0">
            {isEmployerPage ? (
              <>
                <Link
                  href="/jobs/employer#product"
                  className="text-gray-700 font-medium text-sm hover:text-gray-900"
                >
                  Product
                </Link>
                <Link
                  href="/jobs/employer/pricing"
                  className="text-blue-600 font-medium text-sm hover:text-blue-700 px-4 py-2 border border-blue-600 rounded-lg"
                >
                  Price
                </Link>
              </>
            ) : (
              <Link
                href="/jobs/employer"
                className="text-blue-600 font-medium text-sm hover:text-blue-700 flex items-center gap-1"
              >
                Employer zone
                <span>›</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation - Improved responsive layout */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-gray-200 pt-4">
            <JobsDropdownModal />
            <CompaniesDropdownModal />
            <Link href="/jobs/mentor" className="block text-gray-700 hover:text-gray-900 font-medium">
              Mentorship
            </Link>
            <div className="space-y-2 pl-2 border-t border-gray-200 pt-4">
              <p className="text-gray-500 text-sm font-medium">Resume Tools</p>
              <Link
                href="/resume-tools/builder"
                className="block text-gray-700 hover:text-gray-900 font-medium text-sm"
              >
                AI Resume builder
              </Link>
              <Link
                href="/resume-tools/checker"
                className="block text-gray-700 hover:text-gray-900 font-medium text-sm"
              >
                AI Resume Checker
              </Link>
              <Link
                href="/resume-tools/cover-letter"
                className="block text-gray-700 hover:text-gray-900 font-medium text-sm"
              >
                AI Cover letter generator
              </Link>
              <Link href="/blogs" className="block text-gray-700 hover:text-gray-900 font-medium text-sm">
                Blogs
              </Link>
            </div>
            {isEmployerPage ? (
              <div className="flex gap-2">
                <Link
                  href="/jobs/employer#product"
                  className="block text-gray-700 hover:text-gray-900 font-medium"
                >
                  Product
                </Link>
                <Link
                  href="/jobs/employer/pricing"
                  className="block text-blue-600 hover:text-blue-700 font-medium px-4 py-2 border border-blue-600 rounded-lg"
                >
                  Price
                </Link>
              </div>
            ) : (
              <Link href="/jobs/employer" className="block text-blue-600 hover:text-blue-700 font-medium">
                Employer zone
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
