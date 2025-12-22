"use client";

import { useState } from "react";
import { Filter, RotateCcw, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function ExamFilters() {
  const [openSections, setOpenSections] = useState({
    examType: true,
    examLevel: true,
    examBoard: true,
    examStatus: true,
    examField: true,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl font-bold text-gray-900">Filters</h2>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-600 hover:text-gray-900"
        >
          <RotateCcw className="w-4 h-4 mr-1" />
          Reset
        </Button>
      </div>

      <div className="space-y-6">
        {/* Quick Filters */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            QUICK FILTERS
          </h3>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-green-500 text-green-700 bg-transparent"
            >
              <span className="mr-1">⏰</span> Upcoming
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-blue-500 text-blue-700 bg-transparent"
            >
              <span className="mr-1">📝</span> Active
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-red-500 text-red-700 bg-transparent"
            >
              <span className="mr-1">🔥</span> Popular
            </Button>
          </div>
        </div>

        {/* Exam Type */}
        <Collapsible open={openSections.examType}>
          <CollapsibleTrigger
            onClick={() => toggleSection("examType")}
            className="flex items-center justify-between w-full"
          >
            <h3 className="text-sm font-semibold text-gray-900">Exam Type</h3>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                openSections.examType ? "rotate-180" : ""
              }`}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-3 space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="entrance" />
              <Label
                htmlFor="entrance"
                className="text-sm text-gray-700 cursor-pointer"
              >
                Entrance Exam
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="board" />
              <Label
                htmlFor="board"
                className="text-sm text-gray-700 cursor-pointer"
              >
                Board Exam
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="competitive" />
              <Label
                htmlFor="competitive"
                className="text-sm text-gray-700 cursor-pointer"
              >
                Competitive Exam
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="aptitude" />
              <Label
                htmlFor="aptitude"
                className="text-sm text-gray-700 cursor-pointer"
              >
                Aptitude Test
              </Label>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Exam Level */}
        <Collapsible open={openSections.examLevel}>
          <CollapsibleTrigger
            onClick={() => toggleSection("examLevel")}
            className="flex items-center justify-between w-full"
          >
            <h3 className="text-sm font-semibold text-gray-900">Exam Level</h3>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                openSections.examLevel ? "rotate-180" : ""
              }`}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-3 space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="highschool" />
              <Label
                htmlFor="highschool"
                className="text-sm text-gray-700 cursor-pointer"
              >
                High School (Class 10)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="intermediate" />
              <Label
                htmlFor="intermediate"
                className="text-sm text-gray-700 cursor-pointer"
              >
                +2 / Intermediate
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="undergraduate" />
              <Label
                htmlFor="undergraduate"
                className="text-sm text-gray-700 cursor-pointer"
              >
                Undergraduate (Bachelor)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="postgraduate" />
              <Label
                htmlFor="postgraduate"
                className="text-sm text-gray-700 cursor-pointer"
              >
                Postgraduate (Master)
              </Label>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Exam Board */}
        <Collapsible open={openSections.examBoard}>
          <CollapsibleTrigger
            onClick={() => toggleSection("examBoard")}
            className="flex items-center justify-between w-full"
          >
            <h3 className="text-sm font-semibold text-gray-900">
              Exam Board / Authority
            </h3>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                openSections.examBoard ? "rotate-180" : ""
              }`}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-3 space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="neb" />
              <Label
                htmlFor="neb"
                className="text-sm text-gray-700 cursor-pointer"
              >
                NEB (National Examination Board)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="tu" />
              <Label
                htmlFor="tu"
                className="text-sm text-gray-700 cursor-pointer"
              >
                Tribhuvan University (TU)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="ku" />
              <Label
                htmlFor="ku"
                className="text-sm text-gray-700 cursor-pointer"
              >
                Kathmandu University (KU)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="pu" />
              <Label
                htmlFor="pu"
                className="text-sm text-gray-700 cursor-pointer"
              >
                Pokhara University (PU)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="ctevt" />
              <Label
                htmlFor="ctevt"
                className="text-sm text-gray-700 cursor-pointer"
              >
                CTEVT
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="loksewa" />
              <Label
                htmlFor="loksewa"
                className="text-sm text-gray-700 cursor-pointer"
              >
                Loksewa Aayog
              </Label>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Exam Field */}
        <Collapsible open={openSections.examField}>
          <CollapsibleTrigger
            onClick={() => toggleSection("examField")}
            className="flex items-center justify-between w-full"
          >
            <h3 className="text-sm font-semibold text-gray-900">
              Field of Study
            </h3>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                openSections.examField ? "rotate-180" : ""
              }`}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-3 space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="engineering" />
              <Label
                htmlFor="engineering"
                className="text-sm text-gray-700 cursor-pointer"
              >
                Engineering
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="medical" />
              <Label
                htmlFor="medical"
                className="text-sm text-gray-700 cursor-pointer"
              >
                Medical & Health Sciences
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="management" />
              <Label
                htmlFor="management"
                className="text-sm text-gray-700 cursor-pointer"
              >
                Management / Business
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="law" />
              <Label
                htmlFor="law"
                className="text-sm text-gray-700 cursor-pointer"
              >
                Law
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="education" />
              <Label
                htmlFor="education"
                className="text-sm text-gray-700 cursor-pointer"
              >
                Education
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="general" />
              <Label
                htmlFor="general"
                className="text-sm text-gray-700 cursor-pointer"
              >
                General (All Fields)
              </Label>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Exam Status */}
        <Collapsible open={openSections.examStatus}>
          <CollapsibleTrigger
            onClick={() => toggleSection("examStatus")}
            className="flex items-center justify-between w-full"
          >
            <h3 className="text-sm font-semibold text-gray-900">Status</h3>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                openSections.examStatus ? "rotate-180" : ""
              }`}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-3 space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="form-open" />
              <Label
                htmlFor="form-open"
                className="text-sm text-gray-700 cursor-pointer"
              >
                Form Filling Open
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="upcoming-exam" />
              <Label
                htmlFor="upcoming-exam"
                className="text-sm text-gray-700 cursor-pointer"
              >
                Upcoming Exam
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="result-pending" />
              <Label
                htmlFor="result-pending"
                className="text-sm text-gray-700 cursor-pointer"
              >
                Result Pending
              </Label>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
}
