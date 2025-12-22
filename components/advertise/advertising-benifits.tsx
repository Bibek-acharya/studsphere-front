'use client';

import { Users, Target, TrendingUp, Zap, Award, BarChart } from 'lucide-react';

const benefits = [
  {
    id: 1,
    title: 'Large Audience',
    description: 'Reach over 50,000+ active students and young professionals.',
    icon: Users,
    color: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    id: 2,
    title: 'Targeted Reach',
    description: 'Connect with tech-savvy audiences interested in innovation.',
    icon: Target,
    color: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
  },
  {
    id: 3,
    title: 'High Engagement',
    description: 'Average engagement rate of 8.5% across all campaigns.',
    icon: TrendingUp,
    color: 'bg-amber-100',
    iconColor: 'text-amber-600',
  },
  {
    id: 4,
    title: 'Fast Results',
    description: 'See measurable results within the first week of your campaign.',
    icon: Zap,
    color: 'bg-rose-100',
    iconColor: 'text-rose-600',
  },
  {
    id: 5,
    title: 'Premium Placement',
    description: 'Your brand featured in high-visibility areas and events.',
    icon: Award,
    color: 'bg-violet-100',
    iconColor: 'text-violet-600',
  },
  {
    id: 6,
    title: 'Analytics & Reports',
    description: 'Detailed performance metrics and ROI tracking included.',
    icon: BarChart,
    color: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
  },
];

export function AdvertisingBenefits() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Why Advertise With Us?</h2>
        <p className="text-lg text-gray-600">
          Connect with the next generation of innovators and decision-makers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
              <benefit.icon className={`w-8 h-8 ${benefit.iconColor}`} />
            </div>
            <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
            <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-linear-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
        <p className="text-xl opacity-90 mb-8">Join over 200+ brands who trust us to reach their target audience.</p>
        <div className="flex flex-wrap justify-center gap-8 text-center">
          <div>
            <div className="text-4xl font-bold">50K+</div>
            <div className="text-blue-100 mt-1">Active Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold">200+</div>
            <div className="text-blue-100 mt-1">Partner Brands</div>
          </div>
          <div>
            <div className="text-4xl font-bold">8.5%</div>
            <div className="text-blue-100 mt-1">Engagement Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold">95%</div>
            <div className="text-blue-100 mt-1">Satisfaction Score</div>
          </div>
        </div>
      </div>
    </div>
  );
}
