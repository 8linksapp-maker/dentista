import React from 'react';
import { useSiteData } from '../hooks/useSiteData';
import HeroSection from '../components/HeroSection';
import ServicesGrid from '../components/ServicesGrid';
import { ShieldCheck, User, Star } from 'lucide-react';
import SEO from '../components/SEO';

const HomePage = () => {
  const { data: site } = useSiteData();
  const { about, services, contact } = site.pages.home;

  // Mapa de ícones para a seção About
  const iconMap: Record<string, React.ReactNode> = {
    'Smile': <User size={32} />,
    'Award': <ShieldCheck size={32} />,
    'Users': <Star size={32} />
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title={site.seo.pages.home.title}
        description={site.seo.pages.home.description}
      />
      <HeroSection />

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">{about.title}</h2>
            <p className="text-lg text-slate-600">{about.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {about.highlights.map((item, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-8 text-center hover:bg-slate-100 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  {iconMap[item.icon] || <Star size={32} />}
                </div>
                <div className="text-4xl font-extrabold text-slate-900 mb-2">{item.value}</div>
                <div className="text-slate-600 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">{services.title}</h2>
              <p className="text-slate-600 text-lg">{services.subtitle}</p>
            </div>
            <a href="/#/servicos" className="text-primary font-semibold hover:text-sky-700 transition-colors">
              Ver todos os tratamentos &rarr;
            </a>
          </div>
          <ServicesGrid limit={3} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">{contact.title}</h2>
          <p className="text-xl text-sky-100 mb-10">{contact.subtitle}</p>
          <a href="/#/contato" className="inline-block bg-white text-primary font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-gray-50 transition-colors transform hover:-translate-y-1">
            {contact.formTitle}
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;