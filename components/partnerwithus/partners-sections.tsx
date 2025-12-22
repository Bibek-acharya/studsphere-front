'use client';

import { GraduationCap } from 'lucide-react';

const partners = [
  { id: 1, name: 'Studsphere' },
  { id: 2, name: 'Studsphere' },
  { id: 3, name: 'Studsphere' },
  { id: 4, name: 'Studsphere' },
  { id: 5, name: 'Studsphere' },
  { id: 6, name: 'Studsphere' },
  { id: 7, name: 'Studsphere' },
  { id: 8, name: 'Studsphere' },
  { id: 9, name: 'Studsphere' },
  { id: 10, name: 'Studsphere' },
  { id: 11, name: 'Studsphere' },
  { id: 12, name: 'Studsphere' },
  { id: 13, name: 'Studsphere' },
  { id: 14, name: 'Studsphere' },
  { id: 15, name: 'Studsphere' },
  { id: 16, name: 'Studsphere' },
  { id: 17, name: 'Studsphere' },
  { id: 18, name: 'Studsphere' },
  { id: 19, name: 'Studsphere' },
];

export default function PartnersSection() {
  return (
    <section className="w-full py-16 px-4 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Valuable Partners
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            AI and learning: A new chapter for the students and educators worldwide
          </p>
        </div>

        <div className="space-y-6">
          <style>{`
            @keyframes scroll-right {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(100vw);
              }
            }

            @keyframes scroll-right-reverse {
              0% {
                transform: translateX(100vw);
              }
              100% {
                transform: translateX(-100%);
              }
            }

            .partners-scroll {
              animation: scroll-right 60s linear infinite;
            }

            .partners-scroll-reverse {
              animation: scroll-right-reverse 60s linear infinite;
            }
          `}</style>
          <div className="overflow-hidden py-4">
            <div className="partners-scroll flex gap-4 w-max">
              {[...partners.slice(0, 10), ...partners.slice(0, 10)].map((partner, index) => (
                <div
                  key={index}
                  className="group relative bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all duration-300 flex items-center justify-center min-h-20 min-w-[180px] shrink-0"
                >
                  <div className="flex flex-col items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                    <GraduationCap className="w-8 h-8 text-blue-600" />
                    <span className="text-sm font-semibold text-blue-600">
                      {partner.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden py-4">
            <div className="partners-scroll-reverse flex gap-4 w-max">
              {[...partners.slice(10), ...partners.slice(10)].map((partner, index) => (
                <div
                  key={index}
                  className="group relative bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all duration-300 flex items-center justify-center min-h-20 min-w-[180px] shrink-0"
                >
                  <div className="flex flex-col items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                    <GraduationCap className="w-8 h-8 text-blue-600" />
                    <span className="text-sm font-semibold text-blue-600">
                      {partner.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Trusted by leading educational institutions worldwide
          </p>
        </div>
      </div>
    </section>
  );
}
