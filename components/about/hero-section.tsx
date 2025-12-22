'use client';

import Image from 'next/image';

export function HeroSection() {
  const images = [
    {
      url: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Large conference with audience',
      width: 'wide',
    },
    {
      url: 'https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Presentation on screen',
      width: 'normal',
    },
    {
      url: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Panel discussion',
      width: 'normal',
    },
    {
      url: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Conference venue with screen',
      width: 'normal',
    },
    {
      url: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Industrial venue presentation',
      width: 'normal',
    },
    {
      url: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Casual meetup presentation',
      width: 'normal',
    },
    {
      url: 'https://images.pexels.com/photos/3184420/pexels-photo-3184420.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Team gathering',
      width: 'normal',
    },
    {
      url: 'https://images.pexels.com/photos/3184424/pexels-photo-3184424.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Modern conference hall',
      width: 'wide',
    },
  ];

  return (
    <section className="w-full bg-linear-to-b from-neutral-50 to-white dark:from-neutral-950 dark:to-neutral-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-4">
          <div className="flex gap-4">
            {images.slice(0, 4).map((image, index) => {
              const isWide = index === 0;
              const widthClass = isWide ? 'flex-[1.5]' : 'flex-1';

              return (
                <div
                  key={index}
                  className={`${widthClass} relative overflow-hidden rounded-md shadow-lg hover:shadow-2xl transition-shadow duration-300 group h-60`}
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              );
            })}
          </div>

          <div className="flex gap-4">
            {images.slice(4, 8).map((image, index) => {
              const isWide = index === 3;
              const widthClass = isWide ? 'flex-[1.5]' : 'flex-1';

              return (
                <div
                  key={index + 4}
                  className={`${widthClass} relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group h-60`}
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
