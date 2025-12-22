import {
  Heart,
  ArrowRight,
  GraduationCap,
  BookOpen,
  Clock,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
} from "react";

const courses = [
  {
    id: 1,
    title: "Bsc.CSIT (Computer science & IT)",
    colleges: 34,
    badges: ["TU AFFILIATED", "TOP CHOICE"],
    level: "Bachelors",
    field: "Engineering",
    duration: "4 Years",
    fee: "NPR 4L - 8L",
    highlights: [
      "Merit Scholarships (20 seats)",
      "Internship Included",
      "Practical / Lab-based",
    ],
    careerPath: "IT/Software, Research/Academia, Abroad Opportunities",
  },
  // Repeat for grid effect
];

// Create multiple course entries for grid display
const displayCourses = Array(6)
  .fill(courses[0])
  .map((course, index) => ({
    ...course,
    id: index + 1,
  }));

export function CourseGrid() {
  return (
    <div>
      {/* Active Filters */}
      <div className="mb-6 flex items-center gap-3">
        <span className="text-sm text-gray-600">Active :</span>
        <Badge variant="secondary" className="rounded-full">
          Bachelor
          <button className="ml-2 hover:text-destructive">×</button>
        </Badge>
        <Badge variant="secondary" className="rounded-full">
          Bachelor
          <button className="ml-2 hover:text-destructive">×</button>
        </Badge>
        <Button variant="link" className="text-blue-600 text-sm p-0 h-auto">
          Clear All
        </Button>
      </div>

      {/* Results Count */}
      <p className="text-sm text-gray-600 mb-6">
        Showing 100 results for Scholarship
      </p>

      {/* Course Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {displayCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            {/* Badges */}
            <div className="flex gap-2 mb-4">
              <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
                {course.badges[0]}
              </Badge>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                {course.badges[1]}
              </Badge>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {course.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              View {course.colleges} colleges
            </p>

            {/* Course Details Grid */}
            <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-100">
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Level</p>
                  <p className="text-sm font-medium text-gray-900">
                    {course.level}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Field</p>
                  <p className="text-sm font-medium text-gray-900">
                    {course.field}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">DURATION</p>
                  <p className="text-sm font-medium text-gray-900">
                    {course.duration}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                  <Wallet className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">EST.FEE</p>
                  <p className="text-sm font-medium text-gray-900">
                    {course.fee}
                  </p>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-gray-500 mb-2">
                SCHOLARSHIP & HIGHLIGHTS
              </p>
              <div className="space-y-2">
                {course.highlights.map(
                  (
                    highlight:
                      | string
                      | number
                      | bigint
                      | boolean
                      | ReactElement<
                          unknown,
                          string | JSXElementConstructor<unknown>
                        >
                      | Iterable<ReactNode>
                      | ReactPortal
                      | Promise<
                          | string
                          | number
                          | bigint
                          | boolean
                          | ReactPortal
                          | ReactElement<
                              unknown,
                              string | JSXElementConstructor<unknown>
                            >
                          | Iterable<ReactNode>
                          | null
                          | undefined
                        >
                      | null
                      | undefined,
                    index: Key | null | undefined
                  ) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                        <svg
                          className="w-3 h-3 text-green-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Career Path */}
            <div className="mb-4 p-3 bg-orange-50 rounded-lg">
              <div className="flex items-start gap-2">
                <span className="text-lg">🎓</span>
                <div>
                  <p className="text-xs font-semibold text-gray-700">
                    Major Career Path:
                  </p>
                  <p className="text-sm text-gray-900">{course.careerPath}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                className="flex-1 bg-transparent"
                asChild
              >
                <a href={`/colleges/courses/${course.id}`}>Details</a>
              </Button>
              <Button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white">
                Apply Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="ghost" size="icon" className="shrink-0">
                <Heart className="w-5 h-5" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2">
        <Button variant="outline" size="icon">
          {"<"}
        </Button>
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white"
          size="icon"
        >
          1
        </Button>
        <Button variant="outline" size="icon">
          2
        </Button>
        <Button variant="outline" size="icon">
          3
        </Button>
        <Button variant="outline" size="icon">
          {">"}
        </Button>
      </div>
    </div>
  );
}
