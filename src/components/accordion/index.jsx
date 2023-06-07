
// import React, { useState } from 'react';
// import { FaPlus, FaMinus } from 'react-icons/fa';
// import { Disclosure } from "@headlessui/react";
// import styles from "./styles.css";

// const Accordion = ({ question, answer }) => {
//     const [isOpen, setIsOpen] = useState(false);
  
//     const toggleAccordion = () => {
//       setIsOpen(!isOpen);
//     };

//     return (
//       <>
//       <div className="faq-item ">
//         <div className="faq-question" onClick={toggleAccordion}>
//           <span className="faq-question-text">{question}</span>
//           <span className="faq-icon">{isOpen ? <FaMinus /> : <FaPlus />}</span>
//         </div>
//         {isOpen && <p className="faq-answer">{answer}</p>}
//       </div>

 
// </>
//     );
//   };
  
//   export default Accordion;
  


import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-[flex flex-col items-center]   bg-white mb-3 lg:w-[800px] ">
      <div
        className="flex items-start md:items-center justify-between p-4 lg:px-8 lg:py-[30px] gap-2  cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className="text-[18px] md:text-[24px] font-semibold leading-[26px] text-black ">{title}</h2>
        <span className={isOpen ? 'transform rotate-180' : ''}>
          &#9660;
        </span>
      </div>
      {isOpen && (
        <div className="p-4 lg:px-8  pt-0 text-[14px] lg:text-[18px] text-[#666666] lg:w-[750px] ">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
