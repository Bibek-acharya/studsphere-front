'use client';

import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const events = [
  {
    id: 1,
    title: 'Hackathons',
    description: 'Competitive coding challenges where students build real projects.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'bg-blue-200',
  },
  {
    id: 2,
    title: 'Codecamps',
    description: 'Short, intensive training sessions on programming and development.',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'bg-pink-200',
  },
  {
    id: 3,
    title: 'Bootcamps',
    description: 'Fast-paced learning programs on tech, design, business, and skills.',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'bg-amber-200',
  },
  {
    id: 4,
    title: 'Hackathons',
    description: 'Competitive coding challenges where students build real projects.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'bg-purple-200',
  },
  {
    id: 5,
    title: 'Codecamps',
    description: 'Short, intensive training sessions on programming and development.',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'bg-teal-200',
  },
  {
    id: 6,
    title: 'Bootcamps',
    description: 'Fast-paced learning programs on tech, design, business, and skills.',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'bg-red-200',
  },
];

export function WhatWeOrganize() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">What We Organize</h2>
        <p className="text-lg text-gray-600">
          Innovation events, tech camps, workshops & skill-building programs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div key={event.id} className="group cursor-pointer">
            <div className="relative aspect-4/3 overflow-visible mb-6">
              <div 
                className="absolute inset-0 overflow-hidden"
                style={{
                  borderRadius: '24px',
                  maskImage: 'radial-gradient(circle at calc(100% - 32px) calc(100% - 32px), transparent 0, transparent 40px, black 40px)',
                  WebkitMaskImage: 'radial-gradient(circle at calc(100% - 32px) calc(100% - 32px), transparent 0, transparent 40px, black 40px)'
                }}
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className={`absolute bottom-0 right-0 w-16 h-16 ${event.color} rounded-full flex items-center justify-center shadow-lg`}
              >
                <ArrowUpRight className="w-6 h-6 text-gray-700" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
            <p className="text-gray-600 leading-relaxed">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
