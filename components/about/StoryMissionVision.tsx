'use client';

import Image from 'next/image';

export default function StoryMissionVision() {
  return (
    <section className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          Our Story, Mission & Vision
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="relative h-[500px] rounded-2xl overflow-hidden group">
            <Image
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-blue-600/90 via-blue-600/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-4xl font-bold mb-4">Our Story</h3>
              <p className="text-lg leading-relaxed">
                StudSphere is a youth-driven platform dedicated to empowering students across Nepal
                by providing them with the right guidance, opportunities, and pathways to shape their
                future. We recognize that young people often struggle
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-blue-200 rounded-2xl p-8 h-60 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-lg text-gray-900 leading-relaxed">
                StudSphere is a youth-driven platform dedicated to empowering students across Nepal
              </p>
            </div>

            <div className="bg-blue-600 rounded-2xl p-8 h-60 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-4 text-white">Our Vision</h3>
              <p className="text-lg text-white leading-relaxed">
                StudSphere is a youth-driven platform dedicated to empowering students across Nepal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
