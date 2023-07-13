import { useState, useEffect } from 'react';

import {
  typing,
  typing2,
  typing3,
  typing5,
  asset1,
  typing6,
  typing7,
} from '../assets';
import { Link } from 'react-router-dom';
import Typingeffect from './Typing';
import { motion, useReducedMotion } from 'framer-motion';
import { staggerContainer, textVariant, fadeIn } from '../utils/motion';

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const [currentImage, setCurrentImage] = useState(0);
  const images = [typing, typing2, typing3, typing5, typing6, typing7];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);

  const {
    slideShow,
    headerWrapper,
    header1Styles,

    buttonStyle,
    buttonTextStyle,
  } = heroStyles;

  return (
    <section className="max-w-full overflow-hidden">
      {/**hero images and slideshow */}
      <section className="relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          reduceMotion={!shouldReduceMotion}
          viewport={{ once: false, amount: 0.25 }}
          className="max-sm:hidden"
        >
          <motion.img
            variants={fadeIn('right', 'tween', 0.3, 1)}
            src={images[currentImage]}
            alt="hero_bg"
            className={`${slideShow} lg:blur-none md:blur-sm z-10 md:rounded-[25px]`}
          />
        </motion.div>

        <div className="relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            reduceMotion={!shouldReduceMotion}
            viewport={{ once: false, amount: 0.25 }}
          >
            <motion.img
              variants={fadeIn('right', 'tween', 0.3, 1)}
              reduceMotion={!shouldReduceMotion}
              src={asset1}
              alt="mobile_hero"
              className="lg:hidden md:hidden max-sm:w-[395px] max-sm:h-[400px] max-sm:mt-[175px] max-sm:ml-5 z-10"
            />
          </motion.div>
        </div>
      </section>

      {/**Hero text & Headers */}
      <section>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          reduceMotion={!shouldReduceMotion}
          className={headerWrapper}
        >
          <motion.h1 variants={textVariant(1.1)} className={header1Styles}>
            Unlock your
            <br className="md:hidden" /> Writing
            <span className="font-inter"> Potential</span>
          </motion.h1>

          <Typingeffect text="Achieve your dream score" delay={100} />

          {/**get started button */}
          <Link to="/form">
            <button className={`${buttonStyle} z-10`}>
              <p className={buttonTextStyle}>Get Started</p>
            </button>
          </Link>
        </motion.div>
      </section>
    </section>
  );
};

const heroStyles = {
  slideShow:
    'w-[400px] h-[679px] md:w-[800px]  opacity-[0.7] md:opacity-[0.8] md:h-[879px] lg:h-[80vh]',
  headerWrapper:
    'absolute top-[80px] left-0 w-full flex flex-col items-center md:absolute md:top-[50%] md:left-[50%] md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:text-center  lg:absolute lg:top-[50%] lg:left-[75.7%] lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:text-center lg:w-[40%] max-sm:top-[33%] max-sm:left-[50%] max-sm:transform max-sm:-translate-x-1/2 max-sm:-translate-y-1/2',
  header1Styles:
    'text-[40px] text-[black] font-inter font-extrabold md:text-[50px] lg:text-[91px] max-sm:text-[43px]',
  header3Styles:
    'text-[24px] font-work mr-[20px] md:mr-[-20px] md:text-[30px]  font-inter font-semibold text-[black] mt-[10px] lg:text-[55px] max-sm:text-[26px]',
  buttonStyle:
    'w-[183px] h-[55px] mr-[140px] md:ml-[140px] rounded-[17px] bg-secondary flex justify-center items-center mt-[15px] md:h-[77px] hover:bg-[#167396] max-sm:mr-[170px] lg:w-[283px]',
  buttonTextStyle:
    'text-[24px] font-inter font-extrabold text-primary animate-pulse',
};

export default Hero;
