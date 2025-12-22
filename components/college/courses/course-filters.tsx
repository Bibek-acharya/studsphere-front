"use client"

import { useState } from "react"
import { Filter, RotateCcw, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function CourseFilters() {
  const [openSections, setOpenSections] = useState({
    location: true,
    feeRange: true,
    scholarship: true,
    duration: true,
    admission: true,
    popularity: true,
    academicLevel: true,
    fieldOfStudy: true,
    providerType: true,
  })

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl font-bold text-gray-900">Filters</h2>
        </div>
        <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
          <RotateCcw className="w-4 h-4 mr-1" />
          Reset
        </Button>
      </div>

      <div className="space-y-6">
        {/* Quick Filters */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-3">QUICK FILTERS</h3>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="rounded-full border-green-500 text-green-700 bg-transparent">
              <span className="mr-1">✓</span> Verified
            </Button>
            <Button variant="outline" size="sm" className="rounded-full border-blue-500 text-blue-700 bg-transparent">
              <span className="mr-1">⚡</span> New
            </Button>
            <Button variant="outline" size="sm" className="rounded-full border-red-500 text-red-700 bg-transparent">
              <span className="mr-1">⏰</span> Closing
            </Button>
          </div>
        </div>

        {/* Academic Level */}
        <Collapsible open={openSections.academicLevel}>
          <CollapsibleTrigger
            onClick={() => toggleSection("academicLevel")}
            className="flex items-center justify-between w-full"
          >
            <h3 className="text-sm font-semibold text-gray-900">Academic Level / Program</h3>
            <ChevronDown className={`w-4 h-4 transition-transform ${openSections.academicLevel ? "rotate-180" : ""}`} />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-3 space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="higher-secondary" />
              <Label htmlFor="higher-secondary" className="text-sm text-gray-700 cursor-pointer">
                +2 / Higher Secondary
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="bachelor" />
              <Label htmlFor="bachelor" className="text-sm text-gray-700 cursor-pointer">
                Bachelor
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="master" />
              <Label htmlFor="master" className="text-sm text-gray-700 cursor-pointer">
                Master
              </Label>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Field of Study */}
        <Collapsible open={openSections.fieldOfStudy}>
          <CollapsibleTrigger
            onClick={() => toggleSection("fieldOfStudy")}
            className="flex items-center justify-between w-full"
          >
            <h3 className="text-sm font-semibold text-gray-900">Field of study</h3>
            <ChevronDown className={`w-4 h-4 transition-transform ${openSections.fieldOfStudy ? "rotate-180" : ""}`} />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-3 space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="engineering" />
              <Label htmlFor="engineering" className="text-sm text-gray-700 cursor-pointer">
                Engineering
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="it-cs" />
              <Label htmlFor="it-cs" className="text-sm text-gray-700 cursor-pointer">
                IT / Computer Science
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="management" />
              <Label htmlFor="management" className="text-sm text-gray-700 cursor-pointer">
                Management / Business
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="medicine" />
              <Label htmlFor="medicine" className="text-sm text-gray-700 cursor-pointer">
                Medicine & Health
              </Label>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Location */}
        <Collapsible open={openSections.location}>
          <CollapsibleTrigger
            onClick={() => toggleSection("location")}
            className="flex items-center justify-between w-full"
          >
            <h3 className="text-sm font-semibold text-gray-900">Location</h3>
            <ChevronDown className={`w-4 h-4 transition-transform ${openSections.location ? "rotate-180" : ""}`} />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-3 space-y-3">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All Provinces" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Provinces</SelectItem>
                <SelectItem value="province1">Province 1</SelectItem>
                <SelectItem value="province2">Madhesh Province</SelectItem>
                <SelectItem value="province3">Bagmati Province</SelectItem>
                <SelectItem value="province4">Gandaki Province</SelectItem>
                <SelectItem value="province5">Lumbini Province</SelectItem>
                <SelectItem value="province6">Karnali Province</SelectItem>
                <SelectItem value="province7">Sudurpashchim Province</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center space-x-2">
              <Checkbox id="national-wide" />
              <Label htmlFor="national-wide" className="text-sm text-gray-700 cursor-pointer">
                National Wide
              </Label>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Fee Range */}
        <Collapsible open={openSections.feeRange}>
          <CollapsibleTrigger
            onClick={() => toggleSection("feeRange")}
            className="flex items-center justify-between w-full"
          >
            <h3 className="text-sm font-semibold text-gray-900">Total Fee Range (NPR)</h3>
            <ChevronDown className={`w-4 h-4 transition-transform ${openSections.feeRange ? "rotate-180" : ""}`} />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-3 space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="free" />
              <Label htmlFor="free" className="text-sm text-gray-700 cursor-pointer">
                Free / Government Funded
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="under-50k" />
              <Label htmlFor="under-50k" className="text-sm text-gray-700 cursor-pointer">
                Under NPR 50,000
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="50k-1l" />
              <Label htmlFor="50k-1l" className="text-sm text-gray-700 cursor-pointer">
                NPR 50,000 – 1,00,000
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="1l-2l" />
              <Label htmlFor="1l-2l" className="text-sm text-gray-700 cursor-pointer">
                NPR 1,00,000 – 2,00,000
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="above-2l" />
              <Label htmlFor="above-2l" className="text-sm text-gray-700 cursor-pointer">
                Above NPR 2,00,000
              </Label>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Scholarship */}
        <Collapsible open={openSections.scholarship}>
          <CollapsibleTrigger
            onClick={() => toggleSection("scholarship")}
            className="flex items-center justify-between w-full"
          >
            <h3 className="text-sm font-semibold text-gray-900">Scholarship / Financial Aid</h3>
            <ChevronDown className={`w-4 h-4 transition-transform ${openSections.scholarship ? "rotate-180" : ""}`} />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-3 space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="scholarship-available" />
              <Label htmlFor="scholarship-available" className="text-sm text-gray-700 cursor-pointer">
                Scholarship Available
              </Label>
            </div>
            {/* Removed duplicate "Scholarship Available" */}
            <div className="flex items-center space-x-2">
              <Checkbox id="govt-scholarship" />
              <Label htmlFor="govt-scholarship" className="text-sm text-gray-700 cursor-pointer">
                Government Scholarship
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="college-scholarship" />
              <Label htmlFor="college-scholarship" className="text-sm text-gray-700 cursor-pointer">
                College Scholarship
              </Label>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Course Duration */}
        <Collapsible open={openSections.duration}>
          <CollapsibleTrigger
            onClick={() => toggleSection("duration")}
            className="flex items-center justify-between w-full"
          >
            <h3 className="text-sm font-semibold text-gray-900">Course Duration</h3>
            <ChevronDown className={`w-4 h-4 transition-transform ${openSections.duration ? "rotate-180" : ""}`} />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-3 space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="less-1month" />
              <Label htmlFor="less-1month" className="text-sm text-gray-700 cursor-pointer">
                {"< 1 month"}
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="1-3months" />
              <Label htmlFor="1-3months" className="text-sm text-gray-700 cursor-pointer">
                1-3 months
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="3-6months" />
              <Label htmlFor="3-6months" className="text-sm text-gray-700 cursor-pointer">
                3-6 months
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="6months-1year" />
              <Label htmlFor="6months-1year" className="text-sm text-gray-700 cursor-pointer">
                6 months–1 year
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="1-2years" />
              <Label htmlFor="1-2years" className="text-sm text-gray-700 cursor-pointer">
                1-2 years
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="3-4years" />
              <Label htmlFor="3-4years" className="text-sm text-gray-700 cursor-pointer">
                3-4 years
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="4plus-years" />
              <Label htmlFor="4plus-years" className="text-sm text-gray-700 cursor-pointer">
                4+ years
              </Label>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Admission Requirement */}
        <Collapsible open={openSections.admission}>
          <CollapsibleTrigger
            onClick={() => toggleSection("admission")}
            className="flex items-center justify-between w-full"
          >
            <h3 className="text-sm font-semibold text-gray-900">Admission Requirement</h3>
            <ChevronDown className={`w-4 h-4 transition-transform ${openSections.admission ? "rotate-180" : ""}`} />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-3 space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="open-merit" />
              <Label htmlFor="open-merit" className="text-sm text-gray-700 cursor-pointer">
                Open Merit
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="entrance-exam" />
              <Label htmlFor="entrance-exam" className="text-sm text-gray-700 cursor-pointer">
                Entrance Exam Required
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="interview" />
              <Label htmlFor="interview" className="text-sm text-gray-700 cursor-pointer">
                Interview Required
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="portfolio" />
              <Label htmlFor="portfolio" className="text-sm text-gray-700 cursor-pointer">
                Portfolio / Aptitude Test
              </Label>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Popularity */}
        <Collapsible open={openSections.popularity}>
          <CollapsibleTrigger
            onClick={() => toggleSection("popularity")}
            className="flex items-center justify-between w-full"
          >
            <h3 className="text-sm font-semibold text-gray-900">Popularity</h3>
            <ChevronDown className={`w-4 h-4 transition-transform ${openSections.popularity ? "rotate-180" : ""}`} />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-3 space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="most-enrolled" />
              <Label htmlFor="most-enrolled" className="text-sm text-gray-700 cursor-pointer">
                Most Enrolled
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="trending" />
              <Label htmlFor="trending" className="text-sm text-gray-700 cursor-pointer">
                Trending Programs
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="recommended" />
              <Label htmlFor="recommended" className="text-sm text-gray-700 cursor-pointer">
                Recommended
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="new-programs" />
              <Label htmlFor="new-programs" className="text-sm text-gray-700 cursor-pointer">
                New Programs
              </Label>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Provider Type */}
        <Collapsible open={openSections.providerType}>
          <CollapsibleTrigger
            onClick={() => toggleSection("providerType")}
            className="flex items-center justify-between w-full"
          >
            <h3 className="text-sm font-semibold text-gray-900">Provider Type</h3>
            <ChevronDown className={`w-4 h-4 transition-transform ${openSections.providerType ? "rotate-180" : ""}`} />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-3 space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="govt-college" />
              <Label htmlFor="govt-college" className="text-sm text-gray-700 cursor-pointer">
                Government College
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="private-college" />
              <Label htmlFor="private-college" className="text-sm text-gray-700 cursor-pointer">
                Private College
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="university" />
              <Label htmlFor="university" className="text-sm text-gray-700 cursor-pointer">
                University-affiliated
              </Label>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* Updated button text */}
      <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white">Find Scholarship</Button>
    </div>
  )
}
