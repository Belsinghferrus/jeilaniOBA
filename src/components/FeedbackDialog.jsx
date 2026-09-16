import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';

const FeedbackDialog = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const f = t.feedback;

  const [category, setCategory] = useState('request');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Lock body scroll + ESC to close
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const onEsc = (e) => { if (e.key === 'Escape') onClose(); };
      window.addEventListener('keydown', onEsc);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', onEsc);
      };
    }
  }, [isOpen, onClose]);

  // Reset form when dialog opens
  useEffect(() => {
    if (isOpen) {
      setCategory('request');
      setName('');
      setEmail('');
      setMessage('');
      setSubmitted(false);
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Phase 2: wire to backend / email service
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto shadow-2xl"
            >
              
              {/* Top Accent Bar */}
              <div className="h-1 bg-[#660033] w-full"></div>

              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label={f.close}
                className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center text-gray-400 hover:text-[#660033] transition-colors z-10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Content */}
              <div className="p-8 md:p-12">
                
                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="w-8 h-0.5 bg-[#D4AF37]"></span>
                    <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-[10px]">
                      Feedback
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#660033] mb-3 leading-tight">
                    {f.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {f.subtitle}
                  </p>
                </div>

                {/* Success State */}
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mb-6">
                      <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <p className="text-lg font-semibold text-[#660033] max-w-sm">
                      {f.success}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Category Selector */}
                    <div>
                      <label className="block text-[10px] tracking-[0.2em] uppercase font-bold text-[#D4AF37] mb-3">
                        {f.categoryLabel}
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {f.categories.map((cat) => (
                          <button
                            key={cat.value}
                            type="button"
                            onClick={() => setCategory(cat.value)}
                            className={`px-4 py-2 text-sm font-semibold border transition-all duration-200 ${
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
                    <div className="grid md:grid-cols-2 gap-6">
                      
                      {/* Name */}
                      <div className="relative group">
                        <label htmlFor="fb-name" className="block text-[10px] tracking-[0.2em] uppercase font-bold text-[#D4AF37] mb-2">
                          {f.nameLabel}
                        </label>
                        <input
                          id="fb-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder={f.namePlaceholder}
                          className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-[#660033] focus:ring-0 outline-none py-2 text-gray-800 placeholder:text-gray-400 text-base transition-colors"
                        />
                        <div className="absolute bottom-0 left-0 h-px bg-[#D4AF37] w-0 group-focus-within:w-full transition-all duration-500"></div>
                      </div>

                      {/* Email */}
                      <div className="relative group">
                        <label htmlFor="fb-email" className="block text-[10px] tracking-[0.2em] uppercase font-bold text-[#D4AF37] mb-2">
                          {f.emailLabel}
                        </label>
                        <input
                          id="fb-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={f.emailPlaceholder}
                          className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-[#660033] focus:ring-0 outline-none py-2 text-gray-800 placeholder:text-gray-400 text-base transition-colors"
                        />
                        <div className="absolute bottom-0 left-0 h-px bg-[#D4AF37] w-0 group-focus-within:w-full transition-all duration-500"></div>
                      </div>

                    </div>

                    {/* Message */}
                    <div className="relative group">
                      <label htmlFor="fb-message" className="block text-[10px] tracking-[0.2em] uppercase font-bold text-[#D4AF37] mb-2">
                        {f.messageLabel}
                      </label>
                      <textarea
                        id="fb-message"
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={f.messagePlaceholder}
                        className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-[#660033] focus:ring-0 outline-none py-2 text-gray-800 placeholder:text-gray-400 text-base transition-colors resize-none"
                      />
                      <div className="absolute bottom-1 left-0 h-px bg-[#D4AF37] w-0 group-focus-within:w-full transition-all duration-500"></div>
                    </div>

                    {/* Submit */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#660033] text-white font-bold text-sm tracking-widest uppercase px-10 py-4 hover:bg-[#D4AF37] hover:text-[#660033] transition-colors duration-300"
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
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FeedbackDialog;