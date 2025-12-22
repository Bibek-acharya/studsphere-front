
import { AcademicStructure, Resource } from './types';

export const ACADEMIC_DATA: AcademicStructure = {
  "TU": {
    "Bachelors": {
      "Science & Tech": ["BSc.CSIT", "BSc.Physics", "BIT"],
      "Management": ["BBS", "BIM", "BBA"]
    },
    "Masters": {
      "Science & Tech": ["MSc.CSIT", "MSc.Physics"],
      "Management": ["MBA", "MBS"]
    }
  },
  "KU": {
    "Bachelors": {
      "Engineering": ["Computer Engineering", "Civil Engineering"],
      "Science": ["BSc. Environmental Science"]
    }
  },
  "PU": {
    "Bachelors": {
      "Science & Tech": ["BIT", "BCA"],
      "Management": ["BBA"]
    }
  },
  "NEB": {
    "+2": {
      "Science": ["Biology Group", "Computer Group"],
      "Management": ["Business Studies", "Hotel Management"]
    }
  }
};

export const SUBJECTS_DB = [
  "Digital Logic", "Physics I", "C Programming", "Linear Algebra", 
  "Microprocessor", "Data Structures", "Web Technology", "Economics",
  "Accountancy", "Nepali", "English", "Employee Management"
];

export const RESOURCE_DATA: Resource[] = [
  { 
    id: 1, title: "Digital Logic Chapter 1-5 Summary", type: "notes", author: "Sita Sharma", date: "2 days ago", downloads: 342, views: 1250, rating: 4.8, icon: "ph-file-text", color: "text-blue-500", bg: "bg-blue-50", 
    content: {
      fileType: "PDF", chapters: 5, topics: ["Boolean Algebra", "Logic Gates", "K-Maps", "Combinational Circuits", "Sequential Circuits"],
      summary: "Comprehensive, student-friendly notes covering the first five chapters of Digital Logic. Includes solved examples for K-Maps and circuit designs.",
      previewUrl: "https://placehold.co/400x600/2563eb/ffffff?text=PDF+Preview+Placeholder"
    } 
  },
  { 
    id: 2, title: "Physics 2079 Past Questions Solved", type: "solutions", author: "Rohan KC", date: "1 week ago", downloads: 890, views: 3420, rating: 4.9, icon: "ph-check-square", color: "text-emerald-500", bg: "bg-emerald-50", 
    content: {
      fileType: "DOCX", questions_solved: 50, sections: ["Mechanics (20)", "Electromagnetism (15)", "Optics (15)"],
      details: "Detailed step-by-step solutions for all theoretical and numerical problems from the 2079 final examination paper. Includes necessary diagrams and explanations.",
      previewUrl: "https://placehold.co/400x600/10b981/ffffff?text=DOCX+Solutions+Placeholder"
    } 
  },
  { 
    id: 3, title: "BSc. CSIT Complete Syllabus 2080", type: "syllabus", author: "Admin", date: "1 month ago", downloads: 2100, views: 8900, rating: 5.0, icon: "ph-list-bullets", color: "text-purple-500", bg: "bg-purple-50", 
    content: {
      fileType: "PDF", board: "TU", level: "BSc. CSIT", total_semesters: 8, status: "Official (Last Updated 2080 Bhadra)",
      preview_items: ["Year 1: 5 subjects", "Year 2: 5 subjects", "Includes Practical/Lab requirements", "Grading scheme overview"],
      previewUrl: "https://placehold.co/400x600/8b5cf6/ffffff?text=Syllabus+PDF+Placeholder"
    } 
  },
  { 
    id: 4, title: "Kalyani Physics Refresher (PDF)", type: "books", author: "Bibek Thapa", date: "3 days ago", downloads: 120, views: 540, rating: 4.2, icon: "ph-book-open", color: "text-amber-500", bg: "bg-amber-50", 
    content: {
      fileType: "PDF", pages: 450, isbn: "978-9937-21-345-6", publisher: "Kalyani Prakashan", file_size: "45 MB",
      description: "Full e-book copy of the popular Physics refresher guide. High quality PDF scan, optimized for digital reading.",
      previewUrl: "https://placehold.co/400x600/f59e0b/ffffff?text=Book+PDF+Preview"
    } 
  },
  { 
    id: 5, title: "C Programming Handout (Pointers)", type: "guides", author: "Priya Singh", date: "5 hours ago", downloads: 45, views: 180, rating: 4.5, icon: "ph-student", color: "text-pink-500", bg: "bg-pink-50", 
    content: {
      fileType: "JPG/PNG", format: "Mind Map & Flowchart", focus_area: "Pointers, Dynamic Memory Allocation", length: "12 pages",
      key_takeaways: ["Pointer arithmetic explained", "Difference between malloc() and calloc()", "Avoiding common segmentation faults"],
      previewUrl: "https://placehold.co/400x600/ec4899/ffffff?text=Image+Preview+Placeholder"
    } 
  },
  { 
    id: 7, title: "Employee Management System Project Report", type: "solutions", author: "Anushesh K.K Tharu", date: "1 hour ago", downloads: 1, views: 1, rating: 0.0, icon: "ph-file-doc", color: "text-red-500", bg: "bg-red-50", 
    content: {
      fileType: "DOCX", sections: ["Cover Page", "Abstract", "Methodology"],
      details: "Project report for 2nd Semester BIT students at Purbanchal University on Employee Management System.",
      previewUrl: "https://docs.google.com/gview?url=https://github.com/google/gemini-2.5-flash-preview/raw/main/sample_documents/Project%20for%203rd%20semester%20of%20Bachelor%20of%20Information%20Technology.docx&embedded=true",
      downloadUrl: "uploaded:Project for 3rd semester of Bachelor of Information Technology.docx"
    } 
  }
];
