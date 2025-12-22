'use client';

import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const services = [
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
    color: 'bg-orange-200',
  },
  {
    id: 4,
    title: 'Hackathons',
    description: 'Competitive coding challenges where students build real projects.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'bg-purple-300',
  },
  {
    id: 5,
    title: 'Codecamps',
    description: 'Short, intensive training sessions on programming and development.',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'bg-emerald-200',
  },
  {
    id: 6,
    title: 'Bootcamps',
    description: 'Fast-paced learning programs on tech, design, business, and skills.',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'bg-rose-300',
  },
];

export function OurServices() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our Services
          </h1>
          <div className="text-sm text-gray-600">
            Home/<span className="text-blue-600">Contact Us</span>``
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            Services we provide for :
          </h2>
          <Select defaultValue="students">
            <SelectTrigger className="w-[200px] h-12 text-lg">
              <SelectValue placeholder="Select audience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="students">Students</SelectItem>
              <SelectItem value="professionals">Professionals</SelectItem>
              <SelectItem value="businesses">Businesses</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service) => (
            <div key={service.id} className="group cursor-pointer">
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
                    src={service.image}
                    alt={service.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className={`absolute bottom-0 right-0 w-16 h-16 ${service.color} rounded-full flex items-center justify-center shadow-lg`}
                >
                  <ArrowUpRight className="w-6 h-6 text-gray-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurServices;
