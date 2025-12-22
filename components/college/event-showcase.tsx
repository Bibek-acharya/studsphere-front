'use client';

import { useState, useEffect } from 'react';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
  interested: number;
  trending: boolean;
}

const events: Event[] = [
  {
    id: 1,
    title: 'Learn today, lead tomorrow — your AI journey starts here!',
    date: 'Sat,15 Nov',
    location: 'Sallaghari,Bhaktpur',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200',
    interested: 100,
    trending: true,
  },
  {
    id: 2,
    title: 'Master the Future of Technology with AI & ML',
    date: 'Mon,18 Nov',
    location: 'Kathmandu,Nepal',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200',
    interested: 150,
    trending: true,
  },
  {
    id: 3,
    title: 'Build Your Career in Data Science',
    date: 'Wed,20 Nov',
    location: 'Pokhara,Nepal',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1200',
    interested: 200,
    trending: false,
  },
];

const avatars = [
  'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
  'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100',
  'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
];

export default function EventShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentEvent = events[currentIndex];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-rotate events every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="w-full min-h-screen bg-white p-8 flex items-center justify-center">
      <div className="max-w-6xl w-full rounded-3xl p-8 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96rounded-full  z-0" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-30 z-0" />

        <div className="relative z-10 grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
          {/* Left Side - Event Image */}
          <div className="relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-200 bg-linear-to-br from-blue-100 to-cyan-100 p-2">
              <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-black">
                <Image
                  src={currentEvent.image}
                  alt={currentEvent.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Side - Event Details */}
          <div className="space-y-6">
            {currentEvent.trending && (
              <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full border border-green-200">
                <TrendingUp className="w-4 h-4" />
                <span className="font-medium">Trending</span>
              </div>
            )}

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {currentEvent.title}
            </h1>

            <div className="flex items-center gap-6 text-gray-700">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">{currentEvent.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">{currentEvent.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Apply Now
              </Button>

              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {avatars.map((avatar, index) => (
                    <div
                      key={index}
                      className="relative w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-md"
                    >
                      <Image
                        src={avatar}
                        alt={`Interested user ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span className="font-semibold text-gray-900">
                  {currentEvent.interested}+ Interested
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all rounded-full ${
                index === currentIndex
                  ? 'bg-blue-600 w-12 h-3'
                  : 'bg-blue-200 w-3 h-3 hover:bg-blue-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
