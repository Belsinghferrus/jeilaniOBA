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

const AppRoutes = () => {
    return (
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

            </Route>
        </Routes>
    );
};

export default AppRoutes;