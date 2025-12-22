
import React from 'react';
import { College } from './types';

export const COLLEGES: College[] = Array.from({ length: 8 }).map((_, i) => ({
  id: `college-${i}`,
  name: i % 2 === 0 ? "KIST College of Information Technology" : "St. Lawrence College",
  location: i % 2 === 0 ? "Kamalpokhari, Kathmandu" : "Chabahil, Kathmandu",
  rating: 4.2 + (i * 0.1),
  university: i % 3 === 0 ? "TU" : "KU",
  type: "Private",
  isVerified: true,
  isPopular: true,
  logo: `https://picsum.photos/seed/logo${i}/150/150`,
  coverImage: `https://picsum.photos/seed/cover${i}/1200/400`,
  description: "A premier institution dedicated to academic excellence and professional growth. We offer state-of-the-art facilities and a curriculum designed to meet global standards. Our faculty consists of industry experts and experienced educators committed to student success.",
  programs: [
    { name: "BE Computer Engineering", level: "Bachelor", status: 'Ongoing', deadline: '2024-10-15', fee: 'NPR 850,000' },
    { name: "BSc CSIT", level: "Bachelor", status: 'Closed', deadline: '2024-08-01', fee: 'NPR 720,000' },
    { name: "BCA", level: "Bachelor", status: 'Ongoing', deadline: '2024-11-20', fee: 'NPR 600,000' },
  ],
  facilities: ["Modern Lab", "E-Library", "Sports", "Hostel", "Transportation", "Placement Cell"],
  contactEmail: "info@college.edu.np",
  phoneNumber: "+977-1-4444444",
  website: "www.college.edu.np"
}));

export const SEARCH_ICON = (
  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export const STAR_ICON = (
  <svg className="w-4 h-4 text-blue-500 fill-current" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export const HEART_ICON = (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

export const VERIFIED_ICON = (
  <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
