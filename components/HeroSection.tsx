import React from 'react';
import { Link } from 'react-router-dom';
import { useSiteData } from '../hooks/useSiteData';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const { data: site } = useSiteData();
  const { hero } = site.pages.home;

  return (
    <section 
      className="relative py-24 lg:py-36 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: hero.backgroundImage ? `url(${hero.backgroundImage})` : undefined }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6 drop-shadow-md">
            {hero.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed max-w-2xl drop-shadow-sm">
            {hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to={hero.ctaLink} 
              className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg shadow-lg text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 transform hover:scale-105"
            >
              {hero.ctaText}
              <ArrowRight className="ml-2 -mr-1" size={20} />
            </Link>
            <Link 
              to="/servicos" 
              className="inline-flex justify-center items-center px-8 py-4 border-2 border-white/80 text-base font-bold rounded-lg text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary transition-all duration-300"
            >
              Conhecer Tratamentos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;