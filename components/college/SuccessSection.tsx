"use client";

import { Search, Award, TrendingUp, BookOpen } from "lucide-react";
import { useRouter } from "next/navigation";

interface FeatureData {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  route: string;
}

export default function SuccessSection() {
  const router = useRouter();

  const features: FeatureData[] = [
    {
      id: "finder",
      title: "College Finder",
      description: "Find the perfect college that matches your preferences",
      icon: <Search className="w-7 h-7 text-white" />,
      iconBg: "bg-[#22c55e]",
      route: "/colleges/findcollege",
    },
    {
      id: "compare",
      title: "College Compare",
      description: "Compare colleges side by side to make informed decisions",
      icon: <Award className="w-7 h-7 text-white" />,
      iconBg: "bg-[#3b82f6]",
      route: "/colleges/compare",
    },
    {
      id: "scholarship",
      title: "Scholarship Finder",
      description:
        "Discover scholarships and financial aid opportunities for your education",
      icon: <TrendingUp className="w-7 h-7 text-white" />,
      iconBg: "bg-[#eab308]",
      route: "/colleges/scholarships",
    },
    {
      id: "exams",
      title: "Courses Finder",
      description: "Helps you find the right courses for your career goals",
      icon: <BookOpen className="w-7 h-7 text-white" />,
      iconBg: "bg-[#ef4444]",
      route: "/colleges/courses",
    },
  ];

  const handleExploreClick = (feature: FeatureData) => {
    router.push(feature.route);
  };

  return (
    <div className="section-container py-20 text-center">
      <span className="inline-block bg-green-100 text-green-700 font-semibold py-2 px-5 rounded-full text-sm uppercase tracking-wide mb-4">
        Explore Features
      </span>
      <h2 className="text-5xl font-extrabold mb-6 text-gray-900 tracking-tight">
        Smarter Tools, Greater Success
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
        Smart tools & insights to guide your education journey.
      </p>

      <div className="flex overflow-x-auto gap-7 pb-8 scrollbar-hide flex-wrap justify-center">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="shrink-0 w-72 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-400 hover:-translate-y-4 text-left flex flex-col justify-between border border-gray-200"
          >
            <div>
              <div
                className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-7 shadow-lg transition-transform duration-400 hover:scale-110`}
              >
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-7 grow">
                {feature.description}
              </p>
            </div>

            <button
              onClick={() => handleExploreClick(feature)}
              className={`w-full py-3 px-6 ${feature.iconBg} text-white rounded-lg font-semibold transition-all duration-400 hover:opacity-90 hover:shadow-lg hover:-translate-y-1 text-center border-0`}
            >
              Explore Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
