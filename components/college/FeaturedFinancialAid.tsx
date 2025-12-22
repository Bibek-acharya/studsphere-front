'use client';

import { useState } from 'react';
import { GraduationCap, Clock, Flame, FileText, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Scholarship {
  id: string;
  name: string;
  university: string;
  type: string;
  discount_percentage: number;
  level: string;
  field: string;
  covers: string;
  location: string;
  benefits: string[];
  competition_level?: string;
  deadline?: string | null;
}

// Mock data
const mockScholarships: Scholarship[] = [
  {
    id: '1',
    name: 'Merit Scholarship',
    university: 'Tribhuvan University',
    type: 'Merit-Based',
    discount_percentage: 100,
    level: 'Bachelor',
    field: 'Engineering',
    covers: 'Full Tuition',
    location: 'Kathmandu',
    benefits: ['Tuition Fee', 'Accommodation', 'Stipend'],
    competition_level: 'High Competition',
    deadline: '2025-12-31',
  },
  {
    id: '2',
    name: 'Need-Based Aid',
    university: 'Kathmandu University',
    type: 'Need-Based',
    discount_percentage: 75,
    level: 'Bachelor',
    field: 'Science',
    covers: 'Partial Tuition',
    location: 'Dhulikhel',
    benefits: ['Tuition Fee', 'Books'],
    competition_level: 'Medium Competition',
    deadline: '2025-11-30',
  },
  {
    id: '3',
    name: 'Research Grant',
    university: 'Pokhara University',
    type: 'Research',
    discount_percentage: 50,
    level: 'Master',
    field: 'Computer Science',
    covers: 'Research Funds',
    location: 'Pokhara',
    benefits: ['Research Funds', 'Lab Access', 'Mentorship'],
    competition_level: 'Low Competition',
    deadline: '2026-01-15',
  },
];

export default function FeaturedFinancialAid() {
  const [scholarships] = useState<Scholarship[]>(mockScholarships);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  function toggleFavorite(id: string) {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  }

  function formatDate(dateString: string | null) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Featured Financial Aid
          </h2>
          <p className="text-gray-600 text-lg">
            Your guide to the best academic opportunities in Nepal and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scholarships.map((scholarship) => (
            <Card
              key={scholarship.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <Badge
                    variant="secondary"
                    className="bg-blue-50 text-blue-700 hover:bg-blue-100 font-medium px-3 py-1"
                  >
                    {scholarship.type}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-50 text-blue-700 hover:bg-blue-100 font-medium px-3 py-1"
                  >
                    {scholarship.discount_percentage}% off
                  </Badge>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-linear-to-br from-blue-600 to-blue-700 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {scholarship.name}
                    </h3>
                    <p className="text-gray-600">{scholarship.university}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                      Level
                    </p>
                    <p className="text-sm font-semibold text-gray-900">
                      {scholarship.level}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                      Field
                    </p>
                    <p className="text-sm font-semibold text-gray-900">
                      {scholarship.field}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                      Covers
                    </p>
                    <p className="text-sm font-semibold text-gray-900">
                      {scholarship.covers}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                      Location
                    </p>
                    <p className="text-sm font-semibold text-gray-900">
                      {scholarship.location}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                    Benefits
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {scholarship.benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50 px-3 py-2 rounded-lg"
                      >
                        <FileText className="w-4 h-4 text-gray-400" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-100">
                  {scholarship.competition_level && (
                    <div className="flex items-center gap-2 text-orange-600">
                      <Flame className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {scholarship.competition_level}
                      </span>
                    </div>
                  )}
                  {scholarship.deadline && (
                    <div className="flex items-center gap-2 text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">
                        {formatDate(scholarship.deadline)}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 border-gray-300 hover:bg-gray-50"
                  >
                    Details
                  </Button>
                  <Button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white">
                    Inquiry Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-gray-300 hover:bg-gray-50"
                    onClick={() => toggleFavorite(scholarship.id)}
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        favorites.has(scholarship.id)
                          ? 'fill-red-500 text-red-500'
                          : 'text-gray-600'
                      }`}
                    />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
