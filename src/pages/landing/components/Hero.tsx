import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HERO_COPY } from '../../../constants/landing';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
<section className="bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16 md:py-24">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-wider" style="color: yellow;">
              No alcanza solo con pagar IA; hay que saber usarla también.
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              {HERO_COPY.h1}
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-xl mx-auto md:mx-0">
              {HERO_COPY.subtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => navigate('/prompt')}
                className="bg-rubika-orange hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-lg text-lg transition-transform transform hover:scale-105"
              >
                Empezar a utilizar
              </button>
            </div>
             <div className="mt-8 text-sm font-medium flex justify-center md:justify-start space-x-4" style="color: yellow;">
                <span >+Rápido de ejecutar</span>
                <span>·</span>
                <span>+Enfocado en objetivos</span>
                <span>·</span>
                <span>+Listo para negocio real</span>
            </div>
          </div>

          {/* Image/Illustration Placeholder */}
          <div className="flex items-center justify-center">
            <img src="https://i.imgur.com/BhdI1Y0.png" alt="Ilustración de emprendedores usando IA" className="w-full h-auto rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
