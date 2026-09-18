import { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import SectionTitle from '../../components/SectionTitle';

const FeedbackForm = () => {
  const { t } = useLanguage();
  const f = t.feedback.form;

  const [category, setCategory] = useState('request');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Phase 2: wire to backend / email service
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
    setCategory('request');
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Sticky Title + Description */}
          <div className="md:col-span-4">
            <div className="md:sticky md:top-32">
              
              <div className="flex items-center space-x-3 mb-5">
                <span className="w-8 h-0.5 bg-[#D4AF37]"></span>
                <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs">
                  {f.overline}
                </span>
              </div>
              
              <SectionTitle title={f.title} />
              
              <p className="text-gray-600 leading-relaxed text-base mt-6">
                {f.subtitle}
              </p>

            </div>
          </div>

          {/* RIGHT COLUMN: Form */}
          <div className="md:col-span-8">
            {submitted ? (
              // Success State
              <div className="flex flex-col items-center justify-center py-20 text-center bg-offwhite border-l-2 border-[#D4AF37]">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-[#660033] max-w-sm px-6">
                  {f.success}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                
                {/* Category Selector */}
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase font-bold text-[#D4AF37] mb-4">
                    {f.categoryLabel}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {f.categories.map((cat) => (
                      <button
                        key={cat.value}
                        type="button"
                        onClick={() => setCategory(cat.value)}
                        className={`px-5 py-2.5 text-sm font-semibold border transition-all duration-200 ${
                          category === cat.value
                            ? 'bg-[#660033] border-[#660033] text-white'
                            : 'bg-white border-gray-300 text-gray-700 hover:border-[#660033] hover:text-[#660033]'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <label htmlFor="fb-name" className="block text-[10px] tracking-[0.2em] uppercase font-bold text-[#D4AF37] mb-3">
                      {f.nameLabel}
                    </label>
                    <input
                      id="fb-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={f.namePlaceholder}
                      className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-[#660033] focus:ring-0 outline-none py-3 text-gray-800 placeholder:text-gray-400 text-base transition-colors"
                    />
                    <div className="absolute bottom-0 left-0 h-px bg-[#D4AF37] w-0 group-focus-within:w-full transition-all duration-500"></div>
                  </div>

                  <div className="relative group">
                    <label htmlFor="fb-email" className="block text-[10px] tracking-[0.2em] uppercase font-bold text-[#D4AF37] mb-3">
                      {f.emailLabel}
                    </label>
                    <input
                      id="fb-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={f.emailPlaceholder}
                      className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-[#660033] focus:ring-0 outline-none py-3 text-gray-800 placeholder:text-gray-400 text-base transition-colors"
                    />
                    <div className="absolute bottom-0 left-0 h-px bg-[#D4AF37] w-0 group-focus-within:w-full transition-all duration-500"></div>
                  </div>
                </div>

                {/* Phone (Optional) */}
                <div className="relative group">
                  <label htmlFor="fb-phone" className="flex items-baseline space-x-2 mb-3">
                    <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#D4AF37]">
                      {f.phoneLabel}
                    </span>
                    <span className="text-[10px] tracking-wider uppercase text-gray-400 font-medium">
                      ({f.optional})
                    </span>
                  </label>
                  <input
                    id="fb-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={f.phonePlaceholder}
                    className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-[#660033] focus:ring-0 outline-none py-3 text-gray-800 placeholder:text-gray-400 text-base transition-colors"
                  />
                  <div className="absolute bottom-0 left-0 h-px bg-[#D4AF37] w-0 group-focus-within:w-full transition-all duration-500"></div>
                </div>

                {/* Message */}
                <div className="relative group">
                  <label htmlFor="fb-message" className="block text-[10px] tracking-[0.2em] uppercase font-bold text-[#D4AF37] mb-3">
                    {f.messageLabel}
                  </label>
                  <textarea
                    id="fb-message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={f.messagePlaceholder}
                    className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-[#660033] focus:ring-0 outline-none py-3 text-gray-800 placeholder:text-gray-400 text-base transition-colors resize-none"
                  />
                  <div className="absolute bottom-1 left-0 h-px bg-[#D4AF37] w-0 group-focus-within:w-full transition-all duration-500"></div>
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#660033] text-white font-bold text-sm tracking-widest uppercase px-10 py-4 hover:bg-[#D4AF37] hover:text-[#660033] transition-colors duration-300 shadow-md"
                  >
                    <span>{f.submit}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default FeedbackForm;