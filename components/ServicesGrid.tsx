import React from 'react';
import { Link } from 'react-router-dom';
import { useSiteData } from '../hooks/useSiteData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const ServicesGrid = ({ limit }: { limit?: number }) => {
  const { data: site } = useSiteData();
  const services = limit ? site.services.slice(0, limit) : site.services;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => {
        const image = site.media.serviceImages[service.id];
        return (
          <div key={service.id} className="bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full overflow-hidden group">
            {image && (
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={image.url} 
                  alt={image.alt || service.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            )}
            <div className="h-1 bg-primary w-0 group-hover:w-full transition-all duration-500" />
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{service.name}</h3>
              <p className="text-slate-600 mb-6 flex-1">{service.shortDescription}</p>
              
              {service.benefits.length > 0 && (
                <ul className="mb-6 space-y-2">
                  {service.benefits.slice(0, 2).map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-500">
                      <CheckCircle2 size={16} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              )}

              <Link 
                to={`/servicos/${service.slug}`} 
                className="inline-flex items-center text-primary font-bold group-hover:text-primary-dark transition-colors"
              >
                Saiba mais
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesGrid;