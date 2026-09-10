import { useLanguage } from '../../hooks/useLanguage';
import SectionTitle from '../../components/SectionTitle';
import { Link } from 'react-router-dom';

const ExecutiveCommittee = () => {
    const { t, lang } = useLanguage();

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">

                <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">

                    {/* LEFT COLUMN: Header & Description */}
                    <div className="md:col-span-5">
                        <SectionTitle title={t.executive.title} />
                        <p className="text-gray-600 leading-relaxed text-lg mt-6">
                            {t.executive.desc}
                        </p>
                    </div>

                    {/* RIGHT COLUMN: Button (Aligned to the right on desktop) */}
                    <div className="md:col-span-7 flex md:justify-end items-start pt-2">
                        <Link
                            to={`/${lang}/committee`}
                            className="inline-flex items-center space-x-2 bg-maroon text-white font-semibold px-8 py-4 rounded-sm hover:bg-maroon-light transition-colors duration-300 shadow-md"
                        >
                            <span>{t.executive.btn}</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>

                </div>

                {/* Committee Members Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {t.executive.members.map((member, index) => (
                        <div key={index} className="group flex flex-col items-center text-center">

                            {/* Portrait Placeholder */}
                            <div className="w-full aspect-square bg-gray-100 rounded-sm mb-6 overflow-hidden relative border border-gray-200 group-hover:border-gold transition-colors duration-300">
                                <div className="absolute inset-0 bg-gradient-to-br from-maroon/5 to-transparent"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg className="w-16 h-16 text-gray-300 group-hover:text-gold transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Member Details */}
                            <h4 className="text-lg font-bold text-maroon mb-1 group-hover:text-gold transition-colors duration-300">
                                {member.name}
                            </h4>
                            <div className="w-8 h-0.5 bg-gold mb-2"></div>
                            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                                {member.role}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Message from the Committee Block */}
                {/* Message from the Committee Block */}
                <div className="mt-24 pt-16 border-t border-gray-200">
                    <div className="grid md:grid-cols-12 gap-12 lg:gap-16">

                        {/* Left Column: Title */}
                        <div className="md:col-span-4">
                            <div className="flex items-center space-x-3 mb-4">
                                <span className="w-8 h-0.5 bg-gold"></span>
                                <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs">
                                    From the Committee
                                </span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-maroon leading-tight">
                                {t.committeeMessage.title}
                            </h3>
                        </div>

                        {/* Right Column: Message */}
                        <div className="md:col-span-8 md:pl-12 md:border-l md:border-gray-200">
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                                {t.committeeMessage.p1}
                            </p>
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                                {t.committeeMessage.p2}
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default ExecutiveCommittee;