'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  MapPin,
  Star,
  GraduationCap,
  Building2,
  CheckCircle2,
  Heart,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';

type Category = 'Science' | 'Management' | 'Humanities' | 'Law';
type DegreeType = 'Bachelor' | 'Master' | 'PhD';

interface Program {
  id: number;
  name: string;
  degree_type: string;
}

interface Facility {
  id: number;
  name: string;
}

interface College {
  id: number;
  name: string;
  location: string;
  rating: number;
  university: string;
  type: string;
  is_verified: boolean;
  is_popular: boolean;
  status: string;
}

interface CollegeWithDetails extends College {
  programs: Program[];
  facilities: Facility[];
}

interface CollegeCardProps {
  college: CollegeWithDetails;
}

function CollegeCard({ college }: CollegeCardProps) {
  const { programs, facilities } = college;
  const handleInquiry = () => {
    console.log('Inquiry for:', college.name);
  };

  const handleDetails = () => {
    console.log('Details for:', college.name);
  };

  const handleFavorite = () => {
    console.log('Favorite:', college.name);
  };

  return (
    <Card className="overflow-hidden border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="p-6">
        {/* Header Section */}
        <div className="mb-4 flex items-start gap-4">
          {/* Logo */}
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-blue-600 shadow-md">
            <Building2 className="h-10 w-10 text-white" />
          </div>

          {/* College Info */}
          <div className="flex-1 min-w-0">
            <h3 className="mb-2 text-lg font-semibold text-gray-900 line-clamp-1">
              {college.name}
            </h3>

            <div className="mb-3 flex items-center gap-1 text-sm text-gray-600">
              <MapPin className="h-4 w-4 shrink-0" />
              <span className="line-clamp-1">{college.location}</span>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-sm">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium text-gray-900">
                  {college.rating} / 5.0
                </span>
              </div>
              <span className="text-gray-300">|</span>
              <div className="flex items-center gap-1 text-gray-600">
                <GraduationCap className="h-4 w-4" />
                <span>{college.university}</span>
              </div>
              <span className="text-gray-300">|</span>
              <div className="flex items-center gap-1 text-gray-600">
                <Building2 className="h-4 w-4" />
                <span>{college.type}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="mb-6 flex flex-wrap gap-2">
          {college.is_verified && (
            <Badge
              variant="outline"
              className="border-green-200 bg-green-50 text-green-700"
            >
              <CheckCircle2 className="mr-1 h-3 w-3" />
              Verified
            </Badge>
          )}
          {college.is_popular && (
            <Badge
              variant="outline"
              className="border-orange-200 bg-orange-50 text-orange-600"
            >
              Popular
            </Badge>
          )}
          {college.status === 'Ongoing' && (
            <Badge
              variant="outline"
              className="border-green-200 bg-green-50 text-green-600"
            >
              <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-green-500" />
              Ongoing
            </Badge>
          )}
        </div>

        {/* Programs Section */}
        <div className="mb-6 border-t border-gray-100 pt-6">
          <div className="mb-4 flex items-center justify-between">
            <h4 className="text-sm font-medium text-gray-500">Program Offered</h4>
            <span className="text-sm font-semibold text-blue-600">
              {programs.length} Programs
            </span>
          </div>

          <div className="space-y-2">
            {programs.slice(0, 3).map((program) => (
              <div
                key={program.id}
                className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3"
              >
                <span className="text-sm font-medium text-gray-900">
                  {program.name}
                </span>
                <span className="rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-600">
                  {program.degree_type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Facilities Section */}
        <div className="mb-6 border-t border-gray-100 pt-6">
          <h4 className="mb-4 text-sm font-medium text-gray-500">Facilities</h4>
          <div className="flex flex-wrap gap-4">
            {facilities.slice(0, 4).map((facility) => (
              <div key={facility.id} className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                <span className="text-xs text-gray-600">Verified</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 border-t border-gray-100 pt-6">
          <Button
            variant="ghost"
            onClick={handleDetails}
            className="flex-1 text-gray-700 hover:bg-gray-100"
          >
            Details
          </Button>
          <Button
            onClick={handleInquiry}
            className="group flex-1 bg-gray-900 text-white hover:bg-gray-800"
          >
            {college.status === 'Ongoing' ? 'Inquiry Now' : 'Apply Now'}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleFavorite}
            className="shrink-0 hover:bg-gray-100"
          >
            <Heart className="h-5 w-5 text-gray-600" />
          </Button>
        </div>
      </div>
    </Card>
  );
}

// Mock data
const mockColleges: CollegeWithDetails[] = [
  {
    id: 1,
    name: 'KIST College of Information Technology',
    location: 'KamalPokari, Kathmandu',
    rating: 4.2,
    university: 'TU',
    type: 'Private',
    is_verified: true,
    is_popular: true,
    status: 'Ongoing',
    programs: [
      { id: 1, name: 'BE Computer Engineering', degree_type: 'Bachelor' },
      { id: 2, name: 'BE Electronics Engineering', degree_type: 'Bachelor' },
      { id: 3, name: 'ME Computer Engineering', degree_type: 'Master' },
    ],
    facilities: [
      { id: 1, name: 'Library' },
      { id: 2, name: 'Lab' },
      { id: 3, name: 'Sports' },
      { id: 4, name: 'Hostel' },
    ],
  },
  {
    id: 2,
    name: 'Kathmandu University',
    location: 'Dhulikhel, Kavre',
    rating: 4.5,
    university: 'KU',
    type: 'Private',
    is_verified: true,
    is_popular: false,
    status: 'Ongoing',
    programs: [
      { id: 4, name: 'BCA', degree_type: 'Bachelor' },
      { id: 5, name: 'MBA', degree_type: 'Master' },
    ],
    facilities: [
      { id: 5, name: 'Library' },
      { id: 6, name: 'Lab' },
      { id: 7, name: 'Cafeteria' },
    ],
  },
  {
    id: 3,
    name: 'Pulchowk Engineering Campus',
    location: 'Pulchowk, Lalitpur',
    rating: 4.8,
    university: 'TU',
    type: 'Public',
    is_verified: true,
    is_popular: true,
    status: 'Ongoing',
    programs: [
      { id: 6, name: 'BE Civil Engineering', degree_type: 'Bachelor' },
      { id: 7, name: 'BE Mechanical Engineering', degree_type: 'Bachelor' },
      { id: 8, name: 'ME Structural Engineering', degree_type: 'Master' },
    ],
    facilities: [
      { id: 8, name: 'Library' },
      { id: 9, name: 'Lab' },
      { id: 10, name: 'Workshop' },
      { id: 11, name: 'Sports' },
    ],
  },
  
];

export function FeaturedColleges() {
  const [selectedDegree] = useState<DegreeType>('Bachelor');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const categories: Category[] = ['Science', 'Management', 'Humanities', 'Law'];

  // Filter colleges based on selected filters
  const filteredColleges = mockColleges.filter((college) => {
    const hasMatchingProgram = college.programs.some((program) => {
      const degreeMatch = program.degree_type === selectedDegree;
      // In a real app, you'd have category info in programs
      return degreeMatch;
    });
    return hasMatchingProgram;
  });

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold text-gray-900 md:text-5xl">
            Explore Featured Colleges & Universities
          </h1>
          <p className="text-lg text-gray-600">
            Your guide to the best academic opportunities in Nepal and beyond.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <Button
            variant="default"
            className="group rounded-full bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
          >
            {selectedDegree}
            <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </Button>

          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              onClick={() =>
                setSelectedCategory(selectedCategory === category ? null : category)
              }
              className={`rounded-full border-gray-300 px-6 py-2 transition-colors ${
                selectedCategory === category
                  ? 'border-blue-600 bg-blue-50 text-blue-600 hover:bg-blue-100'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* College Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredColleges.map((college) => (
            <CollegeCard
              key={college.id}
              college={college}
            />
          ))}
        </div>

        {filteredColleges.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-gray-600">No colleges found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default FeaturedColleges;
