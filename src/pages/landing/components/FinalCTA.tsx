import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FINAL_CTA_COPY } from '../../../constants/landing';

const FinalCTA: React.FC = () => {
    const navigate = useNavigate();

    return (
<section className="bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {FINAL_CTA_COPY.title}
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Empieza hoy y usa la IA como una ventaja competitiva real, no como un juguete.
          </p>
          <div className="mt-8 flex justify-center">
            <a href='https://cafecito.app/rubikanetworking' rel='noopener' target='_blank'>
              <img
                srcSet='https://cdn.cafecito.app/imgs/buttons/button_6.png 1x, https://cdn.cafecito.app/imgs/buttons/button_6_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_6_3.75x.png 3.75x'
                src='https://cdn.cafecito.app/imgs/buttons/button_6.png'
                alt='Invitame un café en cafecito.app'
              />
            </a>
          </div>
        </div>
      </div>
    </section>
    );
};

export default FinalCTA;
