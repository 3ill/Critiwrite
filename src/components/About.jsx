import { motion } from 'framer-motion';
import img from '../assets/img.jpg';
import img2 from '../assets/img3.jpg';
import { TypingText } from './CustomTexts';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row justify-center align-center gap-3">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="min-h-[200px] font-sans w-[100%] bg-[grey]mb-[20px] p-[3%] max-h-[400px]"
        >
          <TypingText
            title="ABOUT US"
            textStyles="text-[36px] gradient-text font-inter font-bold"
          />
          <motion.p
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="font-work font-semibold tracking-wide lg:text-[20px] md:text-[17px] "
          >
            At CritiWrite, our mission is to empower individuals to achieve
            their highest writing potential. We strive to provide exceptional
            essay evaluation services that foster growth, confidence, and
            success. Our vision is to become the go-to platform for students and
            professionals seeking expert guidance and constructive feedback to
            excel in their writing endeavors.
          </motion.p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="m-[2%] p-[2%] max-w-[100%] md:w-[80%]"
        >
          <motion.img
            variants={fadeIn('left', 'tween', 0.3, 1)}
            src={img}
            alt=""
            className="max-h-[100%] w-100% rounded-[15px]"
          />
        </motion.div>
      </section>

      <section className="flex flex-col-reverse md:flex-row justify-center align-center gap-3 mt-[30px]">
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="m-[2%] p-[2%] max-w-[100%] md:w-[80%]"
        >
          <motion.img
            variants={fadeIn('right', 'tween', 0.3, 1)}
            src={img2}
            alt=""
            className="max-h-[100%] w-100% rounded-[15px]"
          />
        </motion.section>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="min-h-[200px] w-[100%]  mb-[20px] p-[3%] max-h-[400px]"
        >
          <TypingText
            title="EXPERIENCE"
            textStyles="font-inter text-[36px] font-bold"
          />
          <motion.p
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="font-work font-semibold tracking-wide lg:text-[20px] md:text-[17px]"
          >
            Our team of expert evaluators consists of highly qualified
            professionals with extensive experience in evaluating essays for
            various exams. They possess in-depth knowledge of the official
            rubrics and are well-equipped to provide insightful feedback that
            enhances your writing skills.
          </motion.p>
        </motion.div>
      </section>
    </>
  );
};

export default About;
