
export interface CollegeStats {
  rating: number;
  faculty: string;
  year: string;
}

export interface College {
  id: number;
  rank: number;
  name: string;
  location: string;
  logo: string;
  color: string;
  stats: CollegeStats;
  tags: string[];
  desc: string;
}

export type SortOption = 'RANK_DESC' | 'YEAR_DESC' | 'RATING_DESC';
export type FilterOption = 'All' | 'Science & Tech' | 'Management' | 'Medical' | 'Humanities';
