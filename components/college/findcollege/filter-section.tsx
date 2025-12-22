"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, Filter, RotateCcw, Search, CheckCircle2, Clock, Sparkles } from "lucide-react"

export function FilterSection() {
  const [openSections, setOpenSections] = useState<string[]>([
    "quick",
    "academic",
    "stream",
    "location",
    "college-type",
    "facilities",
    "fee",
    "duration",
    "popularity",
  ])

  const toggleSection = (section: string) => {
    setOpenSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  return (
    <Card className="sticky top-4">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div className="flex items-center gap-2">
          <Filter className="size-5" />
          <CardTitle>Filters</CardTitle>
        </div>
        <Button variant="ghost" size="sm" className="gap-2">
          <RotateCcw className="size-4" />
          Reset
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Quick Filters */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase text-muted-foreground">Quick Filters</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="gap-1.5 border-green-600 bg-green-50 text-green-700">
              <CheckCircle2 className="size-3" />
              Verified
            </Badge>
            <Badge variant="outline" className="gap-1.5 border-blue-600 bg-blue-50 text-blue-700">
              <Sparkles className="size-3" />
              New
            </Badge>
            <Badge variant="outline" className="gap-1.5 border-red-600 bg-red-50 text-red-700">
              <Clock className="size-3" />
              Closing
            </Badge>
          </div>
        </div>

        {/* Academic Level / Program */}
        <Collapsible open={openSections.includes("academic")} onOpenChange={() => toggleSection("academic")}>
          <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
            <h3 className="text-sm font-semibold">Academic Level / Program</h3>
            <ChevronDown
              className={`size-4 transition-transform ${openSections.includes("academic") ? "rotate-180" : ""}`}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-3 pt-2">
            <FilterCheckbox label="+2 / Higher Secondary" count="200 Colleges" />
            <FilterCheckbox label="Bachelor" count="200 Colleges" />
            <FilterCheckbox label="Master" count="200 Colleges" />
            <FilterCheckbox label="Diploma / CTEVT" count="200 Colleges" />
            <FilterCheckbox label="Other" count="200 Colleges" />
          </CollapsibleContent>
        </Collapsible>

        {/* Stream / Faculty */}
        <Collapsible open={openSections.includes("stream")} onOpenChange={() => toggleSection("stream")}>
          <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
            <h3 className="text-sm font-semibold">Stream / Faculty</h3>
            <ChevronDown
              className={`size-4 transition-transform ${openSections.includes("stream") ? "rotate-180" : ""}`}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-3 pt-2">
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Filter Fields..." className="pl-9" />
            </div>
            <FilterCheckbox label="Science" count="200 Colleges" />
            <FilterCheckbox label="Management" count="200 Colleges" />
            <FilterCheckbox label="Medical" count="200 Colleges" />
            <FilterCheckbox label="Computer Science" count="200 Colleges" />
          </CollapsibleContent>
        </Collapsible>

        {/* Location */}
        <Collapsible open={openSections.includes("location")} onOpenChange={() => toggleSection("location")}>
          <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
            <h3 className="text-sm font-semibold">Location</h3>
            <ChevronDown
              className={`size-4 transition-transform ${openSections.includes("location") ? "rotate-180" : ""}`}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-3 pt-2">
            <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              <option>All Provinces</option>
              <option>Province 1</option>
              <option>Province 2</option>
              <option>Bagmati Province</option>
              <option>Gandaki Province</option>
              <option>Lumbini Province</option>
              <option>Karnali Province</option>
              <option>Sudurpashchim Province</option>
            </select>
            <FilterCheckbox label="National Wide" />
          </CollapsibleContent>
        </Collapsible>

        {/* Colleges Type */}
        <Collapsible open={openSections.includes("college-type")} onOpenChange={() => toggleSection("college-type")}>
          <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
            <h3 className="text-sm font-semibold">Colleges Type</h3>
            <ChevronDown
              className={`size-4 transition-transform ${openSections.includes("college-type") ? "rotate-180" : ""}`}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-3 pt-2">
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Filter Fields..." className="pl-9" />
            </div>
            <FilterCheckbox label="Government College" count="200 Colleges" />
            <FilterCheckbox label="Private College" count="200 Colleges" />
            <FilterCheckbox label="University-affiliated (TU, KU, PU, Purbanchal)" count="200 Colleges" />
            <FilterCheckbox label="Community" count="200 Colleges" />
            <FilterCheckbox label="CTEVT / Gov. Training Center" count="200 Colleges" />
          </CollapsibleContent>
        </Collapsible>

        {/* Facilities / Amenities */}
        <Collapsible open={openSections.includes("facilities")} onOpenChange={() => toggleSection("facilities")}>
          <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
            <h3 className="text-sm font-semibold">Facilities / Amenities</h3>
            <ChevronDown
              className={`size-4 transition-transform ${openSections.includes("facilities") ? "rotate-180" : ""}`}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-3 pt-2">
            <FilterCheckbox label="Hostel" />
            <FilterCheckbox label="Library" />
            <FilterCheckbox label="Computer Lab" />
            <FilterCheckbox label="Canteen" />
            <FilterCheckbox label="Play Ground" />
          </CollapsibleContent>
        </Collapsible>

        {/* Total Fee Range (NPR) */}
        <Collapsible open={openSections.includes("fee")} onOpenChange={() => toggleSection("fee")}>
          <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
            <h3 className="text-sm font-semibold">Total Fee Range (NPR)</h3>
            <ChevronDown
              className={`size-4 transition-transform ${openSections.includes("fee") ? "rotate-180" : ""}`}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-3 pt-2">
            <FilterCheckbox label="Free / Government Funded" />
            <FilterCheckbox label="Under NPR 50,000" />
            <FilterCheckbox label="NPR 50,000 - 1,00,000" />
            <FilterCheckbox label="NPR 1,00,000 - 2,00,000" />
            <FilterCheckbox label="Above NPR 2,00,000" />
          </CollapsibleContent>
        </Collapsible>

        {/* Course Duration */}
        <Collapsible open={openSections.includes("duration")} onOpenChange={() => toggleSection("duration")}>
          <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
            <h3 className="text-sm font-semibold">Course Duration</h3>
            <ChevronDown
              className={`size-4 transition-transform ${openSections.includes("duration") ? "rotate-180" : ""}`}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-3 pt-2">
            <FilterCheckbox label="< 1 month" />
            <FilterCheckbox label="1-3 months" />
            <FilterCheckbox label="3-6 months" />
            <FilterCheckbox label="6 months-1 year" />
            <FilterCheckbox label="1-2 years" />
            <FilterCheckbox label="3-4 years" />
            <FilterCheckbox label="4+ years" />
          </CollapsibleContent>
        </Collapsible>

        {/* Popularity */}
        <Collapsible open={openSections.includes("popularity")} onOpenChange={() => toggleSection("popularity")}>
          <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
            <h3 className="text-sm font-semibold">Popularity</h3>
            <ChevronDown
              className={`size-4 transition-transform ${openSections.includes("popularity") ? "rotate-180" : ""}`}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-3 pt-2">
            <FilterCheckbox label="Most Enrolled" />
            <FilterCheckbox label="Trending Programs" />
            <FilterCheckbox label="Recommended" />
            <FilterCheckbox label="New Programs" />
          </CollapsibleContent>
        </Collapsible>

        {/* Find Scholarship Button */}
        <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
          Find Scholarship
        </Button>
      </CardContent>
    </Card>
  )
}

function FilterCheckbox({ label, count }: { label: string; count?: string }) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={label} />
      <Label htmlFor={label} className="flex flex-1 cursor-pointer items-center justify-between text-sm font-normal">
        <span>{label}</span>
        {count && <span className="text-xs text-blue-600">{count}</span>}
      </Label>
    </div>
  )
}
