import { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import SectionTitle from '../../components/SectionTitle';
import JobApplicationDialog from './JobApplicationDialog';

// Small icon by category
const CategoryIcon = ({ category }) => {
  const common = "w-4 h-4 text-[#D4AF37] flex-shrink-0";
  if (category === 'internship') {
    return (
      <svg className={common} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    );
  }
  if (category === 'remote') {
    return (
      <svg className={common} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    );
  }
  if (category === 'trainee') {
    return (
      <svg className={common} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    );
  }
  return (
    <svg className={common} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.073a2.25 2.25 0 01-1.591 2.155l-8.25 2.5a2.25 2.25 0 01-1.318 0l-8.25-2.5A2.25 2.25 0 012.25 18.223V14.15M16.5 6.75V4.875c0-.621-.504-1.125-1.125-1.125H8.625C8.004 3.75 7.5 4.254 7.5 4.875V6.75m9 0h3.375c.621 0 1.125.504 1.125 1.125v7.5c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 15.375v-7.5c0-.621.504-1.125 1.125-1.125H7.5m9 0H7.5" />
    </svg>
  );
};

const CareersJobs = () => {
  const { t } = useLanguage();
  const jobs = t.careersPage.jobs;

  const [activeCategory, setActiveCategory] = useState('all');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');

  const filteredJobs = activeCategory === 'all'
    ? jobs.items
    : jobs.items.filter(job => job.category === activeCategory);

  const openApply = (jobTitle) => {
    setSelectedJob(jobTitle);
    setIsDialogOpen(true);
  };

  const getCategoryLabel = (value) => {
    const cat = jobs.categories.find(c => c.value === value);
    return cat ? cat.label : value;
  };

  return (
    <section className="py-24 bg-offwhite">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center space-x-3 mb-5">
            <span className="w-8 h-0.5 bg-[#D4AF37]"></span>
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs">
              {jobs.overline}
            </span>
          </div>
          <SectionTitle title={jobs.title} subtitle={jobs.subtitle} />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-300 pb-6">
          {/* All */}
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2.5 text-sm font-bold tracking-wider uppercase transition-all duration-200 border ${
              activeCategory === 'all'
                ? 'bg-[#660033] border-[#660033] text-white'
                : 'bg-white border-gray-300 text-gray-700 hover:border-[#660033] hover:text-[#660033]'
            }`}
          >
            {jobs.allLabel}
          </button>
          {/* Category Buttons */}
          {jobs.categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2.5 text-sm font-bold tracking-wider uppercase transition-all duration-200 border ${
                activeCategory === cat.value
                  ? 'bg-[#660033] border-[#660033] text-white'
                  : 'bg-white border-gray-300 text-gray-700 hover:border-[#660033] hover:text-[#660033]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Empty State */}
        {filteredJobs.length === 0 ? (
          <div className="py-20 text-center bg-white border border-gray-200">
            <p className="text-gray-500 text-base">{jobs.emptyLabel}</p>
          </div>
        ) : (
          /* Job Cards Grid */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {filteredJobs.map((job, index) => (
              <div
                key={index}
                className="group flex flex-col bg-white p-8 border-t-2 border-[#660033] hover:border-[#D4AF37] transition-colors duration-300 shadow-sm hover:shadow-md"
              >
                
                {/* Category Badge */}
                <div className="flex items-center gap-2 mb-5">
                  <CategoryIcon category={job.category} />
                  <span className="text-[10px] tracking-[0.15em] uppercase font-bold text-[#D4AF37]">
                    {getCategoryLabel(job.category)}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-[#660033] mb-3 leading-tight">
                  {job.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm mb-6 flex-1">
                  {job.desc}
                </p>

                {/* Meta */}
                <div className="space-y-2 border-t border-gray-200 pt-5 mb-6">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <svg className="w-4 h-4 text-[#D4AF37] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span className="font-medium">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <svg className="w-4 h-4 text-[#D4AF37] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">{job.duration}</span>
                  </div>
                </div>

                {/* Apply Button */}
                <button
                  onClick={() => openApply(job.title)}
                  className="inline-flex items-center space-x-2 text-[#660033] font-bold text-xs tracking-widest uppercase border-b-2 border-[#D4AF37] pb-1 self-start hover:text-[#D4AF37] transition-colors duration-300"
                >
                  <span>{jobs.applyBtn}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Application Dialog */}
      <JobApplicationDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        jobTitle={selectedJob}
      />
    </section>
  );
};

export default CareersJobs;