"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white">
      {/* Main Footer Content */}
      <div className="w-full mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Logo & Contact Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/logo.png"
                alt="Studsphere Logo"
                width={120}
                height={60}
                className="mb-4"
              />
            </div>
            <div className="space-y-3 text-sm mb-6">
              <p className="font-semibold">Tel : 01-456746 , 01-985647</p>
              <p className="text-blue-100">Email: hello@stusphere.com</p>
              <p className="text-blue-100">Address: New- Baneshwor, Kathmandu</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-3 mb-6">
              <a
                href="#facebook"
                className="bg-white text-blue-600 rounded-full p-3 hover:bg-blue-100 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#instagram"
                className="bg-white text-blue-600 rounded-full p-3 hover:bg-blue-100 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#linkedin"
                className="bg-white text-blue-600 rounded-full p-3 hover:bg-blue-100 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#twitter"
                className="bg-white text-blue-600 rounded-full p-3 hover:bg-blue-100 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>

            {/* Contact Button */}
            <button className="w-full bg-white text-blue-600 font-semibold py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Contact us
            </button>
          </div>

          {/* INFO Column */}
          <div className="ml-10">
            <h3 className="font-bold text-lg mb-6 ">INFO</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  Advertising Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  Blogs
                </Link>
              </li>
            </ul>

            <h3 className="font-bold text-lg mb-6 mt-8">USEFUL LINKS</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  SEE Results
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  NEB Results
                </Link>
              </li>
            </ul>
          </div>

          {/* FOR INSTITUTIONS Column */}
          <div>
            <h3 className="font-bold text-lg mb-6">FOR INSTITUTIONS</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  Institutions login
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  Pricing & Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  Promote your college
                </Link>
              </li>
            </ul>
          </div>

          {/* FOR STUDENTS Column */}
          <div>
            <h3 className="font-bold text-lg mb-6">FOR STUDENTS</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  College Finder
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  Scholarship Finder
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  Exams
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  Study Materials
                </Link>
              </li>
            </ul>
          </div>

          {/* FOR EMPLOYER Column */}
          <div>
            <h3 className="font-bold text-lg mb-6">FOR EMPLOYER</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  Employer Zone
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  Services & Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  Job Listing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  Promote your organization
                </Link>
              </li>
            </ul>
          </div>

          {/* FOR JOBSEEKERS Column */}
          <div>
            <h3 className="font-bold text-lg mb-6">FOR JOBSEEKERS</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  Employer Zone
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  Services & Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  Job Listing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  Job management
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-blue-500 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-100 text-sm">copyrights @studsphere.com</p>
            <div className="flex gap-4 text-blue-100 text-sm">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy policy
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
