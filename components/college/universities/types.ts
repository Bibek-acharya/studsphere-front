
export interface University {
  id: string;
  name: string;
  location: string;
  rating: number;
  type: 'Private' | 'Public';
  rank: number;
  isPopular: boolean;
  programsCount: number;
  collegesCount: string;
  popularPrograms: string[];
  logo: string;
}

export interface College {
  id: string;
  universityId: string;
  name: string;
  rating: number;
  reviews: number;
  affiliation: string;
  type: 'Private' | 'Public';
  logo: string;
}

export interface FilterState {
  affiliation: string[];
  searchQuery: string;
}
