import React from 'react';
import { FOOTER_COPY, SOCIAL_LINKS } from '../../../constants/landing';
import { Linkedin, Instagram, Youtube } from 'lucide-react';

const socialIcons = {
  linkedin: <Linkedin className="h-6 w-6" />,
  instagram: <Instagram className="h-6 w-6" />,
  youtube: <Youtube className="h-6 w-6" />,
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-slate-500 dark:text-slate-400 text-center md:text-left">
            <p>&copy; {FOOTER_COPY.legal}</p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-rubika-blue dark:hover:text-blue-400 transition-colors">
              <span className="sr-only">LinkedIn</span>
              {socialIcons.linkedin}
            </a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">
              <span className="sr-only">Instagram</span>
              {socialIcons.instagram}
            </a>
            <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-red-600 dark:hover:text-red-500 transition-colors">
              <span className="sr-only">YouTube</span>
              {socialIcons.youtube}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
