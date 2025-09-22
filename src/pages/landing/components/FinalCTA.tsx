import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FINAL_CTA_COPY } from '../../../constants/landing';

const FinalCTA: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-slate-800 dark:bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-16 md:py-20 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                        {FINAL_CTA_COPY.title}
                    </h2>
                    <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
                        Empieza hoy y usa la IA como una ventaja competitiva real, no como un juguete.
                    </p>
                    <div className="mt-8">
                        <button
                            onClick={() => navigate('/prompt')}
                            className="bg-rubika-orange hover:bg-opacity-90 text-white font-bold py-4 px-8 rounded-lg text-xl transition-transform transform hover:scale-105"
                        >
                            {FINAL_CTA_COPY.cta}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
