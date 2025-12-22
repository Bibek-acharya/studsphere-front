"use client";

import HeroSection from "@/components/college/HeroSection";
import EventShowcase from "@/components/college/event-showcase";
import SuccessSection from "@/components/college/SuccessSection";

import { TestimonialsSection } from "@/components/testimonials-section";

import CourseSection from "@/components/college/coursesection";

import CollegeCard from "@/components/college/CoursesSection";
import { ExamAnnouncements } from "@/components/college/exam-announcements";
import { LatestNews } from "@/components/college/latest-news";
import { useCollegeContext } from "@/components/college/college-context";

const Page = () => {
  const { heroSectionRef } = useCollegeContext();

  return (
    <div>
      <HeroSection ref={heroSectionRef} />

      <SuccessSection />

      <EventShowcase />
      <CourseSection />

      <CollegeCard />
      <ExamAnnouncements />
      <LatestNews />

      <TestimonialsSection />
    </div>
  );
};

export default Page;
