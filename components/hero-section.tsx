"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight, Zap, Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function HeroSection() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <section
      className="flex flex-col items-center justify-center px-4 py-16 md:py-24 lg:py-32 relative overflow-hidden"
      style={{
        backgroundImage: "url(/hero-background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-white/40 dark:bg-black/20"></div>

      <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
            <Zap className="h-3 w-3 text-white fill-white" />
          </div>
          <span className="text-sm font-medium text-gray-700">
            Your way to success
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
          Empowering Students to
          <br />
          Learn, Work & Grow Together
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          From education to opportunities,{" "}
          <span className="text-blue-600 font-semibold">StudSphere</span> helps
          every student
          <br className="hidden sm:block" />
          find their path, achieve goals, and grow with confidence.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto pt-4">
          <div className="relative flex items-center bg-white rounded-2xl p-2 shadow-lg focus-within:ring-2 focus-within:ring-blue-500 transition-all">
            <div className="pl-4 pr-3 text-gray-400">
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Search jobs, colleges, events..."
              className="w-full py-2.5 outline-none text-gray-700"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            />
            <button
              onClick={handleSearch}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-2.5 rounded-xl transition-colors whitespace-nowrap"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
