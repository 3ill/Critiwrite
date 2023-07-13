import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const MarkdownSupport = () => {
  const [markdownText, setMarkdownText] = useState('');

  const handleInputChange = (e) => {
    setMarkdownText(e.target.value);
  };

  return (
    <div className="flex max-sm:flex-col md:flex-col lg:flex-row items-center justify-center">
      <textarea
        autoFocus
        value={markdownText}
        onChange={handleInputChange}
        placeholder="Markdown supported"
        className="block rounded-[15px] px-6 pt-6 pb-1 w-[350px] md:w-[500px] h-[580px] text-md font-work text-[black] bg-[#d1dbde] appearance-none focus:outline-none focus:ring-0 peer invalid:border-b-1"
      />
      <div className="block rounded-[15px] px-6 pt-6 pb-1 w-[350px] md:w-[500px] h-[580px] overflow-y-auto text-md font-work text-[black] bg-[#d1dbde] max-sm:mt-[7px] md:mt-[7px] lg:ml-[5px] markdown">
        <ReactMarkdown children={markdownText} remarkPlugins={[remarkGfm]} />
      </div>
    </div>
  );
};

export default MarkdownSupport;
