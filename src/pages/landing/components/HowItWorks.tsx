import React from 'react';
import { HOW_IT_WORKS_COPY } from '../../../constants/landing';

const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            {HOW_IT_WORKS_COPY.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            En solo 3 pasos, transformas tus ideas en acciones concretas.
          </p>
        </div>

        <div className="mt-12 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-700" style={{ transform: 'translateY(-50%)' }}></div>

          <div className="relative grid gap-12 grid-cols-1 md:grid-cols-3">
            {HOW_IT_WORKS_COPY.steps.map((step, index) => (
              <div key={step.name} className="text-center">
                <div className="flex items-center justify-center mx-auto h-16 w-16 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 relative z-10">
                  <span className="text-2xl font-bold text-rubika-orange">{index + 1}</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">
                  {step.name}
                </h3>
                <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
