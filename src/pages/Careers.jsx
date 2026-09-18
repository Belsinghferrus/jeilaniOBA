import CareersCTA from "../sections/Career/CareersCTA";
import CareersHero from "../sections/Career/CareersHero";
import CareersJobs from "../sections/Career/CareersJobs";


const Careers = () => {
    return (
        <div className="w-full">
            <CareersHero />
            <CareersJobs />
            <CareersCTA />
        </div>
    );
};

export default Careers;