import HeroVideo from '../components/HeroVideo';
import SectionTitle from '../components/SectionTitle';
import { useLanguage } from '../hooks/useLanguage';
import { Link } from 'react-router-dom';
import Vision from '../sections/Home/Vision.jsx';
import Mission from '../sections/Home/Mission.jsx';
import OurStory from '../sections/Home/OurStory.jsx';
import OurFounder from '../sections/Home/OurFounder.jsx';
import PresidentMessage from '../sections/Home/PresidentMessage.jsx';
import SchoolOverview from '../sections/Home/SchoolOverview.jsx';
import ExecutiveCommittee from '../sections/Home/ExecutiveCommittee.jsx';
import CTA from '../sections/Home/CTA.jsx';



const Home = () => {
    const { t, lang } = useLanguage();

    return (
        <div className="w-full">
            {/* 1. Hero Video Section */}
            <HeroVideo />

            {/* 2. Stats Bar (HBKU Style) */}
            <section className="bg-maroon text-white py-10">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <p className="text-gold text-sm uppercase tracking-wider mb-1">{t.stats.founded}</p>
                            <p className="text-3xl font-bold">{t.stats.foundedYear}</p>
                        </div>
                        <div>
                            <p className="text-gold text-sm uppercase tracking-wider mb-1">{t.stats.status}</p>
                            <p className="text-xl md:text-2xl font-bold">{t.stats.statusValue}</p>
                        </div>
                        <div>
                            <p className="text-gold text-sm uppercase tracking-wider mb-1">{t.stats.students}</p>
                            <p className="text-3xl font-bold">{t.stats.studentsValue}</p>
                        </div>
                        <div>
                            <p className="text-gold text-sm uppercase tracking-wider mb-1">{t.stats.medium}</p>
                            <p className="text-xl md:text-2xl font-bold">{t.stats.mediumValue}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Who We Are Section (Two-Column Layout) */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">

                        {/* Image Side */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gold translate-x-4 translate-y-4 rounded-sm"></div>
                            {/* Replace with your actual image */}
                            <img
                                src="/images/school-history.jpg"
                                alt="R/Jeilani Central College"
                                className="relative z-10 w-full h-[400px] object-cover rounded-sm shadow-xl"
                            />
                        </div>

                        {/* Text Side */}
                        <div>
                            <SectionTitle title={t.whoWeAre.title} />
                            <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
                                <p>{t.whoWeAre.p1}</p>
                                <p>{t.whoWeAre.p2}</p>
                                <p>{t.whoWeAre.p3}</p>
                            </div>
                            <Link
                                to={`/${lang}/about`}
                                className="inline-block mt-8 border-b-2 border-maroon text-maroon font-semibold pb-1 hover:text-gold hover:border-gold transition-colors"
                            >
                                {t.whoWeAre.btn} &rarr;
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

            <Vision />

            <Mission />

            <OurStory />

            <OurFounder />

            <SchoolOverview />

            <PresidentMessage />

            <ExecutiveCommittee />

            <CTA />
          
        </div>
    );
};

export default Home;