import { useLanguage } from '../../hooks/useLanguage';

const TermsContent = () => {
  const { t } = useLanguage();
  const sections = t.termsPage.sections;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Sticky TOC */}
          <aside className="md:col-span-4 lg:col-span-3">
            <div className="md:sticky md:top-32">
              
              <div className="flex items-center space-x-3 mb-6">
                <span className="w-8 h-0.5 bg-[#D4AF37]"></span>
                <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs">
                  {t.termsPage.toc.title}
                </span>
              </div>

              <nav className="border-l border-gray-200 pl-6 max-h-[70vh] overflow-y-auto">
                <ul className="space-y-3">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => scrollTo(section.id)}
                        className="text-left text-sm text-gray-600 hover:text-[#660033] transition-colors leading-snug"
                      >
                        <span className="text-[#D4AF37] font-bold mr-2 text-xs">
                          {section.number.padStart(2, '0')}
                        </span>
                        {section.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

            </div>
          </aside>

          {/* RIGHT: Content */}
          <div className="md:col-span-8 lg:col-span-9">
            <div className="space-y-16">
              {sections.map((section) => (
                <article 
                  key={section.id} 
                  id={section.id} 
                  className="scroll-mt-32"
                >
                  
                  {/* Section Header */}
                  <div className="mb-6 pb-4 border-b border-gray-200">
                    <div className="flex items-baseline gap-4">
                      <span className="text-2xl md:text-3xl font-bold text-[#D4AF37] leading-none">
                        {section.number.padStart(2, '0')}
                      </span>
                      <h2 className="text-xl md:text-2xl font-bold text-[#660033] leading-tight">
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  {/* Section Blocks */}
                  <div className="space-y-5">
                    {section.blocks.map((block, bIndex) => {
                      if (block.type === 'p') {
                        return (
                          <p 
                            key={bIndex} 
                            className="text-gray-700 leading-relaxed text-base"
                          >
                            {block.text}
                          </p>
                        );
                      }
                      if (block.type === 'ul') {
                        return (
                          <ul key={bIndex} className="space-y-3 pl-2">
                            {block.items.map((item, iIndex) => (
                              <li 
                                key={iIndex} 
                                className="flex items-start gap-3 text-gray-700 leading-relaxed text-base"
                              >
                                <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2.5"></span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      if (block.type === 'contact') {
                        return (
                          <div 
                            key={bIndex} 
                            className="bg-offwhite border-l-2 border-[#D4AF37] p-6 md:p-8 space-y-3"
                          >
                            {block.items.map((item, cIndex) => (
                              <div key={cIndex} className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4">
                                <span className="text-xs tracking-[0.15em] uppercase font-bold text-[#D4AF37] md:min-w-[100px]">
                                  {item.label}
                                </span>
                                {item.value && (
                                  <span className="text-gray-700 text-base">
                                    {item.value}
                                  </span>
                                )}
                              </div>
                            ))}
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>

                </article>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TermsContent;