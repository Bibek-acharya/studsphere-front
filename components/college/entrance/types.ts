
export interface Exam {
  id: string;
  title: string;
  university: string;
  faculty: string;
  status: 'Ongoing' | 'Closed';
  examDate: string;
  nepaliDate: string;
  imageUrl: string;
  description?: string;
  eligibility?: string;
  applicationFee?: string;
  location?: string;
}

export interface FilterCategory {
  id: string;
  name: string;
  options: string[];
  searchable?: boolean;
}
