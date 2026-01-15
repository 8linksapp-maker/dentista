import React from 'react';
import { Link } from 'react-router-dom';
import { useSiteData } from '../hooks/useSiteData';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const { data: site } = useSiteData();
  const { companyName, contact, openingHours, slogan } = site.settings;

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">{companyName}</h3>
            <p className="text-gray-400 text-sm mb-4">{slogan}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-primary mt-0.5" />
                <span>{contact.address.street}, {contact.address.neighborhood}<br/>{contact.address.city} - {contact.address.state}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-primary" />
                <a href={`tel:${contact.phone}`} className="hover:text-white transition-colors">{contact.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-primary" />
                <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">{contact.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={18} className="text-primary" />
                <span>{openingHours}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {site.services.slice(0, 5).map(service => (
                <li key={service.id}>
                  <Link to={`/servicos/${service.slug}`} className="hover:text-primary transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Áreas de Atendimento</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {site.locations.map(location => (
                <li key={location.id}>
                  <span className="text-gray-500 hover:text-gray-300 cursor-default">
                    Dentista em {location.neighborhood}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {companyName}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;