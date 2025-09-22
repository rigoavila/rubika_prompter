import React, { useState } from 'react';
import { FAQ_COPY } from '../../../constants/landing';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FaqItem: React.FC<{ question: string; answer: string; }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 dark:border-slate-700 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          {question}
        </h3>
        <span className="text-rubika-orange">
          {isOpen ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
        </span>
      </button>
      {isOpen && (
        <div className="mt-4 pr-8">
          <p className="text-base text-slate-600 dark:text-slate-300">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

const Faq: React.FC = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            {FAQ_COPY.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Resolvemos tus dudas para que empieces con total confianza.
          </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          {FAQ_COPY.questions.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
