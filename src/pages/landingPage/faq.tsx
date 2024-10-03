import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

type FaqItem = {
  question: string;
  answer: string;
};

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const listFaq: FaqItem[] = [
    {
      question: "How do I apply for Lashnetic services?",
      answer: "You can apply via our website or text this number +2348064774505.",
    },
    {
      question: "Can I choose a payment plan that suits my budget?",
      answer: "Yes, we offer flexible payment plans. Please contact us for more details.",
    },
    {
      question: "What is the process for booking an appointment?",
      answer: "Our team will reach out after your application and guide you through the process.",
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes, we provide continuous support for all our services. Contact us anytime.",
    },
  ];

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between opening and closing the answer
  };

  return (
    <div className="flex md:flex-row justify-between  flex-col p-10 w-[95%] md:max-w-[1200px] mx-auto">
      <div className="w-full md:w-[50%]">
        <h1 className="text-2xl font-bold mb-5">Frequently Asked Questions</h1>
      </div>

      <div className="w-full md:w-[50%]">
        {listFaq.map((faq, index) => (
          <div key={index} className="bg-blue-200 my-4 rounded-lg">
            <div
              className="px-5 py-4 flex flex-row justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <h2 className="font-medium">{faq.question}</h2>
              {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {activeIndex === index && (
              <div className="px-5 pb-4 text-gray-700">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
