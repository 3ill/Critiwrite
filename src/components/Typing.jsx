import { useState, useEffect } from 'react';

const Typingeffect = ({ text, delay }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    let intervalId = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, delay);

    return () => clearInterval(intervalId);
  }, [text, delay]);

  return <h3 className={styles.header3Styles}>{displayText}</h3>;
};

const styles = {
  header3Styles:
    'text-[24px] font-work mr-[20px] md:mr-[-20px] md:text-[30px]  font-inter font-semibold text-[black] mt-[10px] lg:text-[55px] max-sm:text-[26px]',
};

export default Typingeffect;
