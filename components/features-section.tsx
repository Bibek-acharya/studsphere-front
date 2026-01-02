import { FeatureCard } from "./feature-card";

const features = [
  {
    title: "For University & Schools",
    subtitle: "Connecting Students, Colleges",
    description: "& Opportunities.",
    imageSrc: "/uni-card.png",
    imageAlt: "University & Schools",
    buttons: [
      "College Finder",
      "Course Finder",
      "College Ranking",
      "Scholarship Finder",
      "University Reviews",
    ],
    gradient: "bg-linear-to-br from-emerald-400 to-emerald-500",
    link: "/colleges",
  },
  {
    title: "For Jobs & Internships",
    subtitle: "Find Your Dream Job",
    description: "& Internship.",
    imageSrc: "/jobs-card.png",
    imageAlt: "Jobs & Internships",
    buttons: [
      "Job Finder",
      "Internships",
      "Career Guide",
      "Resume Builder",
      "Interview Prep",
    ],
    gradient: "bg-linear-to-br from-orange-400 to-orange-500",
    link: "/jobs",
  },
  {
    title: "For the Scholarships",
    subtitle: "Unlock Your Potential",
    description: "& Activities.",
    imageSrc: "/events-card.png",
    imageAlt: "Events & Activities",
    buttons: [
      "Scholarship Finder",
      "Merit Based Scholarships",
      "College Scholarships",
      "Competitions",
      "Networking",
    ],
    gradient: "bg-linear-to-br from-blue-400 to-blue-500",
    link: "/events",
  },
];

export function FeaturesSection() {
  return (
    <section
      className="px-4 py-12 md:py-16"
      style={{
        backgroundImage: "url(/hero-background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
