import React from 'react';
import { BENEFITS_COPY } from '../../../constants/landing';
import { Rocket, Orbit, Target, Timer, TrendingUp, ShoppingCart, LucideProps } from 'lucide-react';

// A simple mapping from the string in constants to the imported icon component.
const iconComponents: { [key: string]: React.FC<LucideProps> } = {
  Rocket,
  Orbit,
  Target,
  Timer,
  TrendingUp,
  ShoppingCart,
};

const Benefits: React.FC = () => {
  return (
<section id="beneficios" className="py-16 md:py-24 bg-slate-100 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Beneficios Clave de Prompt Architect
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Diseñado para emprendedores y equipos que necesitan resultados, no solo promesas.
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS_COPY.map((benefit) => {
            const Icon = iconComponents[benefit.icon];
            return (
              <div key={benefit.title} className="p-6 bg-white dark:bg-slate-700 rounded-2xl shadow-sm transition-transform hover:scale-105 hover:shadow-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-rubika-orange text-white">
                  {Icon ? <Icon className="h-6 w-6" /> : null}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
