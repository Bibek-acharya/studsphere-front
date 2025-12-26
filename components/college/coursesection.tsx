'use client';

import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface University {
  id: string;
  name: string;
  shortName: string;
}

interface Category {
  id: string;
  title: string;
  count: string;
  totalColleges: number;
  universities: University[];
}

const categories: Category[] = [
  {
    id: 'science-technology',
    title: 'Science & Technology',
    count: '2k+ colleges',
    totalColleges: 2000,
    universities: [
      { id: 'tu', name: 'Tribhuvan University', shortName: 'TU' },
      { id: 'ku', name: 'Kathmandu University', shortName: 'KU' },
      { id: 'pu', name: 'Pokhara University', shortName: 'PU' },
      { id: 'ppu', name: 'Purbanchal University', shortName: 'PPU' },
    ],
  },
  {
    id: 'engineering',
    title: 'Engineering',
    count: '2k+ colleges',
    totalColleges: 1800,
    universities: [
      { id: 'tu', name: 'Tribhuvan University', shortName: 'TU' },
      { id: 'ku', name: 'Kathmandu University', shortName: 'KU' },
      { id: 'pu', name: 'Pokhara University', shortName: 'PU' },
      { id: 'ppu', name: 'Purbanchal University', shortName: 'PPU' },
    ],
  },
  {
    id: 'management-business',
    title: 'Management & Business',
    count: '2k+ colleges',
    totalColleges: 2200,
    universities: [
      { id: 'tu', name: 'Tribhuvan University', shortName: 'TU' },
      { id: 'ku', name: 'Kathmandu University', shortName: 'KU' },
      { id: 'pu', name: 'Pokhara University', shortName: 'PU' },
      { id: 'ppu', name: 'Purbanchal University', shortName: 'PPU' },
    ],
  },
  {
    id: 'health-medical',
    title: 'Health & Medical',
    count: '2k+ colleges',
    totalColleges: 1500,
    universities: [
      { id: 'tu', name: 'Tribhuvan University', shortName: 'TU' },
      { id: 'ku', name: 'Kathmandu University', shortName: 'KU' },
      { id: 'bpkihs', name: 'B.P. Koirala Institute', shortName: 'BPKIHS' },
      { id: 'patan', name: 'Patan Academy', shortName: 'PAHS' },
    ],
  },
  {
    id: 'business',
    title: 'Business',
    count: '2k+ colleges',
    totalColleges: 1900,
    universities: [
      { id: 'tu', name: 'Tribhuvan University', shortName: 'TU' },
      { id: 'ku', name: 'Kathmandu University', shortName: 'KU' },
      { id: 'pu', name: 'Pokhara University', shortName: 'PU' },
      { id: 'ppu', name: 'Purbanchal University', shortName: 'PPU' },
    ],
  },
];

export default function CourseSection() {
  return (
    <section className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Right Course. Right College
          </h1>
          <p className="text-lg text-gray-600">
            Make better decisions with the right resources at your fingertips.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer h-50"
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 flex-1">
                  {category.title}
                </h3>
                <ChevronRight className="w-5 h-5 text-gray-400 shrink-0 mt-1" />
              </div>

              <p className="text-sm text-gray-600 mb-6">{category.count}</p>

              <div className="grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((logo) => (
                  <div
                    key={logo}
                    className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100"
                  >
                    <div className="text-center">
                      <div className="text-blue-600 font-bold text-xs">NIST</div>
                      {/* <div className="text-blue-600 text-[8px] font-medium">
                        BERHAMPUR
                      </div> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
