import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TypingText } from './CustomTexts';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqData = [
    {
      question:
        'How does essay evaluation at CritiWrite benefit my exam preparation?',
      answer:
        'Essay evaluation at CritiWrite provides you with personalized feedback and analysis based on the official rubrics of the exam you are preparing for. This helps you understand your strengths and weaknesses, improve your writing skills, and align your essays with the exam requirements, ultimately increasing your chances of achieving a higher score.',
    },
    {
      question: 'Are the evaluators at CritiWrite qualified and experienced?',
      answer:
        'Yes, our evaluators at CritiWrite are highly qualified and experienced. They have extensive knowledge of the official rubrics for IELTS, TOEFL, GRE, and SAT exams, ensuring accurate evaluation and valuable feedback. Our evaluators have a proven track record of helping students and professionals succeed in their writing goals.',
    },
    {
      question: 'What is the turnaround time for receiving evaluated essays?',
      answer:
        'We understand the importance of timely feedback. At CritiWrite, we strive to provide a prompt turnaround time for evaluating your essays. Typically, you can expect to receive your evaluated essay within [insert estimated timeframe]. This allows you to review the feedback and make necessary improvements in a timely manner.',
    },
    {
      question: 'How detailed and comprehensive is the feedback provided?',
      answer:
        'The feedback provided by our evaluators is detailed and comprehensive. They carefully analyze your essay, highlighting both strengths and areas for improvement. Our evaluators provide specific suggestions, tips, and examples to help you enhance your writing skills and address any weaknesses. We aim to provide feedback that is actionable and valuable for your exam preparation.',
    },
    {
      question:
        'Can I request a specific focus or highlight areas for improvement in my essay?',
      answer:
        'Absolutely! At CritiWrite, we understand that every writer has unique needs. You can certainly request a specific focus or highlight areas for improvement in your essay when you submit it for evaluation. If you have specific concerns or areas you want our evaluators to pay attention to, please provide clear instructions along with your essay submission. This helps our evaluators provide feedback that aligns with your goals.',
    },
    {
      question: 'What if I have an issue with my evaluation?',
      answer:
        'If you have any concerns about your evaluation or require assistance, please reach out to our customer support team. We are committed to ensuring your satisfaction with our services.',
    },
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="max-w-3xl mx-auto p-[4%]"
    >
      <TypingText
        title="FAQS"
        textStyles="text-[36px] gradient-text font-bold font-inter mb-6 md:text-center"
      />
      {faqData.map((item, index) => (
        <div key={index} className="mb-4">
          <button
            className="flex items-center justify-between w-full px-4 py-2 bg-[#d1dbde] hover:bg-[white] rounded-md focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <motion.span
              variants={fadeIn('up', 'tween', 0.2, 1)}
              className="lg:text-[20px] md:text-[17px] tracking-wide text-[#1f1e20] font-semibold font-work"
            >
              {item.question}
            </motion.span>
            <svg
              className={`w-6 h-6 transition-transform ${
                activeIndex === index ? 'transform rotate-180' : ''
              }`}
              fill="black"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {activeIndex === index && (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className="px-4 py-2 rounded-md"
            >
              <motion.p
                variants={fadeIn('down', 'tween', 0.2, 1)}
                className="text-[#000000] font-work"
              >
                {item.answer}
              </motion.p>
            </motion.div>
          )}
        </div>
      ))}
    </motion.div>
  );
};

export default FAQs;
