
export type AdmissionStatus = 'Ongoing' | 'Closed';

export interface Program {
  name: string;
  level: string;
  status: AdmissionStatus;
  deadline?: string;
  fee?: string;
}

export interface College {
  id: string;
  name: string;
  location: string;
  rating: number;
  university: string;
  type: 'Private' | 'Government' | 'Community';
  isVerified: boolean;
  isPopular: boolean;
  logo: string;
  coverImage: string;
  description: string;
  programs: Program[];
  facilities: string[];
  contactEmail: string;
  phoneNumber: string;
  website: string;
}

export interface FilterSection {
  title: string;
  options: { label: string; count?: number; value: string }[];
  type: 'checkbox' | 'radio' | 'select' | 'search';
}
