"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, MapPin, Star, Users, GraduationCap, Heart, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const colleges = [
  {
    id: 1,
    name: "Tribhuvan University",
    location: "KamalPokari, Kathmandu",
    rating: 4.2,
    maxRating: 5.0,
    type: "Private",
    affiliation: "TU",
    verified: true,
    popular: true,
    programs: [
      { name: "BE Computer Engineering", level: "Bachelor" },
      { name: "BE Computer Engineering", level: "Bachelor" },
      { name: "BE Computer Engineering", level: "Bachelor" },
    ],
    facilities: ["Verified", "Verified", "Verified", "Verified"],
    totalPrograms: 3,
  },
  {
    id: 2,
    name: "KIST College of Information Technology",
    location: "KamalPokari, Kathmandu",
    rating: 4.2,
    maxRating: 5.0,
    type: "Private",
    affiliation: "TU",
    verified: true,
    popular: true,
    programs: [
      { name: "BE Computer Engineering", level: "Bachelor" },
      { name: "BE Computer Engineering", level: "Bachelor" },
      { name: "BE Computer Engineering", level: "Bachelor" },
    ],
    facilities: ["Verified", "Verified", "Verified", "Verified"],
    totalPrograms: 3,
  },
  {
    id: 3,
    name: "KIST College of Information Technology",
    location: "KamalPokari, Kathmandu",
    rating: 4.2,
    maxRating: 5.0,
    type: "Private",
    affiliation: "TU",
    verified: true,
    popular: true,
    programs: [
      { name: "BE Computer Engineering", level: "Bachelor" },
      { name: "BE Computer Engineering", level: "Bachelor" },
      { name: "BE Computer Engineering", level: "Bachelor" },
    ],
    facilities: ["Verified", "Verified", "Verified", "Verified"],
    totalPrograms: 3,
  },
  {
    id: 4,
    name: "KIST College of Information Technology",
    location: "KamalPokari, Kathmandu",
    rating: 4.2,
    maxRating: 5.0,
    type: "Private",
    affiliation: "TU",
    verified: true,
    popular: true,
    programs: [
      { name: "BE Computer Engineering", level: "Bachelor" },
      { name: "BE Computer Engineering", level: "Bachelor" },
      { name: "BE Computer Engineering", level: "Bachelor" },
    ],
    facilities: ["Verified", "Verified", "Verified", "Verified"],
    totalPrograms: 3,
  },
]

export function CollegeGrid() {
  return (
    <div className="space-y-6">
      {/* Active Filters */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Active :</span>
        <Badge variant="secondary" className="gap-1">
          Bachelor
          <button className="ml-1 hover:text-destructive">×</button>
        </Badge>
        <Badge variant="secondary" className="gap-1">
          Bachelor
          <button className="ml-1 hover:text-destructive">×</button>
        </Badge>
        <Button variant="link" size="sm" className="text-blue-600">
          Clear All
        </Button>
      </div>

      {/* Results Count */}
      <p className="text-sm text-muted-foreground">Showing 100 results for Scholarship</p>

      {/* College Cards Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {colleges.slice(0, 2).map((college) => (
          <CollegeCard key={college.id} college={college} />
        ))}
      </div>

      <Card className="overflow-hidden">
        <div className="relative h-64 w-full">
          <Image
            src="/college-admission-banner-with-students.jpg"
            alt="College Admission Banner"
            fill
            className="object-cover"
          />
        </div>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {colleges.slice(2).map((college) => (
          <CollegeCard key={college.id} college={college} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 pt-4">
        <Button variant="outline" size="icon">
          ‹
        </Button>
        <Button size="icon" className="bg-blue-600 hover:bg-blue-700">
          1
        </Button>
        <Button variant="outline" size="icon">
          2
        </Button>
        <Button variant="outline" size="icon">
          3
        </Button>
        <Button variant="outline" size="icon">
          ›
        </Button>
      </div>
    </div>
  )
}

function CollegeCard({ college }: { college: (typeof colleges)[0] }) {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          {/* College Icon */}
          <div className="flex size-16 shrink-0 items-center justify-center rounded-lg bg-blue-100">
            <Building2 className="size-8 text-blue-600" />
          </div>

          {/* College Info */}
          <div className="flex-1">
            <h3 className="mb-2 line-clamp-1 font-semibold">{college.name}</h3>
            <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4" />
              <span>{college.location}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="flex items-center gap-1">
                <Star className="size-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">
                  {college.rating} / {college.maxRating}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="size-4 text-blue-600" />
                <span>{college.affiliation}</span>
              </div>
              <div className="flex items-center gap-1">
                <GraduationCap className="size-4 text-blue-600" />
                <span>{college.type}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="mt-3 flex items-center gap-2">
          {college.verified && (
            <Badge variant="outline" className="gap-1 border-green-600 bg-green-50 text-green-700">
              <CheckCircle2 className="size-3" />
              Verified
            </Badge>
          )}
          {college.popular && (
            <Badge variant="outline" className="border-orange-600 bg-orange-50 text-orange-700">
              Popular
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4 pb-4">
        {/* Programs */}
        <div>
          <div className="mb-3 flex items-center justify-between">
            <h4 className="text-sm font-medium text-muted-foreground">Program Offered</h4>
            <span className="text-sm font-semibold text-blue-600">{college.totalPrograms} Programs</span>
          </div>
          <div className="space-y-2">
            {college.programs.map((program, idx) => (
              <div key={idx} className="flex items-center justify-between text-sm">
                <span>{program.name}</span>
                <Badge variant="secondary" className="text-xs">
                  {program.level}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Facilities */}
        <div>
          <h4 className="mb-3 text-sm font-medium text-muted-foreground">Facilities</h4>
          <div className="flex flex-wrap gap-2">
            {college.facilities.map((facility, idx) => (
              <Badge key={idx} variant="outline" className="gap-1 border-green-600 bg-green-50 text-green-700">
                <CheckCircle2 className="size-3" />
                {facility}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between gap-3 border-t pt-4">
        <Link href={`/colleges/colleges/${college.name.replaceAll(" ", "-").toLowerCase()}`}>
          <Button variant="outline" className="flex-1 bg-transparent">
            Details
          </Button>
        </Link>
        <Button className="flex-1 bg-gray-900 hover:bg-gray-800">Apply Now →</Button>
        <Button variant="ghost" size="icon">
          <Heart className="size-5" />
        </Button>
      </CardFooter>
    </Card>
  )
}
