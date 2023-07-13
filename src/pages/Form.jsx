import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { tag } from '../assets/index.js';
import { motion } from 'framer-motion';
import { TypingText } from '../components/CustomTexts.jsx';
import { staggerContainer } from '../utils/motion';
import MarkdownSupport from '../components/MarkdownSupport.jsx';

const Form = ({ updateName, updateEmail, updatePhone }) => {
  const form = useRef();
  const updateExamType = () => {};
  const navigate = useNavigate();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_b9rb4do',
        'template_xocrpdo',
        form.current,
        'cNr8CRb1dMidHfvjQ'
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('essay sent succesfully');
          navigate('/payment');
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="py-2 space-y-2"
    >
      <TypingText
        title="Write an Essay"
        textStyles="text-center  font-inter font-bold text-3xl md:text-5xl"
      />
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col space-y-2 px-4 items-center w-full py-4 justify-center md:px-8"
      >
        <div className="relative">
          <input
            name="name"
            className="
    block
    rounded-md
    px-6
    pt-6
    pb-1
    w-[350px]
    md:w-[500px]
    text-md
  text-black
  bg-[#d1dbde]
    appearance-none
    focus:outline-none
    focus:ring-0
    peer
    invalid:border-b-1
    "
            onChange={(e) => updateName(e.target.value)}
            required
            placeholder=" "
          />
          <label
            className="
    absolute 
    text-md
    font-work
    font-semibold
  text-zinc-400
    duration-150 
    transform 
    -translate-y-3 
    scale-75 
    top-4 
    z-10 
    origin-[0] 
    left-6
    peer-placeholder-shown:scale-100 
    peer-placeholder-shown:translate-y-0 
    peer-focus:scale-75
    peer-focus:-translate-y-3
"
          >
            Full Name
          </label>
        </div>
        <div className="relative">
          <input
            name="phone"
            className="
    block
    rounded-md
    px-6
    pt-6
    pb-1
    w-[350px]
    md:w-[500px]
    text-md
    font-work
    font-semibold
    text-black
  bg-[#d1dbde]
    appearance-none
    focus:outline-none
    focus:ring-0
    peer
    invalid:border-b-1
    "
            onChange={(e) => updatePhone(e.target.value)}
            type="number"
            required
            placeholder=" "
          />
          <label
            className="
    absolute 
    text-md
    font-work
    font-semibold
  text-zinc-400
    duration-150 
    transform 
    -translate-y-3 
    scale-75 
    top-4 
    z-10 
    origin-[0] 
    left-6
    peer-placeholder-shown:scale-100 
    peer-placeholder-shown:translate-y-0 
    peer-focus:scale-75
    peer-focus:-translate-y-3
"
          >
            Phone Number
          </label>
        </div>
        <div className="relative">
          <input
            name="email"
            className="
    block
    rounded-md
    px-6
    pt-6
    pb-1
    w-[350px]
    md:w-[500px]
    text-md
  text-black
  bg-[#d1dbde]
    appearance-none
    focus:outline-none
    focus:ring-0
    peer
    invalid:border-b-1
    "
            onChange={(e) => updateEmail(e.target.value)}
            required
            placeholder=" "
          />
          <label
            htmlFor={'email'}
            className="
    absolute 
    text-md
    font-work
    font-semibold
  text-zinc-400
    duration-150 
    transform 
    -translate-y-3 
    scale-75 
    top-4 
    z-10 
    origin-[0] 
    left-6
    peer-placeholder-shown:scale-100 
    peer-placeholder-shown:translate-y-0 
    peer-focus:scale-75
    peer-focus:-translate-y-3
"
          >
            Email
          </label>
        </div>
        <div className="relative">
          <select
            name="examType"
            className="
      block
      rounded-md
      px-6
      pt-6
      pb-1
      w-[350px]
      md:w-[500px]
      text-sm
      font-work
      text-black
      bg-[#d1dbde]
      appearance-none
      focus:outline-none
      focus:ring-0
      peer
      invalid:border-b-1
    "
            onChange={(e) => updateExamType(e.target.value)}
            required
          >
            <option className="font-work" value="">
              Select Exam Type
            </option>
            <option className="font-work" value="IELTS Task 1">
              IELTS Task 1
            </option>
            <option className="font-work" value="IELTS Academic Task 2">
              IELTS Academic Task 2
            </option>
            <option className="font-work" value="IELTS General Task 2">
              IELTS General Task 2
            </option>
            <option className="font-work" value="SAT">
              SAT
            </option>
            <option className="font-work" value="TOEFL">
              TOEFL
            </option>
            <option className="font-work" value="other">
              Other
            </option>
          </select>
          <label
            htmlFor="examType"
            className="
      absolute 
      text-md
      font-work
      font-semibold
      text-zinc-400
      duration-150 
      transform 
      -translate-y-3 
      scale-75 
      top-4 
      z-10 
      origin-[0] 
      left-6
      peer-placeholder-shown:scale-100 
      peer-placeholder-shown:translate-y-0 
      peer-focus:scale-75
      peer-focus:-translate-y-3
    "
          >
            Exam Type
          </label>
        </div>

        <div className="relative">
          <MarkdownSupport />
          <label
            htmlFor="essay"
            className="absolute text-md font-work font-semibold text-zinc-400 duration-150 transform -translate-y-3 
            scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
          >
            Write your Essay Here
          </label>
        </div>
        <div className="flex">
          <img src={tag} alt="" height="100px" width="100px" className="" />
          <button
            type="submit"
            className="text-[16px] hover:bg-[#167396] font-work font-semibold text-[#1f1e20] rounded-[25px] min-w-[170px] p-3 bg-[#d1dbde]"
          >
            Submit
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Form;
