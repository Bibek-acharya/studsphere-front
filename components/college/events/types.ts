
export type Category = 
  | 'All News' 
  | 'Feast & Concert' 
  | 'Seminar & Workshop' 
  | 'Career Fairs' 
  | 'Hackathons' 
  | 'Cultural Programs' 
  | 'Achievements' 
  | 'Competitions'
  | 'Others';

export interface ScholarshipStory {
  id: string;
  title: string;
  category: Category;
  date: string;
  academy: string;
  location: string;
  description: string;
  imageUrl: string;
  isFeatured?: boolean;
}

export type SortOption = 'Newest First' | 'Oldest First' | 'Popularity';
