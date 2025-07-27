"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is CVGenie really free to use?",
      answer: "Yes! CVGenie offers a completely free resume builder with beautiful templates and smart features."
    },
    {
      question: "Can I download my resume as a PDF?",
      answer: "Absolutely! Once you’re done editing, just click download and your resume will be saved as a high-quality PDF."
    },
    {
      question: "Will my data be safe?",
      answer: "Yes, we respect your privacy. Your resume data stays on your device and is never auto-saved unless you choose to."
    },
    {
      question: "Do I need design skills?",
      answer: "Nope! Our smart layout handles everything for you — just fill in the blanks and get a perfect resume instantly."
    }
  ];

  return (
    <div className="relative h-[1000px] overflow-hidden mask-image-top">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover opacity-50 backdrop-blur-sm"
        style={{ backgroundImage: "url('/resume-blue.jpg')" }}
      ></div>

      {/* Text & Content */}
      <div className="relative z-10 pt-20 flex flex-col items-center justify-center px-4">
        <div className="flex items-center justify-center gap-3 mt-4">
          <img
            src="/sparkle.png"
            alt="sparkle"
            className="w-8 h-8 object-contain animate-sparkle text-extrabold"
          />
          <h2 className="text-6xl font-bold text-black drop-shadow-md">
            Still Confused?
          </h2>
          <img
            src="/sparkle.png"
            alt="sparkle"
            className="w-8 h-8 object-contain animate-sparkle text-extrabold mt-2"
          />
        </div>

        <p className="text-xl mt-4 text-gray-700 text-center max-w-2xl">
          Explore the magical tools that make CVGenie the easiest way to build stunning resumes.
        </p>

        {/* FAQ Accordion */}
        <div className="mt-12 max-w-3xl w-full space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-md rounded-xl p-5 shadow-md"
            >
              <button
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-black"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                {faq.question}
                <ChevronDown
                  className={`h-6 w-6 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-700 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
        {/* Get Help Button */}
<div className="mt-10 flex justify-center">
  <button className="flex items-center gap-1 text-black/80 px-6 py-2 rounded-sm shadow-md hover:shadow-xl transition-all duration-300 font-semibold text-lg hover:scale-105 bg-white/70 backdrop-blur-md">
    <img
      src="/problem-solving.png"
      alt="Problem Solving"
      className="w-6 h-6 object-contain"
    />
    Get Help
  </button>
</div>


      </div>
    </div>
  );
}
