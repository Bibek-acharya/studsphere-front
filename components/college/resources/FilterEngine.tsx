
import React from 'react';
import { ACADEMIC_DATA, SUBJECTS_DB } from './Constant';



interface Filters {
  university: string;
  level: string;
  faculty: string;
  program: string;
  year: string;
  semester: string;
  subject: string;
}

interface FilterEngineProps {
  onFilterChange: (filters: Filters) => void;
  onReset: () => void;
}

const FilterEngine: React.FC<FilterEngineProps> = ({ onFilterChange, onReset }) => {
  const [filters, setFilters] = React.useState<Filters>({
    university: '',
    level: '',
    faculty: '',
    program: '',
    year: '',
    semester: '',
    subject: ''
  });

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.target;
    const newFilters = { ...filters, [id]: value };
    
    // Reset child filters if parent changes
    if (id === 'university') {
      newFilters.level = '';
      newFilters.faculty = '';
      newFilters.program = '';
      newFilters.year = '';
      newFilters.semester = '';
      newFilters.subject = '';
    } else if (id === 'level') {
      newFilters.faculty = '';
      newFilters.program = '';
      newFilters.year = '';
      newFilters.semester = '';
      newFilters.subject = '';
    } else if (id === 'faculty') {
      newFilters.program = '';
      newFilters.year = '';
      newFilters.semester = '';
      newFilters.subject = '';
    }

    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleReset = () => {
    const emptyFilters = {
      university: '',
      level: '',
      faculty: '',
      program: '',
      year: '',
      semester: '',
      subject: ''
    };
    setFilters(emptyFilters);
    onReset();
  };

  const universityLevels = filters.university ? Object.keys(ACADEMIC_DATA[filters.university] || {}) : [];
  const levelFaculties = (filters.university && filters.level) ? Object.keys(ACADEMIC_DATA[filters.university][filters.level] || {}) : [];
  const facultyPrograms = (filters.university && filters.level && filters.faculty) ? ACADEMIC_DATA[filters.university][filters.level][filters.faculty] : [];

  return (
    <div id="filter-section" className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
        <h3 className="font-bold text-slate-800 flex items-center gap-2">
          <div className="p-1.5 bg-primary/10 rounded-lg text-primary"><i className="ph-bold ph-funnel-simple"></i></div>
          Filter Resources
        </h3>
        <button onClick={handleReset} className="text-xs text-slate-500 hover:text-red-500 font-medium transition-colors flex items-center gap-1">
          <i className="ph ph-arrow-counter-clockwise"></i> Reset
        </button>
      </div>
      
      <div className="p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">University / Board</label>
            <select id="university" value={filters.university} onChange={handleSelectChange} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium focus:ring-2 focus:ring-primary outline-none transition-all">
              <option value="">Select Board</option>
              <option value="TU">Tribhuvan University (TU)</option>
              <option value="KU">Kathmandu University (KU)</option>
              <option value="PU">Pokhara University (PU)</option>
              <option value="NEB">NEB (Class 11/12)</option>
            </select>
          </div>

          <div className={`space-y-1.5 transition-opacity ${!filters.university && 'opacity-50 pointer-events-none'}`}>
            <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Level</label>
            <select id="level" value={filters.level} onChange={handleSelectChange} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium focus:ring-2 focus:ring-primary outline-none transition-all">
              <option value="">Select Level</option>
              {universityLevels.map(lvl => <option key={lvl} value={lvl}>{lvl}</option>)}
            </select>
          </div>

          <div className={`space-y-1.5 transition-opacity ${!filters.level && 'opacity-50 pointer-events-none'}`}>
            <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Faculty</label>
            <select id="faculty" value={filters.faculty} onChange={handleSelectChange} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium focus:ring-2 focus:ring-primary outline-none transition-all">
              <option value="">Select Faculty</option>
              {levelFaculties.map(fac => <option key={fac} value={fac}>{fac}</option>)}
            </select>
          </div>

          <div className={`space-y-1.5 transition-opacity ${!filters.faculty && 'opacity-50 pointer-events-none'}`}>
            <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Program</label>
            <select id="program" value={filters.program} onChange={handleSelectChange} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium focus:ring-2 focus:ring-primary outline-none transition-all">
              <option value="">Select Program</option>
              {facultyPrograms.map((prog: string) => <option key={prog} value={prog}>{prog}</option>)}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className={`space-y-1.5 transition-opacity ${!filters.program && 'opacity-50 pointer-events-none'}`}>
            <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Year</label>
            <select id="year" value={filters.year} onChange={handleSelectChange} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium focus:ring-2 focus:ring-primary outline-none transition-all">
              <option value="">Select Year</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </select>
          </div>
          <div className={`space-y-1.5 transition-opacity ${!filters.year && 'opacity-50 pointer-events-none'}`}>
            <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Semester</label>
            <select id="semester" value={filters.semester} onChange={handleSelectChange} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium focus:ring-2 focus:ring-primary outline-none transition-all">
              <option value="">Select Sem</option>
              <option value="1">1st Sem</option>
              <option value="2">2nd Sem</option>
            </select>
          </div>
          <div className={`space-y-1.5 transition-opacity ${!filters.semester && 'opacity-50 pointer-events-none'}`}>
            <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Subject</label>
            <select id="subject" value={filters.subject} onChange={handleSelectChange} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium focus:ring-2 focus:ring-primary outline-none transition-all">
              <option value="">Select Subject</option>
              {SUBJECTS_DB.map((sub: string) => <option key={sub} value={sub}>{sub}</option>)}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterEngine;
