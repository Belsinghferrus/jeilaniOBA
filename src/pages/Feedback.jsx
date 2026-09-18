import FeedbackForm from "../sections/Feedback/FeedbackForm";
import FeedbackHero from "../sections/Feedback/FeedbackHero";


const Feedback = () => {
  return (
    <div className="w-full">
      <FeedbackHero />
      <FeedbackForm />
    </div>
  );
};

export default Feedback;