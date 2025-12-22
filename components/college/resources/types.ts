
export type ResourceType = 'all' | 'notes' | 'syllabus' | 'books' | 'solutions' | 'guides';

export interface ResourceContent {
  fileType?: string;
  chapters?: number;
  topics?: string[];
  summary?: string;
  previewUrl?: string;
  downloadUrl?: string;
  questions_solved?: number;
  sections?: string[];
  details?: string;
  board?: string;
  level?: string;
  total_semesters?: number;
  status?: string;
  preview_items?: string[];
  pages?: number;
  isbn?: string;
  publisher?: string;
  file_size?: string;
  description?: string;
  format?: string;
  focus_area?: string;
  length?: string;
  key_takeaways?: string[];
}

export interface Resource {
  id: number;
  title: string;
  type: ResourceType;
  author: string;
  date: string;
  downloads: number;
  views: number;
  rating: number;
  icon: string;
  color: string;
  bg: string;
  content: ResourceContent;
}

export interface UniversityData {
  [level: string]: {
    [faculty: string]: string[];
  };
}

export interface AcademicStructure {
  [university: string]: UniversityData;
}
