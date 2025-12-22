
import { College } from './types';

export const COLLEGES: College[] = [
  {
    id: 1, rank: 1, name: "Nepal School of IT & Management", location: "Kathmandu", 
    logo: "NS", color: "bg-indigo-600",
    stats: { rating: 4.9, faculty: "1:10 Ratio", year: "2026" },
    tags: ["Top Ranked", "IT Focus", "Science & Tech"], 
    desc: "Known for its rigorous coding bootcamps and industry ties with top software firms."
  },
  {
    id: 2, rank: 2, name: "Himalayan Business College", location: "Lalitpur", 
    logo: "HB", color: "bg-emerald-600",
    stats: { rating: 4.7, faculty: "90% PhD", year: "2026" },
    tags: ["MBA Choice", "Global", "Management"],
    desc: "Offers premium management degrees with exclusive foreign exchange programs."
  },
  {
    id: 3, rank: 3, name: "Prithvi Science Campus", location: "Pokhara", 
    logo: "PS", color: "bg-blue-500",
    stats: { rating: 4.5, faculty: "150+ Profs", year: "2025" },
    tags: ["Public", "Research", "Science & Tech"],
    desc: "A government institution focusing on pure sciences, physics and research."
  },
  {
    id: 4, rank: 4, name: "Apex Humanities Center", location: "Bhaktapur", 
    logo: "AH", color: "bg-violet-600",
    stats: { rating: 4.2, faculty: "1:15 Ratio", year: "2025" },
    tags: ["Liberal Arts", "Humanities"],
    desc: "Fostering creativity and critical thinking in social sciences and arts."
  },
  {
    id: 5, rank: 5, name: "Eastern Engineering Hub", location: "Biratnagar", 
    logo: "EE", color: "bg-orange-500",
    stats: { rating: 4.0, faculty: "Industry Exp", year: "2024" },
    tags: ["Engineering", "Science & Tech"],
    desc: "Practical engineering courses with modern lab facilities and robotics club."
  },
  {
    id: 6, rank: 6, name: "Lumbini Medical Institute", location: "Bhairahawa",
    logo: "LM", color: "bg-rose-500",
    stats: { rating: 4.8, faculty: "500+ Doctors", year: "2026" },
    tags: ["Medical", "Hospital"],
    desc: "Premier medical college with a 500-bed teaching hospital and modern trauma center."
  },
  {
    id: 7, rank: 7, name: "Kathmandu Arts & Design", location: "Kathmandu",
    logo: "KA", color: "bg-pink-500",
    stats: { rating: 4.3, faculty: "Intl. Guest", year: "2025" },
    tags: ["Creative Arts", "Portfolio", "Humanities"],
    desc: "The leading institution for fine arts, fashion, and digital design in the valley."
  },
  {
    id: 8, rank: 8, name: "Butwal Institute of Technology", location: "Butwal",
    logo: "BI", color: "bg-cyan-600",
    stats: { rating: 4.1, faculty: "Practical", year: "2024" },
    tags: ["Polytechnic", "Practical", "Science & Tech"],
    desc: "Focusing on vocational and technical skills for immediate employment in industry."
  },
  {
    id: 9, rank: 9, name: "Chitwan Business School", location: "Bharatpur",
    logo: "CB", color: "bg-teal-600",
    stats: { rating: 4.4, faculty: "1:20 Ratio", year: "2025" },
    tags: ["Agri-Business", "Mgmt", "Management"],
    desc: "Specialized management courses tailored for the agricultural and tourism sectors."
  },
  {
    id: 10, rank: 10, name: "Dharan Multiple Campus", location: "Dharan",
    logo: "DM", color: "bg-slate-500",
    stats: { rating: 3.9, faculty: "Govt. Certified", year: "2024" },
    tags: ["Public", "Diverse", "Humanities", "Management", "Science & Tech"],
    desc: "A large public campus offering affordable degrees in Science, Humanities, and Education."
  }
];

export const MAX_SELECTION = 3;
