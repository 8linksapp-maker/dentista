import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useSiteData } from '../hooks/useSiteData';
import { Check, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const { data: site } = useSiteData();
  
  const service = site.services.find(s => s.slug === slug);
  
  if (!service) {
    return <div className="p-10 text-center">Serviço não encontrado. <Link to="/servicos" className="text-primary underline">Voltar</Link></div>;
  }

  const bgImage = site.media.serviceImages[service.id]?.url;

  // Schema: Service
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: site.settings.companyName,
    },
    areaServed: { 
      '@type': 'City', 
      name: site.settings.contact.address.city 
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Tratamentos Odontológicos',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.name
          }
        }
      ]
    }
  };

  // Schema: FAQ
  const faqSchema = service.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  } : null;

  const combinedSchema = faqSchema ? [serviceSchema, faqSchema] : serviceSchema;

  return (
    <div className="bg-white min-h-screen pb-20">
      <SEO 
        title={service.name}
        description={service.shortDescription}
        image={bgImage}
        schema={combinedSchema}
      />

      {/* Header with Image Background */}
      <div 
        className="relative py-20 lg:py-28 text-white bg-slate-900 bg-cover bg-center"
        style={{ backgroundImage: bgImage ? `url(${bgImage})` : undefined }}
      >
        <div className="absolute inset-0 bg-slate-900/80"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">{service.headline}</h1>
          <p className="text-xl text-slate-200">{service.shortDescription}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Sobre o Tratamento</h2>
            <p className="text-slate-600 leading-relaxed text-lg">{service.description}</p>
          </section>

          {service.benefits.length > 0 && (
            <section className="bg-sky-50 rounded-2xl p-8 border border-sky-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Benefícios</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-0.5">
                      <Check size={14} className="text-primary" />
                    </div>
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {service.howItWorks.length > 0 && (
            <section>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Como funciona</h3>
              <div className="space-y-6">
                {service.howItWorks.map((step) => (
                  <div key={step.number} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">{step.title}</h4>
                      <p className="text-slate-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {service.faqs.length > 0 && (
            <section>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Perguntas Frequentes</h3>
              <div className="space-y-4">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-gray-200 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">{faq.question}</h4>
                    <p className="text-slate-600 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 sticky top-24">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Agende sua avaliação</h3>
            <p className="text-slate-500 text-sm mb-6">Preencha o formulário ou entre em contato pelo WhatsApp para saber mais sobre {service.name}.</p>
            
            <a 
              href={`https://wa.me/55${site.settings.contact.whatsapp.replace(/\D/g,'')}`}
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center mb-4 transition-colors shadow-sm"
            >
              Falar no WhatsApp
            </a>
            
            <Link 
              to="/contato"
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3 px-4 rounded-lg flex items-center justify-center transition-colors"
            >
              Formulário de Contato
            </Link>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <h4 className="font-semibold text-sm text-slate-900 mb-4">Outros Tratamentos</h4>
              <ul className="space-y-2">
                {site.services.filter(s => s.id !== service.id).slice(0, 4).map(s => (
                  <li key={s.id}>
                    <Link to={`/servicos/${s.slug}`} className="text-sm text-gray-500 hover:text-primary flex items-center justify-between group">
                      {s.name}
                      <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;