import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.h1 variants={textContainer} className={`${textStyles} gradient-text`}>
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? `\u00a0` : letter}
      </motion.span>
    ))}
  </motion.h1>
);
