import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TypingText } from './CustomTexts';
import { fadeIn, staggerContainer } from '../utils/motion';

const Extras = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row md:justify-center  flex-wrap gap-3">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="p-4 md:max-w-[45%] font-work"
        >
          <TypingText
            title="HOW IT WORKS"
            textStyles="text-[36px] gradient-text font-inter font-bold"
          />
          <motion.p
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="lg:text-[20px] font-work font-semibold md:text-[17px]"
          >
            Submitting your essay for evaluation is easy with CritiWrite. Follow
            these simple steps:
          </motion.p>
          <motion.p
            variants={fadeIn('up', 'tween', 0.3, 1)}
            className="lg:text-[20px] md:text-[17px] font-work font-semibold"
          >
            1. Go to the{' '}
            <Link to="/form" className=" gradient-text">
              Evaluation page.
            </Link>
          </motion.p>
          <motion.p
            variants={fadeIn('up', 'tween', 0.4, 1)}
            className="lg:text-[20px] md:text-[17px] font-work font-semibold"
          >
            2. Make sure to fill all the details as may be required
          </motion.p>
          <motion.p
            variants={fadeIn('up', 'tween', 0.5, 1)}
            className="lg:text-[20px] md:text-[17px] font-work font-semibold"
          >
            3. Upload your essay through our secure and user-friendly platform.
          </motion.p>
          <motion.p
            variants={fadeIn('up', 'tween', 0.6, 1)}
            className="lg:text-[20px] md:text-[17px] font-work font-semibold"
          >
            4. Make a secure payment for the evaluation service selected.
          </motion.p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="p-4 md:max-w-[45%] font-work"
        >
          <TypingText
            title="EVALUATION"
            textStyles="text-[36px] font-inter font-bold"
          />
          <motion.p
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="lg:text-[20px] md:text-[17px] font-work font-semibold"
          >
            Once your essay is submitted, our expert evaluators will carefully
            review and analyze it based on the official rubrics of the
            respective exam. We prioritize accuracy, thoroughness, and timely
            feedback. Our typical turnaround time is 24 hours (or 48 hours
            during peak periods) to ensure you receive your evaluated essay
            promptly.
          </motion.p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="p-4 md:w-[60%] font-work"
        >
          <TypingText
            title="ACCURACY"
            textStyles="text-[36px] gradient-text font-inter font-bold"
          />
          <motion.p
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="text-[black] lg:text-[20px] md:text-[17px] font-work font-semibold"
          >
            At CritiWrite, we understand the significance of adhering to the
            official rubrics of each exam. Our evaluators are well-versed in
            these rubrics, ensuring that your essay is evaluated based on the
            specific criteria set by the exam authorities. This guarantees
            accurate assessment and feedback that aligns with the expectations
            of the examiners.
          </motion.p>
        </motion.div>
      </section>
    </>
  );
};

export default Extras;
