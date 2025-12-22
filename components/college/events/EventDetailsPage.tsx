
import React, { useMemo } from 'react';
import { ArrowLeft, Calendar, MapPin, Building2, Share2, Bookmark, Clock, CheckCircle2 } from 'lucide-react';
import { ScholarshipStory } from './types';
import { MOCK_STORIES } from './Constant';

interface EventDetailsPageProps {
  story: ScholarshipStory;
  onBack: () => void;
  onNavigateToEvent: (id: string) => void;
}

export const EventDetailsPage: React.FC<EventDetailsPageProps> = ({ story, onBack, onNavigateToEvent }) => {
  const relatedEvents = useMemo(() => {
    return MOCK_STORIES.filter(s => s.id !== story.id && (s.category === story.category || Math.random() > 0.5)).slice(0, 3);
  }, [story.id, story.category]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Seminar & Workshop': return 'text-teal-600 bg-teal-50';
      case 'Career Fairs': return 'text-orange-600 bg-orange-50';
      case 'Competitions': return 'text-blue-600 bg-blue-50';
      default: return 'text-blue-600 bg-blue-50';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 animate-in fade-in duration-500">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to News
        </button>
        <div className="flex gap-3">
          <button className="p-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
            <Share2 className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
            <Bookmark className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content Column */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-4 ${getCategoryColor(story.category)}`}>
              {story.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-6 leading-tight">
              {story.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 mb-8 py-6 border-y border-gray-100">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-gray-100 rounded-lg">
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">DATE</p>
                  <p className="text-sm font-bold text-gray-800">{story.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-gray-100 rounded-lg">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">LOCATION</p>
                  <p className="text-sm font-bold text-gray-800">{story.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-gray-100 rounded-lg">
                  <Building2 className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">ORGANIZER</p>
                  <p className="text-sm font-bold text-gray-800">{story.academy}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden mb-10 shadow-lg">
            <img src={story.imageUrl} alt={story.title} className="w-full h-auto object-cover max-h-[500px]" />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-black mb-4">Event Overview</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {story.description}
              <br /><br />
              This workshop is designed to bridge the gap between theoretical knowledge and practical application. 
              Participants will engage in hands-on sessions led by industry experts from {story.academy}. 
              Whether you are a beginner looking to start your journey or a professional seeking to sharpen your skills, 
              this event provides the perfect environment for growth and networking.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">Key Learning Outcomes</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {['Industry Best Practices', 'Hands-on Projects', 'Networking with Experts', 'Certificate of Participation'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-blue-600 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Ready to secure your spot?</h3>
                <p className="text-blue-100">Registrations are closing soon for this event.</p>
              </div>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg whitespace-nowrap">
                Register Now
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="lg:col-span-1">
          <div className="sticky top-8 space-y-8">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-black mb-6">Upcoming Registration</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Early Bird</span>
                  <span className="font-bold text-green-600">Open</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Regular</span>
                  <span className="font-bold text-gray-400">Starts Oct 1</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 w-3/4"></div>
                </div>
                <p className="text-xs text-gray-400 italic">75% of seats are already filled!</p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-black">Related Events</h3>
              {relatedEvents.map((related) => (
                <div 
                  key={related.id}
                  onClick={() => onNavigateToEvent(related.id)}
                  className="group cursor-pointer bg-white rounded-xl border border-gray-100 p-3 hover:border-blue-200 hover:shadow-md transition-all flex gap-4"
                >
                  <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={related.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={related.title} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold text-blue-600 uppercase mb-1">{related.category}</p>
                    <h4 className="text-sm font-bold text-black mb-2 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">
                      {related.title}
                    </h4>
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
                      <Clock className="w-3 h-3" />
                      <span>{related.date}</span>
                    </div>
                  </div>
                </div>
              ))}
              <button className="w-full py-3 text-sm font-bold text-blue-600 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                View All Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
