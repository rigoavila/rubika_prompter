import React from 'react';
import { PACKS_GRID_COPY } from '../../../constants/landing';
import { ArrowRight } from 'lucide-react';

const PacksGrid: React.FC = () => {
  return (
<section className="py-16 md:py-24 bg-slate-100 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            {PACKS_GRID_COPY.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Una librería de prompts que cubre todo el ciclo de vida de tu negocio.
          </p>
        </div>

        <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {PACKS_GRID_COPY.packs.map((pack) => (
            <div key={pack.name} className="group flex flex-col justify-between p-6 bg-white dark:bg-slate-700 rounded-2xl border border-slate-200 dark:border-slate-600 hover:border-rubika-orange dark:hover:border-rubika-yellow transition-all">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {pack.name}
                </h3>
                <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
                  {pack.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PacksGrid;
