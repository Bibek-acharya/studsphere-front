
import { FilterCategory, Exam } from './types';

export const FILTER_CATEGORIES: FilterCategory[] = [
  {
    id: 'academic_level',
    name: 'Academic Level / Program',
    options: ['+2 / Higher Secondary', 'Bachelor', 'Master', 'Diploma / CTEVT', 'Other']
  },
  {
    id: 'stream',
    name: 'Stream / Faculty',
    searchable: true,
    options: ['Science', 'Management', 'Medical', 'Computer Science']
  },
  {
    id: 'program',
    name: 'Program Name',
    searchable: true,
    options: ['Science', 'Management', 'Medical', 'Computer Science']
  },
  {
    id: 'college_type',
    name: 'Colleges Type',
    searchable: true,
    options: ['Government College', 'Private College', 'University-affiliated', 'Community', 'CTEVT / Gov. Training Center']
  },
  {
    id: 'university',
    name: 'University',
    searchable: true,
    options: ['TU', 'PU', 'KU']
  },
  {
    id: 'admission_status',
    name: 'Admission Status',
    options: ['Open', 'Closing soon', 'Upcoming']
  },
  {
    id: 'application_type',
    name: 'Application Type',
    options: ['Online', 'Offline']
  },
  {
    id: 'popularity',
    name: 'Popularity',
    options: ['Most Enrolled', 'Trending Programs', 'Recommended', 'New Programs']
  }
];

export const MOCK_EXAMS: Exam[] = Array(6).fill(null).map((_, i) => ({
  id: `exam-${i}`,
  title: i === 0 ? 'MBBS Entrance 2024' : i === 1 ? 'B.E. Civil Entrance' : 'BICTE Entrance Exam',
  university: i === 0 ? 'IOM, Maharajgunj' : 'Tribhuvan University',
  faculty: i === 0 ? 'Medical Sciences' : 'Faculty of Education',
  status: i % 2 === 0 ? 'Ongoing' : 'Closed',
  examDate: 'Oct 01, 2026',
  nepaliDate: 'Asoj 01, 2082',
  imageUrl: `https://picsum.photos/seed/${i + 10}/1200/800`,
  applicationFee: 'Rs. 2,500',
  location: 'Multiple Centers, Kathmandu',
  description: "The entrance examination is the gateway for students seeking admission into the prestigious BICTE program. This comprehensive test evaluates candidates on their logical reasoning, academic proficiency, and subject-specific knowledge. Tribhuvan University ensures a fair and competitive environment for all applicants. The curriculum is designed to meet international standards while addressing local educational needs.",
  eligibility: "Candidates must have completed their +2 or equivalent with a minimum of 45% or 2.0 CGPA. Students awaiting their final results can also apply on a provisional basis."
}));
