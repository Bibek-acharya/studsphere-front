import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FoundersInitiatives() {
  const founders = [
    {
      name: 'Jagdish Dhami',
      title: 'founder',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Santosh Bohara',
      title: 'co-founder',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Badal Gupta',
      title: 'co-founder',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const initiatives = [
    {
      title: 'Our Vision',
      description:
        'StudSphere is a youth-driven platform empowering students across Nepal',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
      badgeColor: 'bg-blue-200',
    },
    {
      title: 'Our Vision',
      description:
        'StudSphere is a youth-driven platform empowering students across Nepal',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200',
      badgeColor: 'bg-pink-200',
    },
    {
      title: 'Our Vision',
      description:
        'StudSphere is a youth-driven platform empowering students across Nepal',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200',
      badgeColor: 'bg-amber-200',
    },
  ];

  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden aspect-3/4 group"
              >
                <Image
                  src={founder.image}
                  alt={founder.name}
                  width={400}
                  height={533}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-1">{founder.name}</h3>
                  <p className="text-gray-200 text-sm">{founder.title}</p>
                </div>
              </div>
            ))}
          </div>  

          <div className="lg:pl-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Our Founder And Co-Founders
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              AI and learning: A new chapter for the students and educators
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base rounded-lg transition-all duration-200 hover:shadow-lg"
            >
              Get Connected
            </Button>
          </div>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Our Initiatives
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="group cursor-pointer"
              >
                <div className="relative aspect-4/3 overflow-visible rounded-3xl mb-6">
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <Image
                      src={initiative.image}
                      alt={initiative.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{
                        maskImage: 'radial-gradient(circle at calc(100% - 32px) calc(100% - 32px), transparent 0, transparent 40px, black 40px)',
                        WebkitMaskImage: 'radial-gradient(circle at calc(100% - 32px) calc(100% - 32px), transparent 0, transparent 40px, black 40px)'
                      }}
                    />
                  </div>
                  <div
                    className={`absolute bottom-0 right-0 w-16 h-16 ${initiative.badgeColor} rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg`}
                  >
                    <ArrowUpRight className="w-6 h-6 text-gray-700" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{initiative.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {initiative.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
