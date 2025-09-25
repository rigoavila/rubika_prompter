import React from 'react';
import { TESTIMONIALS_COPY } from '../../../constants/landing';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
<section id="testimonios" className="py-16 md:py-24 bg-slate-900 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Emprendedores y equipos que ya están usando la IA como una ventaja real.
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS_COPY.map((testimonial) => (
            <div key={testimonial.name} className="bg-slate-800 rounded-2xl p-8 shadow-soft flex flex-col">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="h-5 w-5" style="color: yellow;" />)}
              </div>
              <blockquote className="flex-grow text-slate-200 text-lg">
                "{testimonial.quote}"
              </blockquote>
              <footer className="mt-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-slate-300">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
                 {testimonial.result && (
                    <div className="mt-4 pt-4 border-t border-slate-700">
                        <p className="text-md font-semibold text-green-400">{testimonial.result}</p>
                    </div>
                )}
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
