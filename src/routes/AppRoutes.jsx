import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import School from '../pages/School';
import Committee from '../pages/Committee';
import Projects from '../pages/Projects';
import Membership from '../pages/Membership';
import Contact from '../pages/Contact';
import Event from '../pages/Event';
import NewsLetter from '../pages/NewsLetter';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';
import Refund from '../pages/Refund';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from '../components/ScrollToTop';
import Feedback from '../pages/Feedback';
import Careers from '../pages/Careers';


const AppRoutes = () => {
    return (


        <>

            <ScrollToTop />
           
            <Routes>
                {/* Redirect root to English */}
                <Route path="/" element={<Navigate to="/en" replace />} />

                {/* Dynamic Language Route */}
                <Route path="/:lang" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="school" element={<School />} />
                    <Route path="committee" element={<Committee />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="membership" element={<Membership />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="events" element={<Event />} />
                    <Route path="news" element={<NewsLetter />} />
                    <Route path="privacy" element={<Privacy />} />
                    <Route path="terms" element={<Terms />} />
                    <Route path="refund" element={<Refund />} />
                    <Route path="feedback" element={<Feedback />} />
                    <Route path="careers" element={<Careers />} />

                </Route>
            </Routes>

        </>


    );
};

export default AppRoutes;