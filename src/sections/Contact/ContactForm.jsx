import { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import SectionTitle from '../../components/SectionTitle';

const ContactForm = () => {
  const { t } = useLanguage();
  const form = t.contactPage.form;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Phase 2: hook this up to a backend / email service
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    e.target.reset();
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Sticky Title + Description */}
          <div className="md:col-span-4">
            <div className="md:sticky md:top-32">
              
              {/* Overline */}
              <div className="flex items-center space-x-3 mb-5">
                <span className="w-8 h-0.5 bg-[#D4AF37]"></span>
                <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs">
                  {form.overline}
                </span>
              </div>
              
              <SectionTitle title={form.title} />
              
              <p className="text-gray-600 leading-relaxed text-base mt-6">
                {form.subtitle}
              </p>

            </div>
          </div>

          {/* RIGHT COLUMN: Form */}
          <div className="md:col-span-8">
            <form onSubmit={handleSubmit} className="space-y-10">
              
              {/* Name + Email in 2 columns */}
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Name */}
                <div className="relative group">
                  <label 
                    htmlFor="contact-name" 
                    className="block text-[10px] tracking-[0.2em] uppercase font-bold text-[#D4AF37] mb-3"
                  >
                    {form.fields.name}
                  </label>
                  <input 
                    id="contact-name"
                    type="text" 
                    required
                    placeholder={form.fields.namePlaceholder}
                    className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-[#660033] focus:ring-0 outline-none py-3 text-gray-800 placeholder:text-gray-400 text-base transition-colors"
                  />
                  {/* Animated gold underline */}
                  <div className="absolute bottom-0 left-0 h-px bg-[#D4AF37] w-0 group-focus-within:w-full transition-all duration-500"></div>
                </div>

                {/* Email */}
                <div className="relative group">
                  <label 
                    htmlFor="contact-email" 
                    className="block text-[10px] tracking-[0.2em] uppercase font-bold text-[#D4AF37] mb-3"
                  >
                    {form.fields.email}
                  </label>
                  <input 
                    id="contact-email"
                    type="email" 
                    required
                    placeholder={form.fields.emailPlaceholder}
                    className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-[#660033] focus:ring-0 outline-none py-3 text-gray-800 placeholder:text-gray-400 text-base transition-colors"
                  />
                  <div className="absolute bottom-0 left-0 h-px bg-[#D4AF37] w-0 group-focus-within:w-full transition-all duration-500"></div>
                </div>

              </div>

              {/* Subject */}
              <div className="relative group">
                <label 
                  htmlFor="contact-subject" 
                  className="block text-[10px] tracking-[0.2em] uppercase font-bold text-[#D4AF37] mb-3"
                >
                  {form.fields.subject}
                </label>
                <input 
                  id="contact-subject"
                  type="text"
                  placeholder={form.fields.subjectPlaceholder}
                  className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-[#660033] focus:ring-0 outline-none py-3 text-gray-800 placeholder:text-gray-400 text-base transition-colors"
                />
                <div className="absolute bottom-0 left-0 h-px bg-[#D4AF37] w-0 group-focus-within:w-full transition-all duration-500"></div>
              </div>

              {/* Message */}
              <div className="relative group">
                <label 
                  htmlFor="contact-message" 
                  className="block text-[10px] tracking-[0.2em] uppercase font-bold text-[#D4AF37] mb-3"
                >
                  {form.fields.message}
                </label>
                <textarea 
                  id="contact-message"
                  rows={5}
                  required
                  placeholder={form.fields.messagePlaceholder}
                  className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-[#660033] focus:ring-0 outline-none py-3 text-gray-800 placeholder:text-gray-400 text-base transition-colors resize-none"
                />
                <div className="absolute bottom-1 left-0 h-px bg-[#D4AF37] w-0 group-focus-within:w-full transition-all duration-500"></div>
              </div>

              {/* Submit Button + Success Message */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-4">
                <button 
                  type="submit"
                  className="inline-flex items-center justify-center gap-3 bg-[#660033] text-white font-bold text-sm tracking-widest uppercase px-10 py-4 hover:bg-[#D4AF37] hover:text-[#660033] transition-colors duration-300 shadow-md"
                >
                  <span>{form.submit}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </button>

                {/* Success Message */}
                {submitted && (
                  <div className="flex items-center gap-3 text-[#660033] font-medium text-sm">
                    <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{form.success}</span>
                  </div>
                )}
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactForm;