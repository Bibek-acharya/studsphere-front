"use client"

import { Search, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section className="relative py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/background.png)" }}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border-2 border-blue-600 bg-white px-6 py-2.5">
            <div className="flex size-6 items-center justify-center rounded-full bg-blue-600">
              <Zap className="size-4 fill-white text-white" />
            </div>
            <span className="text-sm font-medium text-gray-900">Your way to success</span>
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-900 text-balance md:text-6xl">
            Unlock Your Future
            <br />
            Chosing the college in Nepal
          </h1>

          {/* Description */}
          <p className="mb-10 text-lg text-gray-800 text-pretty md:text-xl">
            Stop searching blindly. Update your profile and let our algorithm match you
            <br />
            with the opportunities you deserve.
          </p>

          {/* Search Bar */}
          <div className="mx-auto mb-8 flex max-w-3xl items-center gap-3 rounded-2xl bg-white p-3 shadow-lg">
            <Search className="ml-2 size-6 text-gray-400" />
            <Input
              type="text"
              placeholder="Search scholarship name,college or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 border-0 text-base focus-visible:ring-0"
            />
            <Button size="lg" className="rounded-xl bg-blue-600 px-8 hover:bg-blue-700">
              Search
            </Button>
          </div>

          {/* Recent Visits */}
          <div className="flex items-center justify-center gap-4 text-sm text-white">
            <span className="font-medium">Your recent visit :</span>
            <button className="rounded-lg px-3 py-1.5 transition-colors hover:bg-white/20">BIT Colleges</button>
            <button className="rounded-lg px-3 py-1.5 transition-colors hover:bg-white/20">college Predictor</button>
            <button className="rounded-lg px-3 py-1.5 transition-colors hover:bg-white/20">Scholarship</button>
          </div>
        </div>
      </div>
    </section>
  )
}
